/**
 * Ugumad Eng Services - Main JavaScript
 * Handles mobile menu toggle and smooth scrolling
 */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navList = document.querySelector('.nav-list');
  
  if (menuToggle && navList) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navList.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (menuToggle && navList) {
        menuToggle.classList.remove('active');
        navList.classList.remove('active');
      }
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add active class to nav links on scroll
  const sections = document.querySelectorAll('section');
  
  function highlightNavOnScroll() {
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavOnScroll);
  
  // Animate elements on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('animated');
      }
    });
  }
  
  // Add animation classes to elements
  function setupAnimations() {
    const serviceCards = document.querySelectorAll('.service-card');
    const expertiseCards = document.querySelectorAll('.expertise-card');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const workflowSteps = document.querySelectorAll('.workflow-step');
    
    const elementsToAnimate = [
      ...serviceCards,
      ...expertiseCards,
      ...portfolioItems,
      ...workflowSteps
    ];
    
    elementsToAnimate.forEach(element => {
      element.classList.add('animate-on-scroll');
    });
  }
  
  setupAnimations();
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check on page load
});