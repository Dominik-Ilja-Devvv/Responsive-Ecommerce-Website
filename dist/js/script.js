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


