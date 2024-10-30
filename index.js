const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
// modal
  window.openModal = function(modalId) {
    document.getElementById(modalId).style.display = 'block'
    document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
}

window.closeModal = function(modalId) {
    document.getElementById(modalId).style.display = 'none'
    document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
}

function closeMod() {
  // Hide the modal by adding the 'hidden' class
  const modal = document.getElementById('bookingModal');
  modal.parentNode.removeChild(modal);
}


function submitForm() {
  const form = document.getElementById("appointmentForm");
  
  // Check if form is valid
  if (!form.checkValidity()) {
      alert("Please fill out all required fields.");
      return;
  }

  // Display success message
  document.getElementById("successMessage").classList.remove("hidden");

  // Clear input fields
  form.reset();

  // Hide the success message after 3 seconds
  setTimeout(() => {
      document.getElementById("successMessage").classList.add("hidden");
  }, 3000);
}
