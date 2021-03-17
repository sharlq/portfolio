const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav")
const menuItem = document.querySelectorAll(".menu-nav__item")
let showMenu = false;


menuBtn.addEventListener('click', toggelMenu);

function toggelMenu(){
    if(!showMenu){
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        menuItem.forEach(item=>item.classList.add('open'));
        showMenu=true;
    }else{
        menuItem.forEach(item=> item.classList.remove('open'));
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        hamburger.classList.remove("open");
        showMenu=false;
    }
}