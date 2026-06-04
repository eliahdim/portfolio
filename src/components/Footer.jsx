import React from 'react';
import { profile } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2026 {profile.fullName}. Built with React and Vite.</p>
      </div>
    </footer>
  );
}
