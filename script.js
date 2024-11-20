document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".fade_h1").classList.add("visible");
    document.querySelector("nav").classList.add("visible");
    document.querySelector(".head_video").classList.add("visible");

    const image1 = document.querySelector('.logo_info li:nth-child(1) img');
    const image2 = document.querySelector('.logo_info li:nth-child(3) img');
    const originalImage1Src = image1.src;
    const originalImage2Src = image2.src;
    const newImage1Src = 'images/bfly_logo_smalll_black.png';
    const newImage2Src = 'images/bfly_logo_smalll_black.png';

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;

        if (scrollY >= viewportHeight) {
            image1.src = newImage1Src;
            image2.src = newImage2Src;
        } else {
            image1.src = originalImage1Src;
            image2.src = originalImage2Src;
        }
    });

    const videos = document.querySelectorAll('.life_cycle_vid');
    videos.forEach((video, index) => {
        video.addEventListener('mouseenter', () => {
            if (index < 4) {
                const belowCell = document.querySelectorAll('.grid-item')[index + 4];
                belowCell.classList.add('show');
            }
        });
        video.addEventListener('mouseleave', () => {
            if (index < 4) {
                const belowCell = document.querySelectorAll('.grid-item')[index + 4];
                belowCell.classList.remove('show');
            }
        });
    });

    const scrollArrow = document.getElementById('scrollArrow');
    scrollArrow.addEventListener('click', () => {
        document.querySelector('.main_Content2').scrollIntoView({
            behavior: 'smooth'
        });
    });

    const factsSectionArrow = document.getElementById('factsSectionArrow');
    factsSectionArrow.addEventListener('click', () => {
        document.querySelector('.main_Content3').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
        const lifeCycle = document.getElementById('lifeCycle');
        if (window.scrollY >= 400) {
            lifeCycle.classList.add('scrolled');
        } else {
            lifeCycle.classList.remove('scrolled');
        }
    }, 100);
});

document.addEventListener('scroll', () => {
    const factsSection = document.getElementById('factsSection');
    const factItems = document.querySelectorAll('.fc-grid-item');
    let animated = false;

    function checkScroll() {
        if (animated) return;

        const rect = factsSection.getBoundingClientRect();
        const triggerPoint = window.innerHeight - (rect.height / 3);

        if (rect.top <= triggerPoint) {
            factItems.forEach(item => {
                item.classList.add('animate');
            });
            animated = true;
            window.removeEventListener('scroll', checkScroll);
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check initial position
});
