document.addEventListener("DOMContentLoaded", function() {
    var fullSizeDiv = document.querySelector(".inner-full-size");
    fullSizeDiv.classList.add("visible");

    var targetScrollY = window.innerHeight * 0.44; // 44% of the viewport height
    var fadeOutScrollY = (1600 / window.innerHeight) * window.innerHeight; 

    window.addEventListener("scroll", function() {
        var scrollYValue = window.scrollY;
        console.log("Current scrollY value:", scrollYValue);

        var lcGridContainer = document.querySelector(".lc-grid-container");

        if (scrollYValue >= targetScrollY && scrollYValue < fadeOutScrollY) {
            lcGridContainer.classList.add("fade-in");
            lcGridContainer.classList.remove("fade-out");
        } else if (scrollYValue >= fadeOutScrollY) {
            lcGridContainer.classList.add("fade-out");
            lcGridContainer.classList.remove("fade-in");
        } else {
            lcGridContainer.classList.remove("fade-in", "fade-out");
        }
    });

    
    var viewportHeight = window.innerHeight;
    var vhValue = (400 / viewportHeight) * 100;
    console.log("400 pixels is equivalent to " + vhValue + "vh");

    
    function logCurrentVH() {
        var currentVH = (window.innerHeight / window.innerHeight) * 100;
        console.log("Current viewport height is " + currentVH + "vh");
    }

    
    logCurrentVH();

    
    window.addEventListener("resize", logCurrentVH);



    const slider = document.getElementById('imageSlider');
    const colorImg = document.querySelector('.color-img');
    const xRayImg = document.querySelector('.x-ray-img');

    
    slider.value = 50;
    colorImg.style.clipPath = `inset(0 ${100 - slider.value}% 0 0)`;
    xRayImg.style.clipPath = `inset(0 0 0 ${slider.value}%)`;

    slider.addEventListener('input', function() {
        const value = slider.value;
        colorImg.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
        xRayImg.style.clipPath = `inset(0 0 0 ${value}%)`;
    });

    // Handle bubble descriptions
    const bubbleDescs = document.querySelectorAll('.bubble-desc');
    const bubbleLeft = document.querySelector('.bubble-left');

    bubbleDescs.forEach(bubble => {
        bubble.addEventListener('mouseenter', () => {
            const title = bubble.dataset.title;
            const text = bubble.dataset.text;
            
            bubbleLeft.innerHTML = `
                <h2>${title}</h2>
                <p>${text}</p>
            `;
            bubbleLeft.classList.add('visible');
        });

        bubble.addEventListener('mouseleave', () => {
            bubbleLeft.classList.remove('visible');
        });
    });

    try {
        VANTA.BIRDS({
            el: "#birds",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 0.50,
            scaleMobile: 1.00,
            backgroundColor: 0xffffff,
            color1: 0xe000ff,
            color2: 0xff9200,
            colorMode: "lerpGradient",
            speedLimit: 2.00,
            separation: 55.00,
            alignment: 77.00,
            cohesion: 4.00,
            quantity: 4.00
        });
        console.log("VANTA.BIRDS initialized successfully");
    } catch (error) {
        console.error("Error initializing VANTA.BIRDS:", error);
    }

    VANTA.FOG({
        el: "#inner",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        blurFactor: 0.90,
        speed: 4.10,
        zoom: 0.60
      })
});

const scrollArrow = document.getElementById('scrollArrow');
scrollArrow.addEventListener('click', () => {
    document.querySelector('#content_fc').scrollIntoView({
        behavior: 'smooth'
    });
});

const factsSectionArrow = document.getElementById('factsSectionArrow');
factsSectionArrow.addEventListener('click', () => {
    document.querySelector('.content_FC').scrollIntoView({
        behavior: 'smooth'
    });
});

const newSectionArrow = document.getElementById('newSectionArrow');
newSectionArrow.addEventListener('click', () => {
    document.querySelector('.content_BA').scrollIntoView({
        behavior: 'smooth'
    });
});







