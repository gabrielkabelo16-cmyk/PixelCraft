/**
 * PixelCraft Digital - PROFESSIONAL TECHY SCRIPTS
 * Particle Canvas | Matrix Rain | Glitch Effects | Advanced Interactions
 */

(function() {
    'use strict';

    // ============================================
    // PARTICLE CANVAS BACKGROUND
    // ============================================
    function initParticleCanvas() {
        const canvas = document.createElement('canvas');
        canvas.id = 'particle-canvas';
        document.body.insertBefore(canvas, document.body.firstChild);

        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;
        let mouse = { x: null, y: null, radius: 150 };

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        // Mouse tracking
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 0.5;
                this.color = this.getRandomColor();
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
            }

            getRandomColor() {
                const colors = [
                    'rgba(0, 240, 255, ',   // cyan
                    'rgba(0, 128, 255, ',   // blue
                    'rgba(184, 41, 221, ',  // purple
                    'rgba(255, 42, 109, ',  // pink
                    'rgba(5, 255, 161, '    // green
                ];
                return colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                // Mouse interaction
                if (mouse.x != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        const directionX = forceDirectionX * force * this.density * 0.6;
                        const directionY = forceDirectionY * force * this.density * 0.6;

                        this.vx -= directionX;
                        this.vy -= directionY;
                    }
                }

                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
                if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

                // Return to base position slowly
                if (mouse.x == null) {
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx * 0.02;
                    }
                    if (this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy * 0.02;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color + (Math.random() * 0.5 + 0.3) + ')';
                ctx.fill();
            }
        }

        function init() {
            particles = [];
            const numberOfParticles = Math.min((canvas.width * canvas.height) / 15000, 100);
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        }

        function connect() {
            const maxDistance = 120;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    let dx = particles[a].x - particles[b].x;
                    let dy = particles[a].y - particles[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = 1 - (distance / maxDistance);
                        ctx.strokeStyle = 'rgba(0, 240, 255, ' + (opacity * 0.15) + ')';
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            connect();

            animationId = requestAnimationFrame(animate);
        }

        init();
        animate();

        // Cleanup on page hide
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(animationId);
            } else {
                animate();
            }
        });
    }

    // ============================================
    // MATRIX RAIN EFFECT (Optional - can be enabled on specific elements)
    // ============================================
    function initMatrixRain() {
        const matrixElements = document.querySelectorAll('.matrix-bg');
        if (matrixElements.length === 0) return;

        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

        matrixElements.forEach(el => {
            const canvas = document.createElement('canvas');
            canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;opacity:0.3;';
            el.style.position = 'relative';
            el.insertBefore(canvas, el.firstChild);

            const ctx = canvas.getContext('2d');

            function resize() {
                canvas.width = el.offsetWidth;
                canvas.height = el.offsetHeight;
            }
            resize();

            const fontSize = 14;
            const columns = canvas.width / fontSize;
            const drops = [];

            for (let i = 0; i < columns; i++) {
                drops[i] = Math.random() * -100;
            }

            function draw() {
                ctx.fillStyle = 'rgba(5, 5, 8, 0.05)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.fillStyle = '#0f0';
                ctx.font = fontSize + 'px monospace';

                for (let i = 0; i < drops.length; i++) {
                    const text = chars[Math.floor(Math.random() * chars.length)];
                    ctx.fillStyle = Math.random() > 0.98 ? '#fff' : 'rgba(0, 240, 255, 0.5)';
                    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                        drops[i] = 0;
                    }
                    drops[i]++;
                }
            }

            setInterval(draw, 50);
        });
    }

    // ============================================
    // MOBILE NAVIGATION
    // ============================================
    function initMobileMenu() {
        const nav = document.querySelector('nav');
        if (!nav) return;

        let menuToggle = document.querySelector('.menu-toggle');
        if (!menuToggle) {
            menuToggle = document.createElement('button');
            menuToggle.className = 'menu-toggle';
            menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.innerHTML = '☰';

            const header = document.querySelector('header');
            if (header) {
                header.querySelector('.container')?.appendChild(menuToggle);
            }
        }

        const navList = nav.querySelector('ul');

        menuToggle.addEventListener('click', function() {
            const isOpen = navList.classList.toggle('open');
            this.setAttribute('aria-expanded', isOpen);
            this.innerHTML = isOpen ? '✕' : '☰';
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.innerHTML = '☰';
                document.body.style.overflow = '';
            });
        });

        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                navList.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.innerHTML = '☰';
                document.body.style.overflow = '';
            }
        });
    }

    // ============================================
    // SMOOTH SCROLL
    // ============================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    history.pushState(null, null, targetId);
                    target.setAttribute('tabindex', '-1');
                    target.focus({ preventScroll: true });
                }
            });
        });
    }

    // ============================================
    // SCROLL REVEAL ANIMATIONS
    // ============================================
    function initScrollReveal() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -80px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Add reveal classes to elements
        const selectors = [
            'section h2',
            'article',
            'form',
            'address',
            '.glass-card'
        ];

        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach((el, index) => {
                if (!el.classList.contains('reveal') && 
                    !el.classList.contains('reveal-left') && 
                    !el.classList.contains('reveal-right') &&
                    !el.classList.contains('reveal-scale')) {

                    // Alternate animation types
                    const types = ['reveal', 'reveal-left', 'reveal-right', 'reveal-scale'];
                    const type = types[index % types.length];
                    el.classList.add(type);

                    // Add stagger delay
                    const delay = Math.min(index * 0.1, 0.5);
                    el.style.transitionDelay = delay + 's';
                }
                observer.observe(el);
            });
        });
    }

    // ============================================
    // HEADER EFFECTS
    // ============================================
    function initHeaderEffects() {
        const header = document.querySelector('header');
        if (!header) return;

        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Add glow effect when scrolled
            if (currentScroll > 50) {
                header.style.boxShadow = '0 4px 30px rgba(0, 240, 255, 0.1)';
                header.style.borderBottomColor = 'rgba(0, 240, 255, 0.2)';
            } else {
                header.style.boxShadow = '';
                header.style.borderBottomColor = '';
            }

            lastScroll = currentScroll;
        }, { passive: true });
    }

    // ============================================
    // TYPING EFFECT
    // ============================================
    function initTypingEffect() {
        const typingElements = document.querySelectorAll('.typing-effect');

        typingElements.forEach(el => {
            const text = el.getAttribute('data-text') || el.textContent;
            const speed = parseInt(el.getAttribute('data-speed')) || 50;
            el.textContent = '';
            el.classList.add('typing-cursor');

            let i = 0;
            function type() {
                if (i < text.length) {
                    el.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed + Math.random() * 30);
                }
            }

            // Start when visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        type();
                        observer.unobserve(el);
                    }
                });
            });
            observer.observe(el);
        });
    }

    // ============================================
    // FORM VALIDATION
    // ============================================
    function initForms() {
        document.querySelectorAll('form').forEach(form => {
            form.querySelectorAll('input, textarea').forEach(field => {
                field.addEventListener('blur', validateField);
                field.addEventListener('input', function() {
                    if (this.classList.contains('error')) {
                        validateField.call(this);
                    }
                });
            });

            form.addEventListener('submit', function(e) {
                let isValid = true;

                this.querySelectorAll('input, textarea').forEach(field => {
                    if (!validateField.call(field)) {
                        isValid = false;
                    }
                });

                if (!isValid) {
                    e.preventDefault();
                    const firstError = this.querySelector('.error');
                    if (firstError) firstError.focus();
                    showNotification('Please fix the errors in the form', 'error');
                } else {
                    const submitBtn = this.querySelector('button[type="submit"], input[type="submit"]');
                    if (submitBtn) {
                        submitBtn.disabled = true;
                        submitBtn.innerHTML = '<span class="spinner" style="width:20px;height:20px;border-width:2px;margin-right:8px;"></span> Processing...';

                        if (form.getAttribute('action')?.includes('mailto')) {
                            setTimeout(() => {
                                submitBtn.disabled = false;
                                submitBtn.innerHTML = 'Send Enquiry';
                                showNotification('Opening your email client...', 'info');
                            }, 1500);
                        }
                    }
                }
            });
        });
    }

    function validateField() {
        const field = this;
        const value = field.value.trim();
        let isValid = true;
        let message = '';

        field.classList.remove('error');
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) existingError.remove();
        field.style.borderColor = '';

        if (field.hasAttribute('required') && !value) {
            isValid = false;
            message = 'This field is required';
        }

        if (field.type === 'email' && value) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                isValid = false;
                message = 'Please enter a valid email address';
            }
        }

        if (!isValid) {
            field.classList.add('error');
            field.style.borderColor = 'var(--neon-pink)';

            const errorMsg = document.createElement('span');
            errorMsg.className = 'field-error';
            errorMsg.textContent = message;
            field.parentNode.insertBefore(errorMsg, field.nextSibling);
        } else {
            field.style.borderColor = 'var(--neon-green)';
        }

        return isValid;
    }

    // ============================================
    // SHOPPING CART
    // ============================================
    function initCart() {
        const cartForm = document.querySelector('form:has(input[type="checkbox"][name="product"])');
        if (!cartForm) return;

        let cart = JSON.parse(localStorage.getItem('pixelcraft_cart') || '[]');
        updateCartUI();

        cartForm.querySelectorAll('input[type="checkbox"][name="product"]').forEach(checkbox => {
            if (cart.includes(checkbox.value)) {
                checkbox.checked = true;
            }

            checkbox.addEventListener('change', function() {
                const productValue = this.value;
                const productName = this.closest('article')?.querySelector('h3')?.textContent || 'Product';

                if (this.checked) {
                    if (!cart.includes(productValue)) {
                        cart.push(productValue);
                    }
                    showNotification(productName + ' added to cart!', 'success');
                } else {
                    cart = cart.filter(item => item !== productValue);
                    showNotification(productName + ' removed from cart', 'info');
                }

                localStorage.setItem('pixelcraft_cart', JSON.stringify(cart));
                updateCartUI();
            });
        });

        cartForm.addEventListener('submit', function(e) {
            if (cart.length === 0) {
                e.preventDefault();
                showNotification('Please select at least one product', 'warning');
                return;
            }
            showNotification('Proceeding with ' + cart.length + ' item(s)', 'success');
        });

        function updateCartUI() {
            const existingIndicator = document.querySelector('.cart-indicator');
            if (existingIndicator) existingIndicator.remove();

            if (cart.length > 0) {
                const indicator = document.createElement('div');
                indicator.className = 'cart-indicator';
                indicator.innerHTML = '🛒 ' + cart.length + ' item(s)';
                indicator.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
                document.body.appendChild(indicator);
            }
        }
    }

    // ============================================
    // NOTIFICATION SYSTEM
    // ============================================
    function showNotification(message, type) {
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();

        const notification = document.createElement('div');
        notification.className = 'notification ' + type;

        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };

        notification.innerHTML = icons[type] + ' ' + message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }, 3500);
    }

    // ============================================
    // ACTIVE NAVIGATION
    // ============================================
    function initActiveNav() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        document.querySelectorAll('nav a').forEach(link => {
            const linkPage = link.getAttribute('href')?.split('/').pop();
            if (linkPage === currentPage || 
                (currentPage === '' && linkPage === 'index.html') ||
                (currentPage === '/' && linkPage === 'index.html')) {
                link.setAttribute('aria-current', 'page');
            }
        });
    }

    // ============================================
    // BACK TO TOP
    // ============================================
    function initBackToTop() {
        const button = document.createElement('button');
        button.className = 'back-to-top';
        button.innerHTML = '↑';
        button.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(button);

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 600) {
                button.classList.add('visible');
            } else {
                button.classList.remove('visible');
            }
        }, { passive: true });

        button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ============================================
    // GLITCH TEXT EFFECT TRIGGER
    // ============================================
    function initGlitchEffect() {
        const glitchElements = document.querySelectorAll('.glitch-trigger');

        glitchElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                el.classList.add('glitch');
                el.setAttribute('data-text', el.textContent);
            });

            el.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    el.classList.remove('glitch');
                }, 500);
            });
        });
    }

    // ============================================
    // PARALLAX EFFECT
    // ============================================
    function initParallax() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const parallaxElements = document.querySelectorAll('.parallax');

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;

            parallaxElements.forEach(el => {
                const speed = el.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                el.style.transform = 'translateY(' + yPos + 'px)';
            });
        }, { passive: true });
    }

    // ============================================
    // COUNTER ANIMATION
    // ============================================
    function initCounters() {
        const counters = document.querySelectorAll('.counter');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = parseInt(counter.getAttribute('data-duration')) || 2000;
                    const prefix = counter.getAttribute('data-prefix') || '';
                    const suffix = counter.getAttribute('data-suffix') || '';

                    let current = 0;
                    const increment = target / (duration / 16);

                    function updateCounter() {
                        current += increment;
                        if (current < target) {
                            counter.textContent = prefix + Math.floor(current) + suffix;
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = prefix + target + suffix;
                        }
                    }

                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    // ============================================
    // KEYBOARD NAVIGATION
    // ============================================
    function initKeyboardNav() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const navList = document.querySelector('nav ul');
                const menuToggle = document.querySelector('.menu-toggle');
                if (navList?.classList.contains('open')) {
                    navList.classList.remove('open');
                    menuToggle?.setAttribute('aria-expanded', 'false');
                    menuToggle.innerHTML = '☰';
                    document.body.style.overflow = '';
                }
            }
        });
    }

    // ============================================
    // CONSOLE EASTER EGG
    // ============================================
    function initConsoleEasterEgg() {
        console.log('%c PixelCraft Digital ', 'background: linear-gradient(135deg, #00f0ff, #b829dd); color: #050508; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 8px;');
        console.log('%c Welcome to the matrix... ', 'color: #00f0ff; font-size: 14px; font-family: monospace;');
        console.log('%c 🎨 Designed with passion | ⚡ Powered by creativity ', 'color: #b829dd; font-size: 12px; font-family: monospace;');
    }

    // ============================================
    // INITIALIZE EVERYTHING
    // ============================================
    function init() {
        initParticleCanvas();
        initMatrixRain();
        initMobileMenu();
        initSmoothScroll();
        initScrollReveal();
        initHeaderEffects();
        initTypingEffect();
        initForms();
        initCart();
        initActiveNav();
        initBackToTop();
        initGlitchEffect();
        initParallax();
        initCounters();
        initKeyboardNav();
        initConsoleEasterEgg();

        console.log('🚀 PixelCraft Digital - Professional Techy Theme Loaded!');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();