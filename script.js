// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const formValues = Object.fromEntries(formData);
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formValues);
    
    // Reset form
    this.reset();
    alert('Thank you for your message!');
});

// Add animation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});
