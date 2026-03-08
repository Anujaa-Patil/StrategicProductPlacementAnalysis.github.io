// Set active navigation link
function setActive(element) {
    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // Add active class to clicked link
    element.classList.add('active');
}

// Handle contact form submission
function handleContactSubmit(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validate form
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Create mailto link
    const mailtoLink = `mailto:businesstore@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        document.getElementById('contactForm').reset();
    }, 500);
}

// Initialize active navigation on page load
document.addEventListener('DOMContentLoaded', function() {
    // Get current page name
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Find and set active link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href.includes(currentPage) || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Responsive navigation toggle (optional for mobile menu)
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('mobile-active');
}