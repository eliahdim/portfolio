import React, { useEffect, useRef } from 'react';

export default function ProjectModal({ project, onClose, copy }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    document.body.classList.add('modal-open');
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const images = project.imageUrls?.length
    ? project.imageUrls
    : project.imageUrl
      ? [project.imageUrl]
      : [];

  return (
    <div className="project-modal active" role="presentation">
      <button
        className="modal-overlay"
        type="button"
        aria-label={copy.closeLabel}
        onClick={onClose}
      />
      <article
        className="modal-content"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
      >
        <button
          className="modal-close"
          type="button"
          aria-label={copy.closeLabel}
          onClick={onClose}
          ref={closeButtonRef}
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <div className="modal-inner-content">
          {images.length ? (
            <div className={`modal-gallery${images.length === 1 ? ' single' : ''}`}>
              {images.map((imageUrl, index) => (
                <img
                  src={imageUrl}
                  alt={`${project.title} ${copy.galleryImageLabel(index + 1, images.length)}`}
                  className="modal-img"
                  loading="lazy"
                  key={imageUrl}
                />
              ))}
            </div>
          ) : null}

          <div className="modal-copy">
            <p className="project-role">{project.role}</p>
            <h2 className="modal-title" id="project-modal-title">
              {project.title}
            </h2>
            <p className="modal-desc" id="project-modal-description">
              {project.description}
            </p>
            <p className="modal-outcome">{project.outcome}</p>

            <ul
              className="modal-tech-stack"
              aria-label={`${project.title} ${copy.technologiesSuffix}`}
            >
              {project.technologies.map((tech) => (
                <li className="tech-pill" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>

            <div className="modal-actions">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="fab fa-github" aria-hidden="true" />
                  <span>{copy.viewGithub}</span>
                </a>
              ) : null}
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <i className="fas fa-external-link-alt" aria-hidden="true" />
                  <span>{copy.liveDemo}</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
