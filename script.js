// ============================================
// JUNGLE THEMED PORTFOLIO - INTERACTIVE FEATURES
// ============================================

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    initJungleCanvas();
    initJourneyTimeline();
    initSmoothScrolling();
    initContactForm();
    initScrollAnimations();
    initActiveNavigation();
    initProjectModals();
    initParallaxEffects();
    loadProjects();
    loadSkills();
    initAnimatedStats(); // Call after loading projects and skills
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

        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        document.addEventListener('click', function (e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Jungle Canvas Animation (Falling Leaves/Particles)
function initJungleCanvas() {
    const canvas = document.getElementById('jungleCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Leaf particles
    class Leaf {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = -20;
            this.size = Math.random() * 8 + 4;
            this.speed = Math.random() * 2 + 1;
            this.angle = Math.random() * Math.PI * 2;
            this.rotationSpeed = (Math.random() - 0.5) * 0.1;
            this.color = `rgba(${Math.random() > 0.5 ? '34, 197, 94' : '16, 185, 129'}, ${Math.random() * 0.3 + 0.2})`;
        }

        update() {
            this.y += this.speed;
            this.x += Math.sin(this.angle) * 0.5;
            this.angle += this.rotationSpeed;

            if (this.y > canvas.height + 20) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.ellipse(0, 0, this.size, this.size * 1.5, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    const leaves = [];
    for (let i = 0; i < 30; i++) {
        leaves.push(new Leaf());
        leaves[i].y = Math.random() * canvas.height;
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        leaves.forEach(leaf => {
            leaf.update();
            leaf.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Animated Stats Counter
async function initAnimatedStats() {
    // Calculate years of experience from July 1, 2024
    function calculateYearsExperience() {
        const startDate = new Date('2024-07-01');
        const now = new Date();
        const diffTime = now - startDate;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        const diffMonths = diffDays / 30.44; // Average days per month
        const years = diffMonths / 12;
        
        // Round to nearest 0.5
        return Math.round(years * 2) / 2;
    }

    // Load technologies count from skills.json
    async function getTechnologiesCount() {
        try {
            const response = await fetch('skills.json');
            if (!response.ok) return 8; // Fallback
            const data = await response.json();
            return data.skills ? data.skills.length : 8;
        } catch (error) {
            console.error('Error loading skills:', error);
            return 8; // Fallback
        }
    }

    // Load projects count from projects.json
    async function getProjectsCount() {
        try {
            const response = await fetch('projects.json');
            if (!response.ok) return 0; // Fallback
            const data = await response.json();
            return data.projects ? data.projects.length : 0;
        } catch (error) {
            console.error('Error loading projects:', error);
            return 0; // Fallback
        }
    }

    // Get all stat elements
    const experienceStat = document.querySelector('.stat-number[data-type="experience"]');
    const technologiesStat = document.querySelector('.stat-number[data-type="technologies"]');
    const projectsStat = document.querySelector('.stat-number[data-type="projects"]');

    // Set targets
    const yearsExperience = calculateYearsExperience();
    const technologiesCount = await getTechnologiesCount();
    const projectsCount = await getProjectsCount();

    // Update data attributes if they exist
    if (experienceStat) {
        experienceStat.setAttribute('data-target', yearsExperience.toString());
    }
    if (technologiesStat) {
        technologiesStat.setAttribute('data-target', technologiesCount.toString());
    }
    if (projectsStat) {
        projectsStat.setAttribute('data-target', projectsCount.toString());
    }

    const stats = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const statType = entry.target.getAttribute('data-type');
                let target;
                
                if (statType === 'experience') {
                    target = yearsExperience;
                } else if (statType === 'technologies') {
                    target = technologiesCount;
                } else if (statType === 'projects') {
                    target = projectsCount;
                } else {
                    target = parseInt(entry.target.getAttribute('data-target')) || 0;
                }

                animateValue(entry.target, 0, target, 2000, statType === 'experience');
            }
        });
    }, observerOptions);

    stats.forEach(stat => {
        observer.observe(stat);
    });
}

function animateValue(element, start, end, duration, isDecimal = false) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        if (isDecimal) {
            // For decimal values (years experience)
            const current = start + (progress * (end - start));
            element.textContent = current.toFixed(1);
        } else {
            // For integer values
            const current = Math.floor(progress * (end - start) + start);
            element.textContent = current;
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.textContent = isDecimal ? end.toFixed(1) : end;
        }
    };
    window.requestAnimationFrame(step);
}

// Interactive Journey Timeline (Vertical Tree)
async function initJourneyTimeline() {
    const timelineContainer = document.querySelector('.journey-timeline');
    if (!timelineContainer) return;

    try {
        const response = await fetch('journey.json');
        if (!response.ok) throw new Error('Failed to load journey data');
        const data = await response.json();

        timelineContainer.innerHTML = data.journey.map((stage, index) => `
            <div class="journey-stage">
                <div class="journey-stage-marker"></div>
                <div class="journey-icon">
                    ${stage.imageUrl 
                        ? `<img src="${stage.imageUrl}" alt="${stage.title}">`
                        : `<i class="${stage.icon}"></i>`
                    }
                </div>
                <div class="journey-stage-content">
                    <h4>${stage.title}</h4>
                    ${stage.meta ? `<p class="journey-meta">${stage.meta}</p>` : ''}
                    <p>${stage.description}</p>
                </div>
            </div>
        `).join('');

        // Animate stages on scroll
        const stages = document.querySelectorAll('.journey-stage');
        const stageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        stages.forEach(stage => {
            stageObserver.observe(stage);
        });

    } catch (error) {
        console.error('Error loading journey:', error);
        timelineContainer.innerHTML = '<p style="text-align:center; padding: 2rem; color: var(--text-secondary);">Failed to load journey data.</p>';
    }
}

// Smooth Scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const targetSection = document.querySelector(href);

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

// Contact Form
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            this.reset();
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    const colors = {
        success: '#22c55e',
        error: '#ef4444',
        info: '#3b82f6'
    };

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: #fff;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });

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
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.project-card, .skill-item, .info-card, .contact-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Active Navigation
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 150;

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

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
}

// Header Scroll Effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Project Modals
function initProjectModals() {
    const modal = document.getElementById('projectModal');
    const modalOverlay = modal?.querySelector('.modal-overlay');
    const modalClose = modal?.querySelector('.modal-close');

    if (!modal) return;

    modalOverlay?.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modalClose?.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}

// Parallax Effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero-canopy, .about-bg, .projects-bg');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(element => {
            if (element) {
                const speed = 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            }
        });
    });
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
    }
}

