const initApp = () => {
  const hamburgerBtn = document.querySelector('#hamburger-button');
  const mobileMenu = document.querySelector('#mobile-menu');

  // Function to open menu
  const openMenu = () => {
    mobileMenu.classList.remove('hidden'); // Ensure menu is visible
    mobileMenu.classList.add('animate-open-menu'); // Apply open animation
    mobileMenu.classList.remove('animate-close-menu'); // Remove close animation if it was previously applied
    // apply toggle-btn class
    hamburgerBtn.classList.toggle('toggle-btn');
  };

  // Function to close menu
  const closeMenu = () => {
    mobileMenu.classList.remove('animate-open-menu'); // Remove open animation
    mobileMenu.classList.add('animate-close-menu'); // Apply close animation
    // apply toggle-btn class
    hamburgerBtn.classList.toggle('toggle-btn');

    // Add a listener to hide the menu once close animation ends
    mobileMenu.addEventListener('animationend', function handleAnimationEnd() {
      mobileMenu.classList.add('hidden'); // Hide menu
      mobileMenu.classList.remove('flex'); // Remove flex to reset state
      mobileMenu.removeEventListener('animationend', handleAnimationEnd); // Remove listener
    });
  };

  // Toggle function that checks whether to open or close the menu
  const toggleMenu = () => {
    if (mobileMenu.classList.contains('hidden')) {
      openMenu();
      mobileMenu.classList.add('flex'); // Add flex class to make it a flex container
    } else {
      closeMenu();
    }
  };

  // Event listeners for button clicks
  hamburgerBtn.addEventListener('click', toggleMenu);
  mobileMenu.addEventListener('click', toggleMenu);
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
