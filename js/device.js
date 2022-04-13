if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var parent = document.body;
    parent.appendChild(document.getElementById('sidebarprofile'));
    parent.appendChild(document.getElementById('abouttextcard'));
    document.getElementById('sidebar').hidden = true;
} else {

}