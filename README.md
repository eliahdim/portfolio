# Eliah Dimmed Portfolio

Personal portfolio for Eliah Dimmed, built with React and Vite.

The site presents Eliah as a junior web developer / IT technician candidate with selected projects, a technical journey, skills, and contact options.

## Tech Stack

- React
- Vite
- CSS
- Formspree contact form
- GitHub Pages deployment

## Project Structure

```text
portfolio/
├── public/
│   └── images/              # Static image assets served by Vite
├── src/
│   ├── components/          # React sections and UI components
│   ├── data/                # Portfolio content data
│   ├── hooks/               # Reusable React hooks
│   ├── App.jsx              # Page composition
│   ├── main.jsx             # React entry point
│   └── styles.css           # Site styling
├── index.html               # Vite HTML shell and metadata
├── package.json             # Scripts and dependencies
└── vite.config.js           # Vite configuration
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Editing Content

Most portfolio content lives in:

```text
src/data/siteData.js
```

Update this file to change:

- Hero copy
- Stats
- Journey timeline
- Skills
- Project cards and modal descriptions
- Contact links

Images live in:

```text
public/images/
```

Use `images/file-name.ext` when referencing them from React data or components. Relative paths keep the site working on GitHub Pages project URLs.

## Adding Your CV

Drop your PDF CV here:

```text
public/files/eliah-dimmed-cv.pdf
```

The hero and contact section already include `Download CV` links pointing to:

```text
files/eliah-dimmed-cv.pdf
```

If you want another filename later, update `cvUrl` in `src/data/siteData.js`.

## Accessibility and UX Notes

The React version improves several issues from the old static implementation:

- Navigation toggle is now a real button with `aria-expanded`.
- Project details use a dialog-style modal with Escape-to-close and focus handling.
- Contact fields use labels instead of placeholder-only inputs.
- Content is rendered through JSX instead of raw `innerHTML`.
- Reduced-motion preferences are respected in CSS and the canvas animation.
- Focus states are visible for keyboard users.

## Deployment

The GitHub Actions workflow builds the Vite app and deploys the `dist/` folder to GitHub Pages.

For a project page deployment, `vite.config.js` uses `base: './'` so the built assets work from relative paths.
