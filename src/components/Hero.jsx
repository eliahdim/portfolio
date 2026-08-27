import React from 'react';

export default function Hero({ profile, stats, copy }) {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-canopy" aria-hidden="true" />
      <div className="hero-container">
        <div className="hero-content reveal visible">
          <p className="hero-badge">{profile.badge}</p>
          <h1 className="hero-title" id="hero-title">
            <span className="hero-name">{profile.name}</span>
            <span className="hero-role">{profile.role}</span>
          </h1>
          <p className="hero-tagline">{profile.tagline}</p>

          <dl className="hero-stats" aria-label={copy.statsLabel}>
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <dt className="stat-label">{stat.label}</dt>
                <dd className="stat-number">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>{copy.viewProjects}</span>
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>{copy.contactMe}</span>
              <i className="fas fa-envelope" aria-hidden="true" />
            </a>
            <a href={profile.cvUrl} className="btn btn-secondary" download>
              <span>{copy.downloadCv}</span>
              <i className="fas fa-file-arrow-down" aria-hidden="true" />
            </a>
          </div>

          <div className="hero-profile-links" aria-label={copy.profilesLabel}>
            <span className="hero-profile-label">{copy.profiles}</span>
            <a
              href={profile.github}
              className="hero-profile-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={copy.githubLabel}
            >
              <i className="fab fa-github" aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a
              href={profile.linkedin}
              className="hero-profile-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={copy.linkedinLabel}
            >
              <i className="fab fa-linkedin" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="hero-visual reveal visible">
          <div className="hero-image">
            <img
              src="images/eliahdimmed.jpg"
              alt={copy.portraitAlt}
              className="profile-photo"
              width="800"
              height="800"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      <a className="scroll-indicator" href="#about" aria-label={copy.exploreLabel}>
        <span>{copy.explore}</span>
        <span className="mouse" aria-hidden="true">
          <span className="wheel" />
        </span>
      </a>
    </section>
  );
}
