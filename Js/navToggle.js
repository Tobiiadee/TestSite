const navBlock = document.querySelector('.block');
const navToggle = document.querySelector('.hamburger');
const navToggleClose = document.querySelector('.hamburgerr');

navToggle.addEventListener('click', () => {
    console.log(navBlock);
    navBlock.classList.add('display');
});

navToggleClose.addEventListener('click', () => {

    navBlock.classList.remove('display');

    console.log('button cancel clicked');

});