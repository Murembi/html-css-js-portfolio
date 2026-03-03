// Contact Form Handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        if (!data.name || !data.email || !data.message) {
            alert('Please fill in all fields');
            return;
        }
       
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email');
            return;
        }
        
        console.log('Form submitted:', data);
        alert('Thank you for contacting me! I will get back to you soon.');
        this.reset();
    });
}

// UI helpers for the main page
function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    if (menuLinks) {
        menuLinks.classList.toggle('open');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // hamburger icon
    const hamburger = document.getElementById('hamburgerIcon');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // close menu when any link clicked
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // contact button navigation
    const contactBtn = document.getElementById('contactButton');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            location.href = './contact.html';
        });
    }

    // social icons
    document.querySelectorAll('#socials-container .social-link').forEach(icon => {
        icon.addEventListener('click', () => {
            if (icon.classList.contains('linkedin')) {
                location.href = 'https://www.linkedin.com/in/murembiwa-mutswaletswale-3ba086226/';
            } else if (icon.classList.contains('github')) {
                location.href = 'https://github.com/Murembi';
            }
        });
    });
});