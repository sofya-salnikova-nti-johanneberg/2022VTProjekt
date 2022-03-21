// Denna fil skall innehålla JavaScript (JS)
var x = 0;
function openMenu() {
    if (x == 0) {
        sideMenuOpen();
        burgerbtnOn();
        window.setTimeout(itemContShow, 300);
        x= 1;
    } else {
        itemContInvi();
        window.setTimeout(sideMenuClose, 300);
        window.setTimeout(burgerbtnOff, 300);
        x = 0;
    }
}

function sideMenuOpen() {
    document.getElementById("sideMenu").classList.add("sidemenuwidth");
}

function sideMenuClose() {
    document.getElementById("sideMenu").classList.remove("sidemenuwidth");
}

function burgerbtnOn() {
    document.getElementById("burgerbtn").setAttribute("class", "blueborder");
}

function burgerbtnOff() {
    document.getElementById("burgerbtn").setAttribute("class", "blackborder");
}

function itemContShow() {
    document.getElementById("item-container").style.opacity = "1"
}

function itemContInvi() {
    document.getElementById("item-container").style.opacity = "0"
}