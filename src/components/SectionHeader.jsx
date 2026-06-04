import React from 'react';

export default function SectionHeader({ id, title, subtitle }) {
  return (
    <div className="section-header reveal">
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}
