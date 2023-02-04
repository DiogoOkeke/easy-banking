let openNav = document.querySelector('.hamburger-menu-icon');
let closeNav = document.querySelector('.close-icon');
let navContent = document.querySelector('.nav-content');


// Opening and Closing the nav bar

openNav.onclick = () => {
 navContent.style.display = 'flex';
 openNav.style.display = 'none';
 closeNav.style.display = 'block';
}

closeNav.onclick = () => {
 closeNav.style.display = 'none';
 navContent.style.display = 'none';
 openNav.style.display = 'block';
}
