let menu3Button = document.getElementById('menu-3-button');
let menu4Button = document.getElementById('menu-4-button');

let menu3Dropdown = document.getElementById('menu-3');
let menu4Dropdown = document.getElementById('menu-4');

menu3Button.addEventListener('mouseover', displayMenuThree);
menu4Button.addEventListener('mouseover', displayMenuFour);

function displayMenuThree() {
    menu3Dropdown.classList.add('show');
    menu4Dropdown.classList.remove('show');
}

function displayMenuFour() {
    menu4Dropdown.classList.add('show');
    menu3Dropdown.classList.remove('show');
}

menu3Dropdown.addEventListener('mouseleave', closeMenus);
menu4Dropdown.addEventListener('mouseleave', closeMenus);

function closeMenus() {
    menu3Dropdown.classList.remove('show');
    menu4Dropdown.classList.remove('show');
}

let openIcon = document.querySelector('#menu-hamburger');
let menu = document.querySelector(".menu");
let closeIcon = document.querySelector('#menu-close')

openIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);

function openMenu () {
    menu.classList.add("menu-open");
  }
  
  function closeMenu () {
    menu.classList.remove("menu-open");
  }
