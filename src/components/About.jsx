import React from 'react';
import SectionHeader from './SectionHeader.jsx';

export default function About({ profile, journey, skills, infoCards, copy }) {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about-bg" aria-hidden="true" />
      <div className="container">
        <SectionHeader
          id="about-title"
          title={copy.title}
          subtitle={copy.subtitle}
        />

        <div className="about-content">
          <JourneyTimeline journey={journey} copy={copy} />
          <Skills skills={skills} copy={copy} />
          <ProfessionalSummary profile={profile} copy={copy} />
          <PersonalInfo infoCards={infoCards} />
        </div>
      </div>
    </section>
  );
}

function JourneyTimeline({ journey, copy }) {
  return (
    <div className="journey-section">
      <h3 className="journey-title">{copy.journeyTitle}</h3>
      <ol className="journey-timeline" aria-label={copy.timelineLabel}>
        {journey.map((stage) => (
          <li className="journey-stage reveal" key={stage.title}>
            <span className="journey-stage-marker" aria-hidden="true" />
            <article className="journey-stage-content">
              {stage.imageUrl ? (
                <div className="journey-image-container">
                  <img src={stage.imageUrl} alt="" loading="lazy" />
                </div>
              ) : (
                <div className="journey-icon-container" aria-hidden="true">
                  <i className={stage.icon} />
                </div>
              )}
              <div className="journey-text">
                <h4>{stage.title}</h4>
                {stage.meta ? <p className="journey-meta">{stage.meta}</p> : null}
                <p>{stage.description}</p>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Skills({ skills, copy }) {
  return (
    <div className="skills-section">
      <h3 className="skills-title">{copy.skillsTitle}</h3>
      <ul className="skills-grid" aria-label={copy.skillsLabel}>
        {skills.map((skill) => (
          <li className="skill-item reveal" key={skill.name}>
            <i className={skill.icon} aria-hidden="true" />
            <span>{skill.name}</span>
            {skill.detail ? <small>{skill.detail}</small> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProfessionalSummary({ profile, copy }) {
  return (
    <article className="professional-summary reveal">
      <h3 className="summary-title">{copy.profileTitle}</h3>
      <p className="summary-text">{profile.summary}</p>
    </article>
  );
}

function PersonalInfo({ infoCards }) {
  return (
    <div className="personal-info">
      {infoCards.map((item) => (
        <article className="info-card reveal" key={item.title}>
          <div className="info-icon" aria-hidden="true">
            <i className={item.icon} />
          </div>
          <h3>{item.title}</h3>
          <p>{item.value}</p>
        </article>
      ))}
    </div>
  );
}
