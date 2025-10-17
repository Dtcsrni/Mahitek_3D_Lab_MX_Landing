// ===========================
// Mobile Menu Toggle
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = hamburger.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
});

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only handle anchors that point to elements on the page
        if (href.includes('#') && href.split('#')[1]) {
            const targetId = href.split('#')[1].split('?')[0];
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===========================
// UTM Parameter Tracking
// ===========================
function getUTMParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = {};
    
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
        if (urlParams.has(param)) {
            utmParams[param] = urlParams.get(param);
        }
    });
    
    return utmParams;
}

// Store UTM parameters in sessionStorage
const utmParams = getUTMParameters();
if (Object.keys(utmParams).length > 0) {
    sessionStorage.setItem('utmParams', JSON.stringify(utmParams));
}

// ===========================
// Form Handling with UTM Tracking
// ===========================
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Add UTM parameters to form submission
        const storedUTM = sessionStorage.getItem('utmParams');
        if (storedUTM) {
            const utmData = JSON.parse(storedUTM);
            
            // Add hidden fields for UTM parameters
            Object.keys(utmData).forEach(key => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = utmData[key];
                this.appendChild(input);
            });
        }
        
        // Add SKU if present in URL
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('sku')) {
            const skuInput = document.createElement('input');
            skuInput.type = 'hidden';
            skuInput.name = 'sku';
            skuInput.value = urlParams.get('sku');
            this.appendChild(skuInput);
        }
    });
}

// ===========================
// Scroll Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.feature-card, .service-card, .product-card, .info-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===========================
// Active Navigation Link
// ===========================
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    let current = '';
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Product Card Click Tracking
// ===========================
document.querySelectorAll('.product-card .btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3')?.textContent;
        const sku = productCard.querySelector('.product-sku')?.textContent;
        
        // Track product interest (can be sent to analytics)
        console.log('Product clicked:', {
            name: productName,
            sku: sku,
            timestamp: new Date().toISOString()
        });
        
        // Store in sessionStorage for form pre-fill
        sessionStorage.setItem('selectedProduct', JSON.stringify({
            name: productName,
            sku: sku
        }));
    });
});

// ===========================
// Pre-fill Contact Form
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const selectedProduct = sessionStorage.getItem('selectedProduct');
    const messageField = document.getElementById('mensaje');
    
    if (selectedProduct && messageField && !messageField.value) {
        const product = JSON.parse(selectedProduct);
        messageField.value = `Estoy interesado en: ${product.name} (${product.sku}).\n\n`;
        messageField.focus();
    }
});

// ===========================
// QR Code Generation (Placeholder)
// ===========================
// Note: For actual QR code generation, you would integrate a library like qrcode.js
// This is a placeholder function that would be called with dynamic content
function updateQRCode(url) {
    console.log('QR Code would be generated for:', url);
    // In production, use a QR code library to generate the actual QR code
}

// ===========================
// Performance Monitoring
// ===========================
if ('performance' in window) {
    window.addEventListener('load', function() {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
    });
}

// ===========================
// Analytics Event Tracking (Placeholder)
// ===========================
function trackEvent(category, action, label, value) {
    // This would integrate with Google Analytics, Facebook Pixel, etc.
    console.log('Analytics Event:', { category, action, label, value });
    
    // Example for Google Analytics (if gtag is available)
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label,
            'value': value
        });
    }
}

// Track CTA clicks
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        const buttonText = this.textContent.trim();
        const section = this.closest('section')?.id || 'unknown';
        trackEvent('CTA', 'click', `${section} - ${buttonText}`);
    });
});

// ===========================
// Error Handling for Form
// ===========================
if (contactForm) {
    const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        input.addEventListener('invalid', function(e) {
            e.preventDefault();
            this.classList.add('error');
            
            const errorMsg = this.parentElement.querySelector('.error-message');
            if (!errorMsg) {
                const msg = document.createElement('span');
                msg.className = 'error-message';
                msg.style.color = 'red';
                msg.style.fontSize = '0.875rem';
                msg.textContent = 'Este campo es requerido';
                this.parentElement.appendChild(msg);
            }
        });
        
        input.addEventListener('input', function() {
            this.classList.remove('error');
            const errorMsg = this.parentElement.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
        });
    });
}
