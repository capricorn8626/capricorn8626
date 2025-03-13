// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Typing animation
    var typed = new Typed(".typing", {
        strings: ["", "Web Developer", "Game Developer", "Application Developer", "Software Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Navigation elements
    const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length,
        navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
    // Handle multiple Hire Me buttons
    const hireMeBtns = document.querySelectorAll('.hire-me');
    hireMeBtns.forEach(btn => {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSection = document.querySelector('#contact');
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    // Handle multiple Home buttons
    const homeBtns = document.querySelectorAll('.home-btn');
    homeBtns.forEach(btn => {
        btn.addEventListener('click', function (event) {
            event.preventDefault(); // Ngăn cập nhật URL
            const targetSection = document.querySelector('#home');
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    // Add click event listeners to all nav links
    for (let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            if (aside.classList.contains('open')) {
                asideSectionTogglerBtn();
            }
        });
    }

    navTogglerBtn.addEventListener("click", () => {
        asideSectionTogglerBtn();
    });

    function asideSectionTogglerBtn() {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
    }
});

// Card hover effect
let cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.onmousemove = function (e) {
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;
        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    }
});

// Toast notification
function showToast(message, type) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Loading effect
window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500); // Match with transition duration
    }, 1000); // Minimum display time of 1 second
});