// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Update the website name in any remaining places
    document.title = 'Natalia Barros Portfolio';
    
    const logoElements = document.querySelectorAll('.logo');
    logoElements.forEach(el => {
        el.textContent = 'Natalia Barros';
    });
    
    // Update footer copyright
    const footerCopyright = document.querySelector('footer p');
    if (footerCopyright) {
        footerCopyright.textContent = '© 2025 Natalia Barros. All rights reserved.';
    }
    
    // Scroll animation function
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Run animation check on page load
    setTimeout(animateOnScroll, 200);
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Navigation scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Enhance work samples section with animation and interaction
    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach((card, index) => {
        // Add a subtle animation delay for staggered reveal
        card.style.animationDelay = `${index * 0.2}s`;
        
        // Add interaction effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 12px 24px rgba(216, 167, 177, 0.25)';
            
            // Find the h3 element and add special animation
            const heading = this.querySelector('h3');
            if (heading) {
                heading.style.color = '#D8A7B1';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            
            // Reset the heading styles
            const heading = this.querySelector('h3');
            if (heading) {
                heading.style.color = '';
            }
        });
    });
    
    // Replace contact form with personal information
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        const contactForm = contactSection.querySelector('.contact-form');
        if (contactForm) {
            // Create new contact info element
            const contactInfo = document.createElement('div');
            contactInfo.className = 'contact-info';
            
            // Add contact information
            contactInfo.innerHTML = `
                <div class="contact-card animate-on-scroll">
                    <h3>Natalia Barros Ortiz</h3>
                    <p><strong>Location:</strong> Barranquilla, Atlántico, Colombia</p>
                    <p><strong>Phone:</strong> <a href="tel:+573235437360">+57 3235437360</a></p>
                    <p><strong>Email:</strong> <a href="mailto:nataliabarros2002@gmail.com">nataliabarros2002@gmail.com</a></p>
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/natalia-barros-ortiz-a36386302?trk=contact-info" target="_blank">Natalia Barros Ortiz</a></p>
                </div>
            `;
            
            // Replace the form with the contact info
            contactForm.parentNode.replaceChild(contactInfo, contactForm);
            
            // Initialize animation for the contact card
            setTimeout(function() {
                const contactCard = document.querySelector('.contact-card');
                if (contactCard) {
                    if (contactCard.getBoundingClientRect().top < window.innerHeight) {
                        contactCard.classList.add('animate');
                    }
                }
            }, 300);
        }
    }
    
    // Add a typing effect to the hero heading
    const heroHeading = document.querySelector('#home h1');
    if (heroHeading) {
        const originalText = heroHeading.textContent;
        heroHeading.textContent = '';
        
        let i = 0;
        const typeWriter = function() {
            if (i < originalText.length) {
                heroHeading.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start the typing effect with a delay
        setTimeout(typeWriter, 500);
    }
    
    // Add pulse animation to CTA button
    const ctaButton = document.querySelector('.cta-btn');
    if (ctaButton) {
        // Add pulse class periodically
        setInterval(() => {
            ctaButton.classList.add('pulse');
            
            // Remove the class after animation completes
            setTimeout(() => {
                ctaButton.classList.remove('pulse');
            }, 1000);
        }, 3000);
    }
    
    // Create a subtle floating animation for work cards
    workCards.forEach((card, index) => {
        // Set different animation delays for each card
        const delay = index * 1.5;
        card.style.animation = `float 4s ease-in-out ${delay}s infinite`;
    });
    
    // Add floating animation keyframes if not already in CSS
    if (!document.querySelector('style#animation-styles')) {
        const style = document.createElement('style');
        style.id = 'animation-styles';
        style.textContent = `
            /* Additional styles for hover effects */
            a:hover {
                transition: color 0.3s;
            }
            
            /* Enhancement for work cards */
            .work-card {
                cursor: pointer;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add fallback for missing hero background
    const homeSection = document.getElementById('home');
    if (homeSection) {
        // Check if the background image is loaded
        const img = new Image();
        img.src = 'hero-background.jpg';
        img.onerror = function() {
            // If image fails to load, apply a gradient background instead
            homeSection.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #111 100%)';
        };
    }
});
