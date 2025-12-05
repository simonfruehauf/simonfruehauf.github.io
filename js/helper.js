
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        const images = [
            'assets/headshot.jpg',
            'https://avatars.githubusercontent.com/u/25452923?v=4'
        ];
        let currentIndex = 0;

        setInterval(() => {
            profileImage.classList.add('fade-out');
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % images.length;
                profileImage.src = images[currentIndex];
                profileImage.classList.remove('fade-out');
            }, 500);
        }, 5000);
    }
});