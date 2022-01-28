window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var socials = document.getElementById("socials");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    socials.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
    socials.classList.remove("sticky")
  }
}
