document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelector(".nav-links");
  const links = navLinks.querySelectorAll("a");
  const indicator = document.querySelector(".indicator-bar");

  let activeLink = links[0];

  function moveIndicator(e) {
    indicator.style.width = `${e.offsetWidth}px`;
    indicator.style.left = `${e.offsetLeft}px`;
  }

  moveIndicator(activeLink);

  links.forEach((link) => {
    link.addEventListener("mouseover", function () {
      moveIndicator(this);
    });
    link.addEventListener("click", function () {
      activeLink = this;
    });
  });

  navLinks.addEventListener("mouseleave", function () {
    moveIndicator(activeLink);
  });
});

console.log("hola mundo")
