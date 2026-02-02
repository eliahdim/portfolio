// ============================================
// DATA LOADING MODULE
// ============================================

// Journey Timeline
export async function initJourneyTimeline(observer) {
    const timelineContainer = document.querySelector('.journey-timeline');
    if (!timelineContainer) return;

    try {
        const response = await fetch('journey.json');
        if (!response.ok) throw new Error('Failed');
        const data = await response.json();

        timelineContainer.innerHTML = data.journey.map((stage) => `
            <div class="journey-stage">
                <div class="journey-stage-marker"></div>
                <div class="journey-stage-content">
                    ${stage.imageUrl
                        ? `<div class="journey-image-container"><img src="${stage.imageUrl}" alt="${stage.title}" loading="lazy"></div>`
                        : `<div class="journey-icon-container"><i class="${stage.icon}"></i></div>`
                    }
                    <div class="journey-text">
                        <h4>${stage.title}</h4>
                        ${stage.meta ? `<p class="journey-meta">${stage.meta}</p>` : ''}
                        <p>${stage.description}</p>
                    </div>
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
export async function loadSkills() {
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
export async function loadProjects() {
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
    let imageHtml;
    if (project.imageUrl) {
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

// Stats Counter
export async function initAnimatedStats() {
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
