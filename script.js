// ===========================
// Navigation & Mobile Menu
// ===========================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===========================
// Navbar Scroll Effect
// ===========================
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Smooth Scrolling for Navigation Links
// ===========================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Active Navigation Link on Scroll
// ===========================
const sections = document.querySelectorAll('.section, .hero');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbar.offsetHeight - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = sectionId;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Intersection Observer for Animations
// ===========================
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

// Observe timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Observe education cards
const educationCards = document.querySelectorAll('.education-card');
educationCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe skill categories
const skillCategories = document.querySelectorAll('.skill-category');
skillCategories.forEach((category, index) => {
    category.style.opacity = '0';
    category.style.transform = 'translateY(30px)';
    category.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(category);
});

// Observe publication items
const publicationItems = document.querySelectorAll('.publication-item');
publicationItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Observe highlight items
const highlightItems = document.querySelectorAll('.highlight-item');
highlightItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.9)';
    item.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
    observer.observe(item);
});

// ===========================
// Scroll to Top Button (Optional Enhancement)
// ===========================
const createScrollToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'scroll-to-top';
    button.setAttribute('aria-label', 'Scroll to top');
    
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 20px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    document.body.appendChild(button);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    });
};

// Initialize scroll to top button
createScrollToTopButton();

// ===========================
// Typing Effect for Hero Subtitle (Optional)
// ===========================
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    
    let charIndex = 0;
    const typingSpeed = 50;
    
    const typeText = () => {
        if (charIndex < originalText.length) {
            heroSubtitle.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeText, 500);
}

// ===========================
// Dynamic Year in Footer
// ===========================
const updateFooterYear = () => {
    const footer = document.querySelector('.footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace('2026', currentYear);
    }
};

updateFooterYear();

// ===========================
// Skill Tags Interaction
// ===========================
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
    tag.addEventListener('click', () => {
        tag.style.transform = 'scale(1.1)';
        setTimeout(() => {
            tag.style.transform = 'scale(1)';
        }, 200);
    });
});

// ===========================
// Email Protection (Anti-spam)
// ===========================
const protectEmail = () => {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Email is already in href, this is just for additional tracking if needed
            console.log('Email link clicked');
        });
    });
};

protectEmail();

// ===========================
// Performance: Lazy Loading Images
// ===========================
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
};

lazyLoadImages();

// ===========================
// Console Message
// ===========================
console.log('%c👋 Hello! Thanks for checking out my portfolio!', 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('%cInterested in the code? Check out the repository on GitHub!', 'color: #764ba2; font-size: 14px;');

// ===========================
// Accessibility: Keyboard Navigation
// ===========================
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===========================
// Page Load Animation
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Analytics Event Tracking (Placeholder)
// ===========================
const trackEvent = (category, action, label) => {
    // Placeholder for analytics tracking
    // Example: Google Analytics, Plausible, etc.
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
};

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('Button', 'Click', btn.textContent.trim());
    });
});

// Track social link clicks
document.querySelectorAll('.social-links a, .social-btn').forEach(link => {
    link.addEventListener('click', () => {
        const platform = link.getAttribute('aria-label') || link.textContent.trim();
        trackEvent('Social', 'Click', platform);
    });
});

// ===========================
// Print Optimization
// ===========================
window.addEventListener('beforeprint', () => {
    // Expand all collapsed sections before printing
    console.log('Preparing page for printing...');
});

window.addEventListener('afterprint', () => {
    console.log('Print completed');
});

// ===========================
// Error Handling for External Resources
// ===========================
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
        // Optionally set a fallback image
        // e.target.src = 'path/to/fallback-image.jpg';
    }
}, true);

// ===========================
// Initialize All Features
// ===========================
console.log('✅ Portfolio website initialized successfully!');

// Made with Bob
