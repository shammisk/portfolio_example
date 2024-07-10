//menu fix
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

//mood fix
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
/*document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".count");
  const speed = 200; // The lower the number, the faster the count

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      // Increment the count by a certain speed
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});*/

// Function to animate count numbers
function animateCount(start, end, duration, element) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let timer = setInterval(function() {
        current += increment;
        element.textContent = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Detect when the count section comes into view
function startCountAnimation() {
    let countItems = document.querySelectorAll('.count-item');
    countItems.forEach(function(item) {
        let countSpan = item.querySelector('.count');
        let label = item.querySelector('.label');
        let countNumber = parseInt(countSpan.textContent);
        let labelContent = label.textContent;
        
        switch (labelContent) {
            case 'Experience':
                animateCount(0, countNumber, 3000, countSpan);
                break;
            case 'Projects':
                animateCount(0, countNumber, 3000, countSpan);
                break;
            case 'Clients':
                animateCount(0, countNumber, 3000, countSpan);
                break;
            default:
                break;
        }
    });
}

// Check if element is in viewport
function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

// Trigger animation when count section is scrolled into view
window.addEventListener('scroll', function() {
    let countSection = document.querySelector('.count-section');
    if (isInViewport(countSection)) {
        startCountAnimation();
        // Remove event listener after animation to prevent multiple triggers
        window.removeEventListener('scroll', arguments.callee);
    }
});

