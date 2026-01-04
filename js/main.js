// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// Character count for message textarea
const messageTextarea = document.getElementById('message');
const charCount = document.querySelector('.char-count');

if (messageTextarea && charCount) {
    messageTextarea.addEventListener('input', function () {
        const count = this.value.length;
        charCount.textContent = `${count}/500`;
        if (count > 500) {
            charCount.style.color = '#ef4444';
        } else {
            charCount.style.color = '';
        }
    });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Form verilerini al
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

        window.location.href = `mailto:ahmetlibekir20@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    });
}

const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealEls.forEach(el => observer.observe(el));
}

document.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.code-window');

    if (card) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateY = mouseX / 35;
        const rotateX = mouseY / 35 * -1;

        card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    }
});



document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initTypingAnimation, 100);
});

function initTypingAnimation() {
    const steps = [
        { selector: '.hero-greeting span', delay: 0 },
        { selector: '.hero-name', delay: 300 },
        { selector: '.hero-role', delay: 300 },
        { selector: '.hero-description', delay: 300 }
    ];

    let chain = Promise.resolve();

    steps.forEach(step => {
        const el = document.querySelector(step.selector);
        if (!el) return;

        const originalText = el.textContent;
        el.textContent = '';
        el.style.visibility = 'visible';

        chain = chain
            .then(() => new Promise(resolve => setTimeout(resolve, step.delay)))
            .then(() => {
                el.classList.add('typing-cursor');
                return typeText(el, originalText);
            })
            .then(() => {
                el.classList.remove('typing-cursor');
            });
    });
}

function typeText(element, text) {
    return new Promise(resolve => {
        let i = 0;
        const speed = 50;

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }
        type();
    });
}
