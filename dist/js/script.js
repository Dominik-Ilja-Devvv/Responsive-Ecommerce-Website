// ==================================================================================================== //
// TOGGLE MOBILE NAVIGATION
// ==================================================================================================== //
const showMenu = (toggleID, navID) => {
  const toggle = document.getElementById(toggleID),
    nav = document.getElementById(navID);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav__menu");


// ==================================================================================================== //
// UPDATE ACTIVE LINK
// ==================================================================================================== //
const navLinks = document.querySelectorAll(".nav__link");

function linkAction() {
  // Add "active-link" class to clicked link
  navLinks.forEach(link => link.classList.remove("active-link"));
  this.classList.add("active-link");

  // Close Mobile Menu
  const navMenu = document.getElementById("nav__menu");
  navMenu.classList.remove("show-menu");
}

navLinks.forEach(link => link.addEventListener("click", linkAction));
