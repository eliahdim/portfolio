import React, { useState } from 'react';
import SectionHeader from './SectionHeader.jsx';

export default function Projects({ projects, onOpenProject, copy }) {
  const initiallyVisible = 6;
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, initiallyVisible);
  const hasMoreProjects = projects.length > initiallyVisible;

  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <div className="projects-bg" aria-hidden="true" />
      <div className="container">
        <SectionHeader
          id="projects-title"
          title={copy.title}
          subtitle={copy.subtitle}
        />

        <div className="projects-grid" id="projects-grid">
          {visibleProjects.map((project) => (
            <ProjectCard
              project={project}
              onOpenProject={onOpenProject}
              copy={copy}
              key={project.id}
            />
          ))}
        </div>

        {hasMoreProjects ? (
          <div className="projects-toggle">
            <button
              className="btn btn-secondary"
              type="button"
              aria-expanded={showAll}
              aria-controls="projects-grid"
              onClick={() => setShowAll((current) => !current)}
            >
              <span>{showAll ? copy.showFewer : copy.showMore}</span>
              <i className={`fas fa-chevron-${showAll ? 'up' : 'down'}`} aria-hidden="true" />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpenProject, copy }) {
  const hasGithub = Boolean(project.githubUrl);
  const hasDemo = Boolean(project.demoUrl);

  function handleDetailsClick(event) {
    onOpenProject(project, event.currentTarget);
  }

  return (
    <article className={`project-card reveal${project.featured ? ' featured' : ''}`}>
      {project.featured ? <span className="project-badge">{copy.featured}</span> : null}
      <div className="project-image">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={`${project.title} ${copy.screenshotSuffix}`}
            loading="lazy"
          />
        ) : (
          <i className={project.icon || 'fas fa-code'} aria-hidden="true" />
        )}
      </div>

      <div className="project-content">
        <p className="project-role">{project.role}</p>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.summary}</p>

        <ul className="project-tech" aria-label={`${project.title} ${copy.technologiesSuffix}`}>
          {project.technologies.map((tech) => (
            <li className="tech-tag" key={tech}>
              {tech}
            </li>
          ))}
        </ul>

        <div className="project-buttons">
          <button className="btn btn-small btn-primary" type="button" onClick={handleDetailsClick}>
            <span>{copy.details}</span>
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </button>
          {hasGithub ? (
            <a
              href={project.githubUrl}
              className="btn btn-small btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={copy.githubLabel(project.title)}
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
              aria-label={copy.demoLabel(project.title)}
            >
              <i className="fas fa-external-link-alt" aria-hidden="true" />
              <span>{copy.demo}</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
