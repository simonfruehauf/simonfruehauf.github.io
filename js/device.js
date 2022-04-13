if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var parent = document.body;
    var sidebar = document.getElementById('sidebarcontainer');
    document.getElementById('page1').appendChild(document.getElementById('sidebarprofile'));
    document.getElementById('sidebarcontainer').style.display = "none";
} else {

}