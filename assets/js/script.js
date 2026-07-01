// Project list with categories
const TabProject = [
    
    {
        link: 'https://github.com/missmari-dot/isi_burger',
        img: 'assets/imgs/burger.png',
        alt: 'Système de gestion de commandes',
        title: 'Isi Burger',
        desc: 'Site de gestion des commandes pour restaurant avec interface utilisateur intuitive',
        category: 'web',
        technologies: ['Laravel']
    },
     {
        link: 'https://github.com/missmari-dot/Portail-Scolaire',
        img: 'assets/imgs/scolaire.png',
        alt: 'Système de gestion de commandes',
        title: 'Portail scolaire',
        desc: 'Site de gestion des services scolaire pour avec interface utilisateur intuitive',
        category: 'web',
        technologies: ['Laravel+Angular']
    },
     {
        link: 'https://github.com/missmari-dot/coca-project',
        img: 'assets/imgs/coca.png',
        alt: 'Système de gestion de Stock de boisson',
        title: 'Coca-project',
        desc: 'Site de gestion de boissons coca ',
        category: 'web',
        technologies: ['J2E']
    },
    {
        link: 'https://github.com/missmari-dot/Bibliotheque-python.git',
        img: 'assets/imgs/bibi.png',
        alt: 'Système de gestion de bibliotheque',
        title: 'Gestion bibliotheque',
        desc: 'Site de gestion de livres pour biblioteque',
        category: 'web',
        technologies: ['python']
    },
    {
        link: 'https://github.com/missmari-dot/pharma-app',
        img: 'assets/imgs/pharma.png',
        alt: 'Application Pharmacie',
        title: 'Pharma App',
        desc: 'Application de réservation de médicaments et d’informations sur les pharmacies (ouvertes, fermées ou de garde)',
        category: 'app',
        technologies: ['Flutter']
    },
    {
        link: 'https://github.com/missmari-dot/academieohada',
        img: 'assets/imgs/ohada.png',
        alt: 'Académie Rédaction OHADA',
        title: 'Académie Rédaction OHADA',
        desc: 'Plateforme web de rédaction de mémoires et d’accompagnement académique pour les étudiants de l’espace OHADA',
        category: 'web',
        technologies: ['Laravel']
    },
    {
        link: 'https://github.com/missmari-dot/Data_Cleaning',
        img: 'assets/imgs/data.png',
        alt: 'Nettoyage de données',
        title: 'Data Cleaning',
        desc: 'Plateforme de prétraitements des données avant leur utilisation (Valeurs manquantes, abberantes, outliers',
        category: 'web',
        technologies: ['Python']
    },
];

$(document).ready(function() {
    // Smooth scroll for navbar links
    $(".navbar .nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800, function(){
                window.location.hash = hash;
            });
        } 
    });

    // Smooth scroll for other buttons
    $(".about_s, .portfolio_s, .contact_s").on('click', function(event) {
        event.preventDefault();
        var destination = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(destination).offset().top - 70
        }, 800);
    });

    // Navbar background on scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
    });

    // Portfolio filter functionality
    $('.filter-btn').on('click', function() {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        const filter = $(this).data('filter');
        filterProjects(filter);
    });

    // Generate projects
    generateProjects();

    // Initialize and refresh AOS after generating projects
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
        AOS.refresh();
    }

    // Contact form validation and submission
    $('.contact-form').on('submit', function(e) {
        if (!validateForm()) {
            e.preventDefault();
        } else {
            // Show loading state
            const submitBtn = $(this).find('input[type="submit"]');
            const originalText = submitBtn.val();
            submitBtn.val('Envoi en cours...').prop('disabled', true);
            
            // Reset after 3 seconds (for demo purposes)
            setTimeout(() => {
                submitBtn.val(originalText).prop('disabled', false);
                showNotification('Message envoyé avec succès !', 'success');
                $(this)[0].reset();
            }, 3000);
        }
    });

    // Typing animation for skills
    animateSkillTags();
});

