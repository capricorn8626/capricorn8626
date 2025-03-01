// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
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

  // Add click event listeners to all nav links
  for (let i = 0; i < totalNavList; i++) {
      const a = navList[i].querySelector("a");
      a.addEventListener("click", function(e) {
          e.preventDefault(); // Prevent default anchor behavior
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