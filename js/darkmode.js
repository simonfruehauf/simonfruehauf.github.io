
darkmodebutton = document.getElementById('darkmode-button');
darkmodeicon = darkmodebutton.firstChild;

darkmodebutton.addEventListener('click', event => darkmode());

function darkmode() {
    var element = document.body;
    element.classList.toggle("light-mode");

    //darkmodebutton.innerHTML = '';
    if (element.classList.contains("light-mode"))
    {
        darkmodeicon.innerHTML = "dark_mode";
        
        document.documentElement.style.setProperty('--button-color', "rgb(31, 31, 31)");
        document.documentElement.style.setProperty('--gridcontainer-color', "rgb(38, 28, 18, 0.35)");
        document.documentElement.style.setProperty('--button-font-color', "rgb(238, 237, 224)");
        document.documentElement.style.setProperty('--button-font-color-almost', "rgb(31, 31, 31)");
        document.documentElement.style.setProperty('--button-font-color-spoton', "rgb(31, 31, 31)");

        document.documentElement.style.setProperty('--grid-color', "rgb(31, 31, 31)");
        document.documentElement.style.setProperty('--grid-color-font', "rgb(31, 31, 31)");

        document.documentElement.style.setProperty('--grid-color-active', "rgb(170, 170, 170)");
        document.documentElement.style.setProperty('--grid-color-inactive', "rgb(110, 110, 110)");

        document.documentElement.style.setProperty('--grid-color-spoton', "rgb(130, 241, 97)");
        document.documentElement.style.setProperty('--grid-color-almost', "rgb(192, 175, 46)");

        
    }
    else {

        darkmodeicon.innerHTML = "light_mode";
        document.documentElement.style.setProperty('--gridcontainer-color', "rgb(238, 228, 218, 0.35)");

        document.documentElement.style.setProperty('--button-color', "rgb(238, 237, 224)");
        document.documentElement.style.setProperty('--button-font-color', "rgb(31, 31, 31)");
        document.documentElement.style.setProperty('--button-font-color-almost', "rgb(31, 31, 31)");
        document.documentElement.style.setProperty('--button-font-color-spoton', "rgb(31, 31, 31)");

        document.documentElement.style.setProperty('--grid-color', "rgb(31, 31, 31)");
        document.documentElement.style.setProperty('--grid-color-font', "rgb(31, 31, 31)");

        document.documentElement.style.setProperty('--grid-color-active', "rgb(210,210,210)");
        document.documentElement.style.setProperty('--grid-color-inactive', "rgb(110, 110, 110)");

        document.documentElement.style.setProperty('--grid-color-spoton', "rgb(130, 241, 97)");
        document.documentElement.style.setProperty('--grid-color-almost', "rgb(236, 220, 97)");
        

    }
}