// Initialize EmailJS
(function () {
  emailjs.init("RW2yNByWT57TMrEtP"); // Replace with your EmailJS public key
})();

// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Collect form data
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  console.log(name, email, subject, message);

  // Send email using EmailJS
  emailjs
    .send("service_4k4kcym", "template_7kbs4yq", {
      name,
      email,
      subject,
      message,
    })
    .then(
      function (response) {
        alert("Message sent successfully!");
      },
      function (error) {
        alert("Failed to send message.");
      }
    );

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
});
