// ============================================
// MAIN ENTRY POINT
// ============================================

import { initMobileMenu, initContactForm, initProjectModals } from './modules/ui.js';
import { initJungleCanvas } from './modules/canvas.js';
import { loadProjects, loadSkills } from './modules/data.js';
import { initUnifiedScrollSystem } from './modules/scroll.js';

document.addEventListener('DOMContentLoaded', function () {
    // 1. Initializers (UI & Effects)
    initMobileMenu();
    initJungleCanvas(); // Canvas first to be ready

    // 2. Data Loading
    loadProjects();
    loadSkills();

    // 3. Interactive Features
    initContactForm();
    initProjectModals();

    // 4. Scroll & Animation System (Starts observers)
    initUnifiedScrollSystem();
});
