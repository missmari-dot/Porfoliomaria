// Enhanced Typewriter Animation
// This file handles the typewriter effect for the header presentation

// Initialize typewriter effect when document is ready
$(document).ready(function() {
    initTypewriter();
});

// Typewriter initialization function
function initTypewriter() {
    const presentation = document.getElementById('presentation');
    
    if (!presentation) {
        console.warn('Presentation element not found');
        return;
    }

    // Clear existing content
    presentation.innerHTML = '';
    
    // Check if Typewriter library is loaded
    if (typeof Typewriter === 'undefined') {
        fallbackTextAnimation();
        return;
    }
    
    // Create typewriter instance with enhanced options
    const typewriter = new Typewriter(presentation, {
        loop: true,
        delay: 75,
        deleteSpeed: 50,
        cursor: '|',
        cursorClassName: 'typewriter-cursor'
    });

    // Enhanced typing sequence
    typewriter
        .typeString('<span class="greeting">Salut ! 👋</span>')
        .pauseFor(2000)
        .deleteAll()
        .typeString('<span class="name">Je m\'appelle <strong>Mariama Koulibaly</strong></span>')
        .pauseFor(2000)
        .deleteAll()
        .typeString('<span class="title">Étudiante en <em>Master 1 en Data science et IA</em></span>')
        .pauseFor(2000)
        .deleteAll()
        .typeString('<span class="passion">Passionnée par le <span style="color: #ff6d02;">Développement et la Tech</span></span>')
        .pauseFor(3000)
        .deleteAll()
        .typeString('<span class="welcome">Bienvenue sur mon Portfolio ! </span>')
        .pauseFor(3000)
        .start();
}

// Alternative simple text animation for fallback
function fallbackTextAnimation() {
    const presentation = document.getElementById('presentation');
    if (!presentation) return;
    
    const texts = [
        'Salut ! 👋',
        'Je m\'appelle Mariama Koulibaly',
        'Étudiante en Master 1 en Data science et IA',
        'Passionnée par le Développement ',
        'Bienvenue sur mon Portfolio ! ✨'
    ];
    
    let currentIndex = 0;
    
    function animateText() {
        presentation.style.opacity = '0';
        
        setTimeout(() => {
            presentation.innerHTML = `<span class="animated-text">${texts[currentIndex]}</span>`;
            presentation.style.opacity = '1';
            currentIndex = (currentIndex + 1) % texts.length;
        }, 500);
    }
    
    // Start animation
    animateText();
    setInterval(animateText, 4000);
}

// Check if Typewriter is available, otherwise use fallback
if (typeof Typewriter === 'undefined') {
    console.warn('Typewriter library not loaded, using fallback animation');
    $(document).ready(function() {
        fallbackTextAnimation();
    });
}

// Custom cursor blinking animation
function addCustomCursor() {
    const style = document.createElement('style');
    style.textContent = `
        .typewriter-cursor {
            color: #7d83af;
            font-weight: bold;
            animation: blink 1s infinite;
        }
        
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        
        .greeting {
            color: #ff6d02;
            font-size: 1.2em;
        }
        
        .name {
            color: #695aa6;
        }
        
        .title {
            color: #7d83af;
        }
        
        .passion {
            color: #2c3e50;
        }
        
        .welcome {
            color: #695aa6;
            font-weight: 600;
        }
        
        .animated-text {
            display: inline-block;
            animation: fadeInUp 0.8s ease-out;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Add custom styles when document loads
$(document).ready(function() {
    addCustomCursor();
});
