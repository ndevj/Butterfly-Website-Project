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
    var videos = document.querySelectorAll(".life_cycle_vid");
    var row4Cells = document.querySelectorAll(".inner-grid-row4 .lc-row4-cell");

    videos.forEach(function(video, index) {
        video.addEventListener("mouseenter", function() {
            row4Cells[index].classList.add("fade-in");
        });

        video.addEventListener("mouseleave", function() {
            row4Cells[index].classList.remove("fade-in");
        });
    });

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
