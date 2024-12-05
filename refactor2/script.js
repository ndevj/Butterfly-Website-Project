document.addEventListener("DOMContentLoaded", function() {
    var fullSizeDiv = document.querySelector(".inner-full-size");
    fullSizeDiv.classList.add("visible");

    var targetScrollY = window.innerHeight * 0.44; // 44% of the viewport height
    var fadeOutScrollY = (1600 / window.innerHeight) * window.innerHeight; // vh equivalent of 1600 pixels

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

    // current viewport height in vh
    function logCurrentVH() {
        var currentVH = (window.innerHeight / window.innerHeight) * 100;
        console.log("Current viewport height is " + currentVH + "vh");
    }

    //function to log the current vh
    logCurrentVH();

    
    window.addEventListener("resize", logCurrentVH);

    // Handle hover events on videos


    // // Lock the grid size at initial load
    // var lcGridContainer = document.querySelector(".lc-grid-container");
    // var initialWidth = lcGridContainer.offsetWidth;
    // var initialHeight = lcGridContainer.offsetHeight;

    // lcGridContainer.style.width = initialWidth + "px";
    // lcGridContainer.style.height = initialHeight + "px";
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

document.getElementById('imageSlider').addEventListener('input', function(e) {
    const value = e.target.value;
    document.querySelector('.color-img').style.clipPath = `inset(0 ${100 - value}% 0 0)`;
});

