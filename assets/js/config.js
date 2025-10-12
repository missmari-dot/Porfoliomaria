// Configuration and utility functions for the portfolio

// Configuration object
const PortfolioConfig = {
    // Personal information
    personal: {
        name: "Mariama Koulibaly",
        title: "Étudiante en Génie Logiciel",
        email: "mariama.koulibaly@email.com",
        phone: "+221 77 484 93 07",
        location: "Sénégal",
        linkedin: "https://www.linkedin.com/in/mariama-koulibaly-892a83370/",
        github: "https://github.com/missmari-dot"
    },
    
    // Animation settings
    animations: {
        typewriterSpeed: 75,
        scrollOffset: 70,
        animationDuration: 800,
        fadeInDelay: 100
    },
    
    // Form settings
    form: {
        endpoint: "https://formspree.io/f/mnqkeqaj",
        successMessage: "Message envoyé avec succès !",
        errorMessage: "Erreur lors de l'envoi du message. Veuillez réessayer."
    },
    
    // Default images for missing assets
    defaultImages: {
        logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='50' font-size='50' fill='%23695aa6'%3EMK%3C/text%3E%3C/svg%3E",
        profile: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='100' fill='%23695aa6'/%3E%3Ctext x='100' y='110' text-anchor='middle' font-size='60' fill='white'%3EMK%3C/text%3E%3C/svg%3E",
        project: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f8f9fa'/%3E%3Ctext x='150' y='100' text-anchor='middle' font-size='20' fill='%23695aa6'%3EProjet%3C/text%3E%3C/svg%3E"
    }
};

// Utility functions
const PortfolioUtils = {
    // Smooth scroll function
    smoothScroll: function(target, offset = 70) {
        const element = document.querySelector(target);
        if (element) {
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    },
    
    // Debounce function for performance
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    // Format date
    formatDate: function(date) {
        return new Intl.DateTimeFormat('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    },
    
    // Validate email
    validateEmail: function(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    // Generate unique ID
    generateId: function() {
        return Math.random().toString(36).substr(2, 9);
    },
    
    // Handle image loading errors
    handleImageError: function(img, fallbackSrc) {
        img.onerror = function() {
            this.src = fallbackSrc || PortfolioConfig.defaultImages.project;
            this.onerror = null; // Prevent infinite loop
        };
    },
    
    // Create loading spinner
    createSpinner: function() {
        const spinner = document.createElement('div');
        spinner.className = 'spinner-border text-primary';
        spinner.setAttribute('role', 'status');
        spinner.innerHTML = '<span class="sr-only">Chargement...</span>';
        return spinner;
    },
    
    // Show/hide loading state
    toggleLoading: function(element, show = true) {
        if (show) {
            element.classList.add('loading');
            element.disabled = true;
        } else {
            element.classList.remove('loading');
            element.disabled = false;
        }
    },
    
    // Copy text to clipboard
    copyToClipboard: function(text) {
        if (navigator.clipboard) {
            return navigator.clipboard.writeText(text);
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return Promise.resolve();
        }
    },
    
    // Get browser info
    getBrowserInfo: function() {
        const ua = navigator.userAgent;
        let browser = "Unknown";
        
        if (ua.indexOf("Chrome") > -1) browser = "Chrome";
        else if (ua.indexOf("Firefox") > -1) browser = "Firefox";
        else if (ua.indexOf("Safari") > -1) browser = "Safari";
        else if (ua.indexOf("Edge") > -1) browser = "Edge";
        
        return {
            browser: browser,
            mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
        };
    },
    
    // Local storage helpers
    storage: {
        set: function(key, value) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
                return true;
            } catch (e) {
                console.warn('LocalStorage not available:', e);
                return false;
            }
        },
        
        get: function(key) {
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : null;
            } catch (e) {
                console.warn('Error reading from localStorage:', e);
                return null;
            }
        },
        
        remove: function(key) {
            try {
                localStorage.removeItem(key);
                return true;
            } catch (e) {
                console.warn('Error removing from localStorage:', e);
                return false;
            }
        }
    }
};

// Performance monitoring
const PerformanceMonitor = {
    startTime: Date.now(),
    
    // Mark performance milestone
    mark: function(name) {
        if (window.performance && window.performance.mark) {
            window.performance.mark(name);
        }
    },
    
    // Measure performance between marks
    measure: function(name, startMark, endMark) {
        if (window.performance && window.performance.measure) {
            window.performance.measure(name, startMark, endMark);
        }
    },
    
    // Get page load time
    getLoadTime: function() {
        return Date.now() - this.startTime;
    },
    
    // Log performance metrics
    logMetrics: function() {
        console.log('Page Load Time:', this.getLoadTime() + 'ms');
        
        if (window.performance && window.performance.getEntriesByType) {
            const navigation = window.performance.getEntriesByType('navigation')[0];
            if (navigation) {
                console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart + 'ms');
                console.log('Load Complete:', navigation.loadEventEnd - navigation.loadEventStart + 'ms');
            }
        }
    }
};

// Initialize performance monitoring
PerformanceMonitor.mark('portfolio-start');

// Error handling
window.addEventListener('error', function(e) {
    console.error('Portfolio Error:', e.error);
    
    // You could send this to an error tracking service
    // ErrorTracker.log(e.error);
});

// Unhandled promise rejection handling
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled Promise Rejection:', e.reason);
    e.preventDefault();
});

// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PortfolioConfig, PortfolioUtils, PerformanceMonitor };
}

// Make available globally
window.PortfolioConfig = PortfolioConfig;
window.PortfolioUtils = PortfolioUtils;
window.PerformanceMonitor = PerformanceMonitor;