// إضافة التفاعل عند التمرير، وتفعيل الرابط النشط
window.addEventListener('scroll', function() {
    let currentSection = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // تحديد أي سكشن في عرض الصفحة
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // تفعيل الرابط المرتبط بالسكشن الحالي
    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
// تحديد جميع الصور
const images = document.querySelectorAll('img');

window.addEventListener('scroll', function() {
    // التمرير عبر جميع الصور
    images.forEach((image) => {
        const imageTop = image.getBoundingClientRect().top; // المسافة بين الصورة وأعلى الصفحة
        const windowHeight = window.innerHeight; // ارتفاع نافذة المتصفح

        // إذا كانت الصورة في نطاق التمرير (يتم تحميل الصورة تدريجيًا)
        if (imageTop < windowHeight - 100) {
            image.classList.add('active'); // إضافة الكلاس 'active' لتفعيل التأثير
        } else {
            image.classList.remove('active'); // إزالة الكلاس إذا كانت الصورة خارج نطاق التمرير
        }
    });
});
});