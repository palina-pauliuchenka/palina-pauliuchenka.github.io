// Select element
const selectElement = function (component) {
    return document.getElementById(component);
};

// Menu toggle
const navbar = selectElement('nav');
const openMenuButton = selectElement('open-menu-button');
const closeMenuButton = selectElement('close-menu-button');
const sidebar = selectElement('sidebar');

openMenuButton.addEventListener('click', () => {
    sidebar.classList.add('show-sidebar');
});
closeMenuButton.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
});

// Fixed menu
window.addEventListener('scroll', () => {
   if (window.pageYOffset > 80) {
       navbar.classList.add('navbar-fixed');
   }  else {
       navbar.classList.remove('navbar-fixed');
   }
});