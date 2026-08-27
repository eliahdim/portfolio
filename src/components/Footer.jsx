import React from 'react';

export default function Footer({ profile, copy }) {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2026 {profile.fullName}. {copy.builtWith}</p>
      </div>
    </footer>
  );
}
