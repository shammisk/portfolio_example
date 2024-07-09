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

function toggleMood() {
  var body = document.body;
  var moodToggleIcon = document.querySelector(".mood-toggle i");

  body.classList.toggle("dark-mode");

  // Change icon based on the current theme
  if (body.classList.contains("dark-mode")) {
    moodToggleIcon.classList.remove("fa-moon");
    moodToggleIcon.classList.add("fa-sun");
  } else {
    moodToggleIcon.classList.remove("fa-sun");
    moodToggleIcon.classList.add("fa-moon");
  }
}

// Add this to your js/script.js
