/*Nav bar logic*/ 
function toggleMenu() {
  var navLinks = document.querySelector(".nav-links");
  var menuToggle = document.querySelector(".menu-toggle");
  navLinks.classList.toggle("open");

  if (navLinks.classList.contains("open")) {
    menuToggle.style.display = "none";
  } else {
    menuToggle.style.display = "block";
  }
}


   

