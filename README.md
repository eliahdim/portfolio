# Eliah Bäckström Dimmed - Portfolio Website

A clean, professional, and eye-catching portfolio website built with HTML, CSS, and JavaScript. Features a modern dark theme with jungle-inspired green accents, smooth animations, and responsive design.

## 🌟 Features

### Design & Style
- **Minimalist & Modern**: Clean, professional design with dark backgrounds
- **Jungle-Inspired Theme**: Green accent colors (#00ff88, #00cc6a, #00994d)
- **Smooth Animations**: CSS transitions, hover effects, and scroll animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Typography**: Google Fonts (Inter) for clean, readable text

### Sections
1. **Header/Navigation**: Sticky navigation with smooth scrolling
2. **Hero Section**: Eye-catching landing with call-to-action buttons
3. **About Me**: Interactive journey storytelling with 3 stages
4. **Skills**: Technology stack display with hover effects
5. **Projects**: Grid-based project showcase with tech tags
6. **Contact**: Contact form and social media links
7. **Footer**: Minimalist footer with copyright

### Interactive Features
- **Mobile Menu**: Hamburger menu for mobile devices
- **Journey Navigation**: Clickable buttons to navigate through personal journey
- **Smooth Scrolling**: Seamless navigation between sections
- **Form Validation**: Contact form with email validation
- **Scroll Animations**: Elements animate in as you scroll
- **Active Navigation**: Current section highlighting in navigation

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML/CSS/JavaScript (for customization)
- GitHub account (for hosting on GitHub Pages)

### Installation

1. **Clone or Download** the repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open the website** in your browser
   - Double-click `index.html` or
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     
     # Using PHP
     php -S localhost:8000
     ```

3. **View the website** at `http://localhost:8000`

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose `main` branch and `/ (root)` folder
   - Click "Save"

3. **Your website** will be available at `https://yourusername.github.io/repository-name`

### Other Hosting Options
- **Netlify**: Drag and drop the folder to deploy
- **Vercel**: Connect your GitHub repository
- **Traditional hosting**: Upload files via FTP

## 🎨 Customization

### Personal Information
Edit `index.html` to update:
- Name and title
- About me content
- Project details
- Contact information
- Social media links

### Colors & Theme
Modify `styles.css` variables in `:root`:
```css
:root {
    --accent-primary: #00ff88;    /* Main green */
    --accent-secondary: #00cc6a;  /* Darker green */
    --accent-tertiary: #00994d;   /* Darkest green */
    --bg-primary: #0a0a0a;       /* Main background */
    --bg-secondary: #111111;      /* Secondary background */
    --text-primary: #ffffff;      /* Main text */
}
```

### Adding Projects
1. **Duplicate** an existing project card in `index.html`
2. **Update** the content:
   - Project title
   - Description
   - Technology tags
   - GitHub and demo links
3. **Change** the icon by modifying the FontAwesome class

### Adding Skills
1. **Find** the skills grid in `index.html`
2. **Duplicate** a skill item
3. **Update** the icon and text

## 📱 Responsive Design

The website automatically adapts to different screen sizes:
- **Desktop**: Full layout with side-by-side sections
- **Tablet**: Adjusted spacing and grid layouts
- **Mobile**: Stacked layout with mobile navigation menu

## 🛠️ Technical Details

### File Structure
```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

### Dependencies
- **Google Fonts**: Inter font family
- **Font Awesome**: Icons (loaded via CDN)
- **No frameworks**: Pure HTML, CSS, and JavaScript

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🔧 Troubleshooting

### Common Issues

1. **Fonts not loading**:
   - Check internet connection
   - Verify Google Fonts link in HTML

2. **Icons not showing**:
   - Check Font Awesome CDN link
   - Verify icon class names

3. **Mobile menu not working**:
   - Check JavaScript console for errors
   - Verify CSS classes are properly applied

4. **Animations not smooth**:
   - Check if device supports CSS animations
   - Reduce motion in accessibility settings

### Performance Tips
- Optimize images before adding them
- Minimize external requests
- Use browser dev tools to check performance

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Share your customized version

## 📞 Support

If you need help:
1. Check the troubleshooting section above
2. Search existing issues
3. Create a new issue with details

## 🎯 Future Enhancements

Potential improvements:
- Dark/light theme toggle
- Blog section
- Portfolio filtering
- More interactive animations
- Backend integration for contact form
- Analytics tracking
- SEO optimization

---

**Built with ❤️ for Eliah Bäckström Dimmed**

*Last updated: January 2025*
