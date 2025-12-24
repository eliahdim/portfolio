// ============================================
// JUNGLE THEMED PORTFOLIO - INTERACTIVE FEATURES
// ============================================

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initializers
    initMobileMenu();
    initJungleCanvas(); // Canvas first to be ready

    // Data Loading with Lazy Loading Support
    loadProjects();
    loadSkills();

    // Interactive Features
    initContactForm();
    initProjectModals();

    // Unified Scroll & Animation System
    initUnifiedScrollSystem();
});

// ============================================
// OPTIMIZED SCROLL & ANIMATION SYSTEM
// ============================================
function initUnifiedScrollSystem() {
    let ticking = false;
    const header = document.querySelector('.header');
    const parallaxElements = document.querySelectorAll('.hero-canopy, .about-bg, .projects-bg');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    // CACHED LAYOUT VALUES
    let sectionCache = [];
    let headerHeight = 0;

    function updateLayoutCache() {
        sectionCache = Array.from(sections).map(section => ({
            id: section.getAttribute('id'),
            top: section.offsetTop,
            height: section.offsetHeight
        }));
        const headerEl = document.querySelector('.header');
        headerHeight = headerEl ? headerEl.offsetHeight : 0;
    }

    // Initial Cache
    updateLayoutCache();

    // Intersection Observer for Scroll Animations (Fade-in elements)
    // Using IntersectionObserver is much better than scroll events for this
    const fadeObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target); // Stop observing once visible to save resources
            }
        });
    }, fadeObserverOptions);

    // Timeline Observer
    initJourneyTimeline(fadeObserver);

    // Initial check for elements present at load
    attachScrollAnimations(fadeObserver);

    // The Unified Scroll Listener
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                const scrollPos = window.scrollY;

                // 1. Header Effect
                if (scrollPos > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }

                // 2. Parallax Effects (Optimized with will-change in CSS)
                for (let i = 0; i < parallaxElements.length; i++) {
                    const element = parallaxElements[i];
                    if (element) {
                        const speed = 0.5;
                        element.style.transform = `translateY(${scrollPos * speed}px)`;
                    }
                }

                // 3. Active Navigation (Using Cache)
                const navCheckPos = scrollPos + 150;

                // Optimized Loop using cached values
                for (let i = 0; i < sectionCache.length; i++) {
                    const section = sectionCache[i];
                    if (navCheckPos >= section.top && navCheckPos < section.top + section.height) {
                        // Only DOM write if needed (check logic could be even tighter but classList is fast)
                        for (let j = 0; j < navLinks.length; j++) {
                            const link = navLinks[j];
                            if (link.getAttribute('href') === `#${section.id}`) {
                                if (!link.classList.contains('active')) link.classList.add('active');
                            } else {
                                if (link.classList.contains('active')) link.classList.remove('active');
                            }
                        }
                    }
                }

                ticking = false;
            });

            ticking = true;
        }
    });

    // Update cache on resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateLayoutCache, 200);
    });

    // Smooth Scrolling for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || !href.startsWith('#')) return;

            e.preventDefault();
            // Recalculate target position to ensure accuracy if layout shifted
            const target = document.querySelector(href);
            if (target) {
                // Ensure we have fresh header height
                const currentHeaderHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - currentHeaderHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function attachScrollAnimations(observer) {
    const animatedElements = document.querySelectorAll('.project-card, .skill-item, .info-card, .contact-item');
    animatedElements.forEach(el => {
        if (!el.classList.contains('visible')) {
            observer.observe(el);
        }
    });
}

// ============================================
// MOBILE MENU
// ============================================
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

// ============================================
// JUNGLE CANVAS (OPTIMIZED)
// ============================================
function initJungleCanvas() {
    const canvas = document.getElementById('jungleCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true }); // optimize context

    // Canvas Sizing
    let width, height;
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    resize();

    // Debounced resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resize, 200);
    });

    // Leaf Particles
    class Leaf {
        constructor() {
            this.reset(true); // true = randomize initial Y to fill screen
        }

        reset(initial = false) {
            this.x = Math.random() * width;
            this.y = initial ? Math.random() * height : -20;
            this.size = Math.random() * 8 + 4;
            this.speed = Math.random() * 2 + 1;
            this.angle = Math.random() * Math.PI * 2;
            this.rotationSpeed = (Math.random() - 0.5) * 0.1;
            // Pre-calculate color to avoid string interp per frame
            const isGreen = Math.random() > 0.5;
            this.fillStyle = `rgba(${isGreen ? '34, 197, 94' : '16, 185, 129'}, ${Math.random() * 0.3 + 0.2})`;
        }

        update() {
            this.y += this.speed;
            this.x += Math.sin(this.angle) * 0.5;
            this.angle += this.rotationSpeed;

            if (this.y > height + 20) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.fillStyle = this.fillStyle;
            ctx.beginPath();
            ctx.ellipse(0, 0, this.size, this.size * 1.5, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    // Limit number of particles for performance
    const particleCount = window.innerWidth < 768 ? 15 : 30;
    const leaves = Array.from({ length: particleCount }, () => new Leaf());

    // Animation Loop
    let animationFrameId;
    let isAnimating = true;

    function animate() {
        if (!isAnimating) return;

        ctx.clearRect(0, 0, width, height);
        leaves.forEach(leaf => {
            leaf.update();
            leaf.draw();
        });
        animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    // Visibility API to pause animation when tab is not active
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            isAnimating = false;
            cancelAnimationFrame(animationFrameId);
        } else {
            isAnimating = true;
            animate();
        }
    });
}

// ============================================
// DYNAMIC CONTENT (With Lazy Loading)
// ============================================

// Journey Timeline
async function initJourneyTimeline(observer) {
    const timelineContainer = document.querySelector('.journey-timeline');
    if (!timelineContainer) return;

    try {
        const response = await fetch('journey.json');
        if (!response.ok) throw new Error('Failed');
        const data = await response.json();

        timelineContainer.innerHTML = data.journey.map((stage) => `
            <div class="journey-stage">
                <div class="journey-stage-marker"></div>
                <div class="journey-icon">
                    ${stage.imageUrl
                ? `<img src="${stage.imageUrl}" alt="${stage.title}" loading="lazy" width="200" height="200">`
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

        // Observe new elements
        document.querySelectorAll('.journey-stage').forEach(stage => {
            observer.observe(stage);
        });

    } catch (error) {
        console.error('Error loading journey:', error);
        timelineContainer.innerHTML = '<p class="error-text">Content unavailable</p>';
    }
}

// Skills
async function loadSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;

    try {
        const response = await fetch('skills.json');
        if (!response.ok) throw new Error('Failed');
        const data = await response.json();

        skillsGrid.innerHTML = '';
        data.skills.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.innerHTML = `
                <i class="${skill.icon}"></i>
                <span>${skill.name}</span>
            `;
            skillsGrid.appendChild(skillItem);
        });

        // Stats are dependent on skills being loaded first for counts
        // So we trigger stats init here or checking logic inside stats init
        initAnimatedStats();

        // Re-attach observer to new items 
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.skill-item').forEach(el => observer.observe(el));

    } catch (error) {
        console.error('Error loading skills:', error);
    }
}

// Projects
async function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    try {
        const response = await fetch('projects.json');
        if (!response.ok) throw new Error('Failed');
        const data = await response.json();
        const projects = data.projects;

        projectsGrid.innerHTML = '';
        projects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });

        attachProjectClickHandlers(projects);

        // Observer for new projects
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.project-card').forEach(el => observer.observe(el));

    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

function createProjectCard(project) {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.setAttribute('data-project-id', project.id);

    // Inner HTML structure with lazy loading
    // Using simple concatenation for cleaner performance
    let imageHtml;
    if (project.imageUrl) {
        // Add basic aspect-ratio protection if possible, or object-fit handles it
        imageHtml = `<img src="${project.imageUrl}" alt="${project.title}" loading="lazy" class="project-img-el">`;
    } else {
        imageHtml = `<i class="${project.icon}"></i>`;
    }

    const techTags = project.technologies.map(tech =>
        `<span class="tech-tag">${tech}</span>`
    ).join('');

    let buttonsHtml = '';
    if (project.githubUrl && project.githubUrl !== '#') {
        buttonsHtml += `<a href="${project.githubUrl}" class="btn btn-small btn-secondary" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a>`;
    }
    if (project.demoUrl && project.demoUrl !== '#') {
        buttonsHtml += `<a href="${project.demoUrl}" class="btn btn-small btn-primary" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> Live Demo</a>`;
    }

    projectCard.innerHTML = `
        <div class="project-image">
            ${imageHtml}
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">${techTags}</div>
            <div class="project-buttons">${buttonsHtml}</div>
        </div>
    `;

    return projectCard;
}

function attachProjectClickHandlers(projectsData) {
    const modal = document.getElementById('projectModal');
    const modalBody = modal?.querySelector('.modal-body');

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.project-buttons')) return;

            const projectId = card.getAttribute('data-project-id');
            const project = projectsData.find(p => p.id == projectId);

            if (project && modalBody) {
                // Populate Modal
                modalBody.innerHTML = `
                    <div class="modal-inner-content">
                        ${project.imageUrl ? `<img src="${project.imageUrl}" alt="${project.title}" class="modal-img">` : ''}
                        <h2 class="modal-title">${project.title}</h2>
                        <p class="modal-desc">${project.description}</p>
                        <div class="modal-tech-stack">
                            ${project.technologies.map(tech => `<span class="tech-pill">${tech}</span>`).join('')}
                        </div>
                        <div class="modal-actions">
                            ${project.githubUrl && project.githubUrl !== '#' ?
                        `<a href="${project.githubUrl}" target="_blank" class="btn btn-primary"><i class="fab fa-github"></i> GitHub</a>` : ''
                    }
                            ${project.demoUrl && project.demoUrl !== '#' ?
                        `<a href="${project.demoUrl}" target="_blank" class="btn btn-secondary"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''
                    }
                        </div>
                    </div>
                `;
                modal.classList.add('active');
            }
        });
    });
}

