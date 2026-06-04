import React from 'react';
import SectionHeader from './SectionHeader.jsx';

export default function Projects({ projects, onOpenProject }) {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <div className="projects-bg" aria-hidden="true" />
      <div className="container">
        <SectionHeader
          id="projects-title"
          title="Selected Projects"
          subtitle="Practical work across web development, automation, and technical problem solving"
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard project={project} onOpenProject={onOpenProject} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpenProject }) {
  const hasGithub = Boolean(project.githubUrl);
  const hasDemo = Boolean(project.demoUrl);

  function handleDetailsClick(event) {
    onOpenProject(project, event.currentTarget);
  }

  return (
    <article className={`project-card reveal${project.featured ? ' featured' : ''}`}>
      {project.featured ? <span className="project-badge">Featured</span> : null}
      <div className="project-image">
        {project.imageUrl ? (
          <img src={project.imageUrl} alt={`${project.title} screenshot`} loading="lazy" />
        ) : (
          <i className={project.icon} aria-hidden="true" />
        )}
      </div>

      <div className="project-content">
        <p className="project-role">{project.role}</p>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.summary}</p>

        <ul className="project-tech" aria-label={`${project.title} technologies`}>
          {project.technologies.map((tech) => (
            <li className="tech-tag" key={tech}>
              {tech}
            </li>
          ))}
        </ul>

        <div className="project-buttons">
          <button className="btn btn-small btn-primary" type="button" onClick={handleDetailsClick}>
            <span>Details</span>
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </button>
          {hasGithub ? (
            <a
              href={project.githubUrl}
              className="btn btn-small btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} GitHub repository`}
            >
              <i className="fab fa-github" aria-hidden="true" />
              <span>GitHub</span>
            </a>
          ) : null}
          {hasDemo ? (
            <a
              href={project.demoUrl}
              className="btn btn-small btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live demo`}
            >
              <i className="fas fa-external-link-alt" aria-hidden="true" />
              <span>Demo</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
