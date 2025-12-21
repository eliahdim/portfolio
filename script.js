// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all functionality
    initMobileMenu();
    initJourneyNavigation();
    initSmoothScrolling();
    initContactForm();
    initScrollAnimations();
    initActiveNavigation();
    loadProjects(); // Load projects from JSON
    loadSkills(); // Load skills from JSON
});

// Mobile Menu Toggle
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Interactive Journey Navigation
function initJourneyNavigation() {
    const journeyBtns = document.querySelectorAll('.journey-btn');
    const journeyStages = document.querySelectorAll('.journey-stage');

    journeyBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const targetStage = this.getAttribute('data-stage');

            // Update active button
            journeyBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Update active stage
            journeyStages.forEach(stage => {
                stage.classList.remove('active');
                if (stage.getAttribute('data-stage') === targetStage) {
                    stage.classList.add('active');
                }
            });
        });
    });

    // Auto-advance journey every 5 seconds (optional)
    let currentStage = 1;
    setInterval(() => {
        currentStage = currentStage % 3 + 1;
        const nextBtn = document.querySelector(`[data-stage="${currentStage}"]`);
        if (nextBtn) {
            nextBtn.click();
        }
    }, 5000);
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission (replace with actual form handling)
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');

            // Reset form
            this.reset();
        });
    }
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#00ff88' : type === 'error' ? '#ff4444' : '#00aaff'};
        color: #000;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.project-card, .skill-item, .info-card, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Active Navigation Highlighting
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Update on scroll
    window.addEventListener('scroll', updateActiveNav);

    // Initial call
    updateActiveNav();
}

// Header scroll effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Typing effect for hero title (optional enhancement)
function initTypingEffect() {
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const text = heroName.textContent;
        heroName.textContent = '';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroName.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }
}

// Initialize typing effect
setTimeout(initTypingEffect, 500);

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--accent-primary) !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    }
    
    .notification-close {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: #000;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.7;
    }
`;
document.head.appendChild(style);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Load Projects from JSON
async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        renderProjects(data.projects);
    } catch (error) {
        console.error('Error loading projects:', error);
        // Fallback to default projects if JSON fails to load
        renderProjects(getDefaultProjects());
    }
}

// Render projects to the DOM
function renderProjects(projects) {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = ''; // Clear existing content

    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });

    // Re-initialize scroll animations for new project cards
    initScrollAnimations();
}

// Create a single project card element
function createProjectCard(project) {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';

    // Create project image section
    const projectImage = document.createElement('div');
    projectImage.className = 'project-image';

    if (project.imageUrl) {
        // If there's an image URL, use an img tag
        const img = document.createElement('img');
        img.src = project.imageUrl;
        img.alt = project.title;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        projectImage.appendChild(img);
    } else {
        // Otherwise, use the icon
        const icon = document.createElement('i');
        icon.className = project.icon;
        projectImage.appendChild(icon);
    }

    // Create project content section
    const projectContent = document.createElement('div');
    projectContent.className = 'project-content';

    // Project title
    const projectTitle = document.createElement('h3');
    projectTitle.className = 'project-title';
    projectTitle.textContent = project.title;

    // Project description
    const projectDescription = document.createElement('p');
    projectDescription.className = 'project-description';
    projectDescription.textContent = project.description;

    // Technology tags
    const projectTech = document.createElement('div');
    projectTech.className = 'project-tech';
    project.technologies.forEach(tech => {
        const techTag = document.createElement('span');
        techTag.className = 'tech-tag';
        techTag.textContent = tech;
        projectTech.appendChild(techTag);
    });

    // Project buttons
    const projectButtons = document.createElement('div');
    projectButtons.className = 'project-buttons';

    if (project.githubUrl && project.githubUrl !== '#') {
        const githubBtn = document.createElement('a');
        githubBtn.href = project.githubUrl;
        githubBtn.className = 'btn btn-small';
        githubBtn.textContent = 'View on GitHub';
        githubBtn.target = '_blank';
        githubBtn.rel = 'noopener noreferrer';
        projectButtons.appendChild(githubBtn);
    }

    if (project.demoUrl && project.demoUrl !== '#') {
        const demoBtn = document.createElement('a');
        demoBtn.href = project.demoUrl;
        demoBtn.className = 'btn btn-small btn-outline';
        demoBtn.textContent = 'Live Demo';
        demoBtn.target = '_blank';
        demoBtn.rel = 'noopener noreferrer';
        projectButtons.appendChild(demoBtn);
    }

    // If no valid URLs, show placeholder buttons
    if (projectButtons.children.length === 0) {
        const placeholderGithub = document.createElement('a');
        placeholderGithub.href = '#';
        placeholderGithub.className = 'btn btn-small';
        placeholderGithub.textContent = 'View on GitHub';
        projectButtons.appendChild(placeholderGithub);

        const placeholderDemo = document.createElement('a');
        placeholderDemo.href = '#';
        placeholderDemo.className = 'btn btn-small btn-outline';
        placeholderDemo.textContent = 'Live Demo';
        projectButtons.appendChild(placeholderDemo);
    }

    // Assemble the project card
    projectContent.appendChild(projectTitle);
    projectContent.appendChild(projectDescription);
    projectContent.appendChild(projectTech);
    projectContent.appendChild(projectButtons);

    projectCard.appendChild(projectImage);
    projectCard.appendChild(projectContent);

    return projectCard;
}

// Fallback projects if JSON fails to load
function getDefaultProjects() {
    return [
        {
            id: 1,
            title: "Portfolio Website",
            description: "A responsive portfolio website built with HTML, CSS, and JavaScript, featuring modern design and smooth animations.",
            icon: "fas fa-project-diagram",
            technologies: ["HTML", "CSS", "JavaScript"],
            githubUrl: "#",
            demoUrl: "#",
            imageUrl: null
        },
        {
            id: 2,
            title: "Calculator App",
            description: "A functional calculator application with a clean interface and mathematical operations.",
            icon: "fas fa-calculator",
            technologies: ["C#", "WPF"],
            githubUrl: "#",
            demoUrl: "#",
            imageUrl: null
        },
        {
            id: 3,
            title: "Database Management",
            description: "A database management system for organizing and querying data efficiently.",
            icon: "fas fa-database",
            technologies: ["SQL", "C#"],
            githubUrl: "#",
            demoUrl: "#",
            imageUrl: null
        },
        {
            id: 4,
            title: "Simple Game",
            description: "An interactive browser-based game demonstrating JavaScript game development concepts.",
            icon: "fas fa-gamepad",
            technologies: ["HTML", "CSS", "JavaScript"],
            githubUrl: "#",
            demoUrl: "#",
            imageUrl: null
        }
    ];
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Scroll-related functions can be debounced here
}, 16); // 60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Load Skills from JSON
async function loadSkills() {
    try {
        const response = await fetch('skills.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        renderSkills(data.skills);
    } catch (error) {
        console.error('Error loading skills:', error);
    }
}

// Render skills to the DOM
function renderSkills(skills) {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;

    skillsGrid.innerHTML = ''; // Clear existing content

    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';

        const icon = document.createElement('i');
        icon.className = skill.icon;

        const name = document.createElement('span');
        name.textContent = skill.name;

        skillItem.appendChild(icon);
        skillItem.appendChild(name);
        skillsGrid.appendChild(skillItem);
    });

    // Re-initialize scroll animations for new skill items
    initScrollAnimations();
}
