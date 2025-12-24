// ============================================
// CANVAS ANIMATION MODULE
// ============================================

export function initJungleCanvas() {
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
