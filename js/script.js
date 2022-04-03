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
// TEST
var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 