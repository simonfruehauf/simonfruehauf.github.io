
function toggleNav() {
    var x = document.getElementById("navbar");
    if (x.className === "mob-navbar") {
      x.className += " responsive";
    } else {
      x.className = "mob-navbar";
    }
  }