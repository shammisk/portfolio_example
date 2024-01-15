function scrollToTop() {
    window.scrollTo({
      top: 60,
      behavior: 'smooth',
    });
  }

  // Function to highlight the active link in the navigation
  function highlightActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Determine which section is currently in view
    let currentSectionId = '';
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= 200) {
        currentSectionId = section.id;
      }
    });

    // Remove active class from all nav links
    navLinks.forEach((link) => {
      link.classList.remove('active');
    });

    // Add active class to the corresponding nav link
    navLinks.forEach((link) => {
      if (link.getAttribute('href').substring(1) === currentSectionId) {
        link.classList.add('active');
      }
    });
  }

  // Listen for scroll events and update the active link
  window.addEventListener('scroll', highlightActiveLink);

  // Initial call to highlightActiveLink to set the active link on page load
  highlightActiveLink();

  // select projects
  document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-button');
    const projects = document.querySelectorAll('.project');

    // Add click event listeners to the filter buttons
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // Remove the 'active' class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove('active'));

        // Add 'active' class to the clicked button
        button.classList.add('active');

        // Get the filter value from the data attribute
        const filter = button.getAttribute('data-filter');

        // Show or hide projects based on the filter value
        projects.forEach((project) => {
          if (filter === 'all' || project.classList.contains(filter)) {
            project.style.display = 'block';
          } else {
            project.style.display = 'none';
          }
        });
      });
    });
  });


  function scrollToTop() {
    window.scrollTo({
      top: 60,
      behavior: 'smooth',
    });
  }

  // Function to highlight the active link in the navigation
  function highlightActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Determine which section is currently in view
    let currentSectionId = '';
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= 200) {
        currentSectionId = section.id;
      }
    });

    // Remove active class from all nav links
    navLinks.forEach((link) => {
      link.classList.remove('active');
    });

    // Add active class to the corresponding nav link
    navLinks.forEach((link) => {
      if (link.getAttribute('href').substring(1) === currentSectionId) {
        link.classList.add('active');
      }
    });
  }

  // Listen for scroll events and update the active link
  window.addEventListener('scroll', highlightActiveLink);

  // Initial call to highlightActiveLink to set the active link on page load
  highlightActiveLink();

  // select projects
  document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-button');
    const resume = document.querySelectorAll('.resume');

    // Add click event listeners to the filter buttons
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // Remove the 'active' class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove('active'));

        // Add 'active' class to the clicked button
        button.classList.add('active');

        // Get the filter value from the data attribute
        const filter = button.getAttribute('data-filter');

        // Show or hide projects based on the filter value
        resume.forEach((resume) => {
          if (filter === 'all' || resume.classList.contains(filter)) {
            resume.style.display = 'block';
          } else {
            resume.style.display = 'none';
          }
        });
      });
    });
  });







  
