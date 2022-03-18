var elements = document.getElementsByClassName("option");

function press(e, ev) {
    if (!e.classList.contains("active")) {
        //ignore click if not active
        ev.preventDefault();
    }
    Array.from(elements).forEach(element => {
        element.classList.remove("active")
    });

    e.classList.add("active");

}

Array.from(elements).forEach((element) => {
    element.addEventListener('click', event => press(element, event));
})