// Generate project cards
function generateProjects() {
    const projectContainer = $("#project");
    projectContainer.html('');
    
    TabProject.forEach((element, index) => {
        const techTags = element.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        projectContainer.append(`
            <div class="col-md-6 col-lg-4 mb-4 project-item" data-category="${element.category.toLowerCase()}" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="portfolio-card">
                    <div class="portfolio-img-wrapper">
                        <img src="${element.img}" class="portfolio-card-img" alt="${element.alt}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 200%22%3E%3Crect width=%22300%22 height=%22200%22 fill=%22%23f8f9fa%22/%3E%3Ctext x=%22150%22 y=%22100%22 text-anchor=%22middle%22 font-size=%2220%22 fill=%22%23695aa6%22%3E${element.title}%3C/text%3E%3C/svg%3E'">
                        <div class="portfolio-overlay">
                            <div class="portfolio-actions">
                                <a href="${element.link}" target="_blank" class="portfolio-btn" title="Voir le projet">
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                                <button class="portfolio-btn" onclick="openProjectModal('${index}')" title="Plus d'infos">
                                    <i class="fas fa-info-circle"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-content">
                        <h5 class="portfolio-title">${element.title}</h5>
                        <p class="portfolio-desc">${element.desc}</p>
                        <div class="tech-tags">
                            ${techTags}
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
}

// Filter projects
function filterProjects(category) {
    $('.project-item').each(function() {
        const projectCategory = $(this).data('category');
        
        if (category === 'all' || projectCategory === category.toLowerCase()) {
            $(this).fadeIn(300);
        } else {
            $(this).fadeOut(300);
        }
    });
}

// Open project modal
function openProjectModal(index) {
    const project = TabProject[index];
    const techTags = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    const modalHTML = `
        <div class="modal fade" id="projectModal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${project.title}</h5>
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img src="${project.img}" class="img-fluid mb-3" alt="${project.alt}">
                        <p>${project.desc}</p>
                        <div class="tech-tags mb-3">
                            ${techTags}
                        </div>
                        <a href="${project.link}" target="_blank" class="btn btn-primary">
                            <i class="fas fa-external-link-alt me-2"></i>Voir le projet
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal
    $('#projectModal').remove();
    
    // Add new modal
    $('body').append(modalHTML);
    $('#projectModal').modal('show');
}

// Form validation
function validateForm() {
    let isValid = true;
    const form = $('.contact-form');
    
    // Clear previous errors
    $('.form-control').removeClass('is-invalid');
    $('.invalid-feedback').remove();
    
    // Validate name
    const name = form.find('input[name="name"]');
    if (name.val().trim().length < 2) {
        showFieldError(name, 'Le nom doit contenir au moins 2 caractères');
        isValid = false;
    }
    
    // Validate email
    const email = form.find('input[name="email"]');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.val())) {
        showFieldError(email, 'Veuillez entrer une adresse email valide');
        isValid = false;
    }
    
    // Validate subject
    const subject = form.find('input[name="subject"]');
    if (subject.val().trim().length < 3) {
        showFieldError(subject, 'Le sujet doit contenir au moins 3 caractères');
        isValid = false;
    }
    
    // Validate message
    const message = form.find('textarea[name="message"]');
    if (message.val().trim().length < 10) {
        showFieldError(message, 'Le message doit contenir au moins 10 caractères');
        isValid = false;
    }
    
    return isValid;
}

// Show field error
function showFieldError(field, message) {
    field.addClass('is-invalid');
    field.after(`<div class="invalid-feedback">${message}</div>`);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = $(`
        <div class="notification notification-${type}">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'} me-2"></i>
            ${message}
        </div>
    `);
    
    $('body').append(notification);
    
    setTimeout(() => {
        notification.addClass('show');
    }, 100);
    
    setTimeout(() => {
        notification.removeClass('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Animate skill tags
function animateSkillTags() {
    $('.skill-tag').each(function(index) {
        $(this).css('animation-delay', `${index * 0.1}s`);
    });
}

// Navbar toggle for mobile
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active');
    $('ul.nav').toggleClass('show');
});

// Back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        if ($('#back-to-top').length === 0) {
            $('body').append(`
                <button id="back-to-top" class="back-to-top-btn">
                    <i class="fas fa-arrow-up"></i>
                </button>
            `);
        }
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});

// Back to top functionality
$(document).on('click', '#back-to-top', function() {
    $('html, body').animate({scrollTop: 0}, 800);
});

// Parallax effect for header
$(window).scroll(function() {
    const scrolled = $(window).scrollTop();
    const parallax = $('.header');
    const speed = scrolled * 0.5;
    
    parallax.css('transform', `translateY(${speed}px)`);
});

// Counter animation
function animateCounters() {
    $('.counter').each(function() {
        const $this = $(this);
        const countTo = $this.attr('data-count');
        
        $({ countNum: $this.text() }).animate({
            countNum: countTo
        }, {
            duration: 2000,
            easing: 'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });
    });
}

// Initialize counters when in viewport
$(window).scroll(function() {
    $('.counter').each(function() {
        const elementTop = $(this).offset().top;
        const elementBottom = elementTop + $(this).outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();
        
        if (elementBottom > viewportTop && elementTop < viewportBottom) {
            if (!$(this).hasClass('animated')) {
                $(this).addClass('animated');
                animateCounters();
            }
        }
    });
});

// Preloader
$(window).on('load', function() {
    $('#preloader').fadeOut('slow');
});