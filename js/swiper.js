currentpage = 1;
maxpages = 3;
collection = document.getElementsByClassName("multicard");
dotcollection = document.getElementsByClassName("pagination-dot");
content = document.getElementsByClassName("multicardcontent");

function changePage() {
    switch (currentpage) {
        case 1:
            dotcollection[0].classList.add("pagdot-active");
            dotcollection[1].classList.remove("pagdot-active");
            dotcollection[2].classList.remove("pagdot-active");
            break;
        case 2:
            dotcollection[1].classList.add("pagdot-active");
            dotcollection[2].classList.remove("pagdot-active");
            dotcollection[0].classList.remove("pagdot-active");
            break;
        case 3:
            dotcollection[2].classList.add("pagdot-active");
            dotcollection[1].classList.remove("pagdot-active");
            dotcollection[0].classList.remove("pagdot-active");
            break;
    }
    for (let i = 0; i < 3; i++) {
        if (i == currentpage - 1)
            content[i].classList.add("showmultipage");
        else
            content[i].classList.remove("showmultipage");
    }
}

function zoom(event) {
    event.preventDefault();
    if (event.deltaY > 0) {
        if (currentpage + 1 > 3) {
            currentpage = 1;
        } else {
            currentpage++;
        }
    } else {
        if (currentpage - 1 < 1) {
            currentpage = 3;
        } else {
            currentpage--;
        }
    }

    changePage()

}

collection[0].addEventListener('wheel', zoom);



let touchstartY = 0
let touchendY = 0


function handleGesture() {
    if (touchendY < touchstartY) {
        if (currentpage + 1 > 3) {
            currentpage = 1;
        } else {
            currentpage++;
        }
    }
    if (touchendY > touchstartY) {
        if (currentpage - 1 < 1) {
            currentpage = 3;
        } else {
            currentpage--;
        }
    }
    changePage()
}

collection[0].addEventListener('touchstart', e => {
    touchstartY = e.changedTouches[0].screenY
})

collection[0].addEventListener('touchend', e => {
    touchendY = e.changedTouches[0].screenY
    handleGesture()
})