// ============================================
// STATS COUNTER
// ============================================
async function initAnimatedStats() {
    // Logic to get counts
    const experienceStat = document.querySelector('.stat-number[data-type="experience"]');
    if (!experienceStat) return; // If stats aren't in DOM, exit

    // ... Calculate stats ...
    const startDate = new Date('2024-07-01');
    const now = new Date();
    const years = ((now - startDate) / (1000 * 60 * 60 * 24 * 30.44 * 12));
    const yearsExperience = Math.round(years * 2) / 2;

    const stats = document.querySelectorAll('.stat-number');

    // Using IntersectionObserver for when to START the counting
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const statType = entry.target.getAttribute('data-type');

                // Determine target
                let target = 0;
                if (statType === 'experience') target = yearsExperience;
                else if (statType === 'technologies') target = document.querySelectorAll('.skill-item').length || 8;
                else if (statType === 'projects') target = document.querySelectorAll('.project-card').length || 0;

                animateValue(entry.target, 0, target, 2000, statType === 'experience');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
}

function animateValue(element, start, end, duration, isDecimal) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = start + (progress * (end - start));

        element.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.textContent = isDecimal ? end.toFixed(1) : end;
        }
    };
    window.requestAnimationFrame(step);
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        // Simple validation...
        if (!formData.get('name') || !formData.get('email') || !formData.get('message')) return;

        showNotification('Thank you! I will respond shortly.', 'success');
        this.reset();
    });
}

function initProjectModals() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    modal.querySelector('.modal-close')?.addEventListener('click', () => modal.classList.remove('active'));
    modal.querySelector('.modal-overlay')?.addEventListener('click', () => modal.classList.remove('active'));
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') modal.classList.remove('active');
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing
    document.querySelectorAll('.notification').forEach(n => n.remove());

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed; top: 100px; right: 20px; 
        background: ${type === 'success' ? '#22c55e' : '#3b82f6'}; 
        color: white; padding: 1rem; border-radius: 8px; z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15); animation: slideIn 0.3s ease;
    `;
    notification.innerHTML = `<span>${message}</span>`;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add necessary keyframes dynamically if not in CSS
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
`;
document.head.appendChild(styleSheet);
