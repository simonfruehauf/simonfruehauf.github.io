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
            page1.hidden = false;
            page2.hidden = true;
            page3.hidden = true;
            page4.hidden = true;
            break;
        case 2:
            page1.hidden = true;
            page2.hidden = false;
            page3.hidden = true;
            page4.hidden = true;
            break;
        case 3:
            page1.hidden = true;
            page2.hidden = true;
            page3.hidden = false;
            page4.hidden = true;
            break;
        case 4:
            page1.hidden = true;
            page2.hidden = true;
            page3.hidden = true;
            page4.hidden = false;
            break;
    }
}

switchPage(1);

button1.addEventListener('click', event => switchPage(1));
button2.addEventListener('click', event => switchPage(2));
button3.addEventListener('click', event => switchPage(3));
button4.addEventListener('click', event => switchPage(4));