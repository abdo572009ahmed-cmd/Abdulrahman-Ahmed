const translations = {
    en: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        hero_title: "Hi, I’m Abdurahman <br> <span>Backend Developer</span>",
        hero_subtitle: "Python | FastAPI | Django | Building APIs & Scalable Backends",
        contact_btn: "Get In Touch",
        about_title: "About Me",
        about_desc: "I am a passionate Backend Developer with expertise in building robust server-side applications. I specialize in Python-based frameworks like Django and FastAPI.",
        skills_title: "Skills",
        projects_title: "Projects",
        project_name: "E-Commerce Backend System",
        project_desc: "A scalable backend for an e-commerce platform built with Django and REST Framework.",
        view_project: "View Project",
        contact_title: "Contact",
        footer_text: "© 2024 Abdurahman. All rights reserved."
    },
    ar: {
        home: "الرئيسية",
        about: "عني",
        skills: "مهاراتي",
        projects: "مشاريعي",
        contact: "تواصل معي",
        hero_title: "أهلاً، أنا عبدالرحمن <br> <span>مطور باك-إند</span>",
        hero_subtitle: "بايثون | Django | FastAPI | أنظمة API و Backends قابلة للتوسع",
        contact_btn: "تواصل معي",
        about_title: "من أنا",
        about_desc: "أنا مطور باك-إند شغوف بناء تطبيقات الخوادم القوية. أتخصص في أطر عمل بايثون مثل جانغو و FastAPI.",
        skills_title: "المهارات",
        projects_title: "المشاريع",
        project_name: "نظام تجارة إلكترونية (Backend)",
        project_desc: "نظام خلفي قابل للتوسع لمنصة تجارة إلكترونية مبني باستخدام Django و REST Framework.",
        view_project: "الرابط",
        contact_title: "تواصل معي",
        footer_text: "© 2024 عبدالرحمن. جميع الحقوق محفوظة."
    }
};

const langToggleBtn = document.getElementById('lang-toggle');
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

// --- Language Functionality ---

function setLanguage(lang) {
    // Update basic attributes
    htmlEl.lang = lang;
    htmlEl.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update button text
    langToggleBtn.textContent = lang === 'ar' ? 'EN' : 'AR';

    // Update all text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if element has child nodes (like icons in the link)
            // If it's a simple text node, replace it. 
            // If it has children (like the project link with icon), 
            // we need to be careful not to remove the icon.
            // For simplicity in this specific project structure so far, key elements are text-mostly.
            // However, for elements like 'View Project <icon>', we might overwrite the icon.
            // Let's handle 'view_project' specifically or use a safer method if needed.

            if (key === 'view_project') {
                // Preserve the icon
                const icon = element.querySelector('i');
                element.childNodes[0].nodeValue = translations[lang][key] + ' ';
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Save to local storage
    localStorage.setItem('lang', lang);
}

langToggleBtn.addEventListener('click', () => {
    const currentLang = localStorage.getItem('lang') || 'en';
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
});


// --- Theme Functionality ---

function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    const icon = themeToggleBtn.querySelector('i');
    if (theme === 'light') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    localStorage.setItem('theme', theme);
}

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});


// --- Initialization ---

// Check local storage or default to English/Dark
const savedLang = localStorage.getItem('lang') || 'en';
const savedTheme = localStorage.getItem('theme') || 'dark';

setLanguage(savedLang);
setTheme(savedTheme);

// --- Mobile Mobile Toggle ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link (optional UX improvement)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


// --- Scroll Animations ---
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});