function renderProjects(projects) {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });

    initScrollAnimations();
    attachProjectClickHandlers();
}

function createProjectCard(project) {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.setAttribute('data-project-id', project.id);

    const projectImage = document.createElement('div');
    projectImage.className = 'project-image';

    if (project.imageUrl) {
        const img = document.createElement('img');
        img.src = project.imageUrl;
        img.alt = project.title;
        projectImage.appendChild(img);
    } else {
        const icon = document.createElement('i');
        icon.className = project.icon;
        projectImage.appendChild(icon);
    }

    const projectContent = document.createElement('div');
    projectContent.className = 'project-content';

    const projectTitle = document.createElement('h3');
    projectTitle.className = 'project-title';
    projectTitle.textContent = project.title;

    const projectDescription = document.createElement('p');
    projectDescription.className = 'project-description';
    projectDescription.textContent = project.description;

    const projectTech = document.createElement('div');
    projectTech.className = 'project-tech';
    project.technologies.forEach(tech => {
        const techTag = document.createElement('span');
        techTag.className = 'tech-tag';
        techTag.textContent = tech;
        projectTech.appendChild(techTag);
    });

    const projectButtons = document.createElement('div');
    projectButtons.className = 'project-buttons';

    if (project.githubUrl && project.githubUrl !== '#') {
        const githubBtn = document.createElement('a');
        githubBtn.href = project.githubUrl;
        githubBtn.className = 'btn btn-small btn-secondary';
        githubBtn.innerHTML = '<i class="fab fa-github"></i> GitHub';
        githubBtn.target = '_blank';
        githubBtn.rel = 'noopener noreferrer';
        projectButtons.appendChild(githubBtn);
    }

    if (project.demoUrl && project.demoUrl !== '#') {
        const demoBtn = document.createElement('a');
        demoBtn.href = project.demoUrl;
        demoBtn.className = 'btn btn-small btn-primary';
        demoBtn.innerHTML = '<i class="fas fa-external-link-alt"></i> Live Demo';
        demoBtn.target = '_blank';
        demoBtn.rel = 'noopener noreferrer';
        projectButtons.appendChild(demoBtn);
    }

    projectContent.appendChild(projectTitle);
    projectContent.appendChild(projectDescription);
    projectContent.appendChild(projectTech);
    projectContent.appendChild(projectButtons);

    projectCard.appendChild(projectImage);
    projectCard.appendChild(projectContent);

    return projectCard;
}

function attachProjectClickHandlers() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('projectModal');
    const modalBody = modal?.querySelector('.modal-body');

    projectCards.forEach(card => {
        card.addEventListener('click', async (e) => {
            // Don't open modal if clicking on buttons
            if (e.target.closest('.project-buttons')) return;

            const projectId = card.getAttribute('data-project-id');
            
            try {
                const response = await fetch('projects.json');
                const data = await response.json();
                const project = data.projects.find(p => p.id == projectId);
                
                if (project && modalBody) {
                    modalBody.innerHTML = `
                        <div style="margin-bottom: 2rem;">
                            ${project.imageUrl ? `<img src="${project.imageUrl}" alt="${project.title}" style="width: 100%; border-radius: 0.75rem; margin-bottom: 1.5rem;">` : ''}
                            <h2 style="font-size: 2.5rem; color: var(--accent-primary); margin-bottom: 1rem; font-family: var(--font-display);">${project.title}</h2>
                            <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">${project.description}</p>
                            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem;">
                                ${project.technologies.map(tech => 
                                    `<span style="background: rgba(34, 197, 94, 0.1); color: var(--accent-primary); padding: 0.5rem 1rem; border-radius: 0.5rem; border: 1px solid var(--border-glow);">${tech}</span>`
                                ).join('')}
                            </div>
                            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                                ${project.githubUrl && project.githubUrl !== '#' ? 
                                    `<a href="${project.githubUrl}" target="_blank" class="btn btn-primary"><i class="fab fa-github"></i> View on GitHub</a>` : ''
                                }
                                ${project.demoUrl && project.demoUrl !== '#' ? 
                                    `<a href="${project.demoUrl}" target="_blank" class="btn btn-secondary"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''
                                }
                            </div>
                        </div>
                    `;
                    modal.classList.add('active');
                }
            } catch (error) {
                console.error('Error loading project details:', error);
            }
        });
    });
}

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

function renderSkills(skills) {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;

    skillsGrid.innerHTML = '';

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

    initScrollAnimations();
}

// Add notification styles
const style = document.createElement('style');
style.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    }
    
    .notification-close {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #fff;
        padding: 0;
        line-height: 1;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style);
