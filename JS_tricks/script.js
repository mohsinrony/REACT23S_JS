const backButton =document.querySelector('#backToTop');
window.onscroll = function() {scrollFunction()};
const burButton = document.querySelector('.burger')
const nav = document.querySelector('nav ul')
const menuItems = document.querySelectorAll('nav ul li a')
const header = document.querySelector('header')
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
// browser onscroll event trigger
window.onscroll = function () {
  scrollFunction ()
};
window.onclick = function(event) {
  if (event.target == modal){ modal.style.display = "none";
  }
}

// code from W3S about scrolling, for two browsers
function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
}
const getToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}
const burMenu = () => {
    for (const item of menuItems){
        item.addEventListener('click', burMenu)
    }
if (nav.classList.contains('responsive')){
    nav.classList.remove('responsive')
}
else {
    nav.classList.add('responsive')
}
}
backButton.addEventListener('click', getToTop)
burButton.addEventListener('click', burMenu)