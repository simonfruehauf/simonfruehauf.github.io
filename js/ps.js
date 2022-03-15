
var elements = document.getElementsByClassName("option");

function press(e)
{
    Array.from(elements).forEach(element => {
        element.classList.remove("active")
    });
    e.classList.add("active");

}

Array.from(elements).forEach((element) => {
    element.addEventListener('click', event => press(element));
  })
