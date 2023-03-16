// Get the contact link and contact info div
var contactLink = document.getElementById("contact-link");
var contactInfo = document.getElementById("contact-info");

// Show the contact info when the contact link is clicked
contactLink.addEventListener("click", function () {
  contactInfo.style.display = "block";
});
