// Smooth scrolling for navigation buttons in the "Resume" section
function scrollToSubsection(subsectionId) {
    const subsection = document.getElementById(subsectionId);
    if (subsection) {
        window.scrollTo({
            top: subsection.offsetTop,
            behavior: 'smooth' // Use smooth scrolling behavior
        });
    }
  }
  
  // Add event listeners for navigation buttons in the "Resume" section
  document.getElementById('edubtn').addEventListener('click', () => {
    scrollToSubsection('edu');
  });
  
  document.getElementById('courses').addEventListener('click', () => {
    scrollToSubsection('courses');
  });
  
  document.getElementById('exp').addEventListener('click', () => {
    scrollToSubsection('exp');
  });
  
  document.getElementById('vol').addEventListener('click', () => {
    scrollToSubsection('vol');
  });

  document.getElementById('baj').addEventListener('click', () => {
    scrollToSubsection('baj');
  });