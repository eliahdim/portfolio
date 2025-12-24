// ============================================
// SCROLL SYSTEM MODULE
// ============================================

import { initJourneyTimeline } from './data.js';

export function initUnifiedScrollSystem() {
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

    // Timeline Observer (Calling imported function)
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
