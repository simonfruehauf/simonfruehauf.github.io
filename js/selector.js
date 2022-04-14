page1 = document.getElementById('page1');
page2 = document.getElementById('page2');
page3 = document.getElementById('page3');
page4 = document.getElementById('page4');

button1 = document.getElementById('button1');
button2 = document.getElementById('button2');
button3 = document.getElementById('button3');
button4 = document.getElementById('button4');

function switchPage(value) {
    switch (value) {
        case 1:
            page1.style.display = "inherit";
            page2.style.display = "none";
            page3.style.display = "none";
            page4.style.display = "none";
            break;
        case 2:
            page1.style.display = "none";
            page2.style.display = "inherit";
            page3.style.display = "none";
            page4.style.display = "none";
            break;
        case 3:
            page1.style.display = "none";
            page2.style.display = "none";
            page3.style.display = "inherit";
            page4.style.display = "none";
            break;
        case 4:
            page1.style.display = "none";
            page2.style.display = "none";
            page3.style.display = "none";
            page4.style.display = "inherit";
            break;
    }
}
switchPage(1);


button1.addEventListener('click', event => switchPage(1));
button2.addEventListener('click', event => switchPage(2));
button3.addEventListener('click', event => switchPage(3));
button4.addEventListener('click', event => switchPage(4));