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
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  // Typing effect for the home section
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
  const workCards = document.querySelectorAll('.work-card');
  workCards.forEach((card, index) => {
    // Set different animation delays for each card
    const delay = index * 1.5;
    card.style.animation = `float 4s ease-in-out ${delay}s infinite`;
  });
  // Add floating animation keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
      100% {
        transform: translateY(0);
      }
    }
    .pulse {
      animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1);
    }
    
  `;
  document.head.appendChild(style);
  
    // Function to toggle the display of the service image and description
    window.toggleService = function(card) {
        card.classList.toggle('expanded');
    };
  
  // Replace the contact form with contact information
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    const contactInfo = document.createElement('div');
    contactInfo.innerHTML = `
      <div class="contact-card">
        <h3>Get in Touch</h3>
        <p>Email: natalia.barros@example.com</p>
        <p>Phone: +123 456 7890</p>
        <p><a href="https://www.linkedin.com/in/nataliabarros" target="_blank">LinkedIn Profile</a></p>
      </div>
    `;
    contactForm.parentNode.replaceChild(contactInfo, contactForm);
  }
});

  `;
  
  document.head.appendChild(style);
});
