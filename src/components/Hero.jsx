import React from 'react';
import { profile, stats } from '../data/siteData.js';

export default function Hero() {
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

          <dl className="hero-stats" aria-label="Portfolio highlights">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <dt className="stat-label">{stat.label}</dt>
                <dd className="stat-number">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Contact Me</span>
              <i className="fas fa-envelope" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-visual reveal visible">
          <div className="hero-image">
            <img
              src="images/eliahdimmed.jpg"
              alt="Portrait of Eliah Dimmed"
              className="profile-photo"
              width="800"
              height="800"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      <a className="scroll-indicator" href="#about" aria-label="Scroll to about section">
        <span>Explore</span>
        <span className="mouse" aria-hidden="true">
          <span className="wheel" />
        </span>
      </a>
    </section>
  );
}
