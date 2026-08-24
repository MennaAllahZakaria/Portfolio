const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('#menu-toggle');
const nav = document.querySelector('#site-nav');
const navLinks = [...document.querySelectorAll('.nav a:not(.nav-cta)')];
const sections = [...document.querySelectorAll('main section[id]')];
const revealItems = [...document.querySelectorAll('.reveal')];
const filterButtons = [...document.querySelectorAll('.filter-button')];
const projectCards = [...document.querySelectorAll('.project-card')];
const toolChips = [...document.querySelectorAll('.tool-chip')];
const year = document.querySelector('#current-year');

function closeMenu() {
    nav?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.setAttribute('aria-label', 'Open navigation');
    if (menuToggle) menuToggle.querySelector('i').className = 'bx bx-menu';
}

menuToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menuToggle.querySelector('i').className = open ? 'bx bx-x' : 'bx bx-menu';
});

navLinks.forEach((link) => link.addEventListener('click', closeMenu));

window.addEventListener('scroll', () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 20);
    const current = sections.reduce((active, section) => {
        if (window.scrollY + 180 >= section.offsetTop) return section.id;
        return active;
    }, 'home');
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
}, { passive: true });

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealItems.forEach((item) => revealObserver.observe(item));

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
        projectCards.forEach((card) => card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter));
    });
});

toolChips.forEach((chip) => {
    chip.addEventListener('click', () => {
        const selected = chip.classList.toggle('is-selected');
        chip.setAttribute('aria-pressed', String(selected));
    });
});

if (year) year.textContent = new Date().getFullYear();
window.dispatchEvent(new Event('scroll'));
