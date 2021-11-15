// Variable declaration Burger Menu
const burgerMenu = document.querySelector('.hamburger-menu');
// Variable declaration Burger Icon
const burgerIcon = document.querySelector('.header-right > a ');

// LOGIC
// Burger icon on click
burgerIcon.addEventListener('click',
    function() {
        // Add active class
        burgerMenu.classList.add('active');
        
        
    }
);

// Variable declaration Burger Close
const burgerClose = document.querySelector('.close');
// Burger close on click
burgerClose.addEventListener('click',
    function() {
        // Remove active class
        burgerMenu.classList.remove('active');
    }
);
