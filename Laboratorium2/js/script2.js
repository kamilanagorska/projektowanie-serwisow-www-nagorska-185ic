"use strict";
var sky = document.getElementsByClassName("d-inline-block")[0];
function clickDay() {
    document.getElementById("myImage").src="images/sun.png";
    sky.style.backgroundColor="skyblue";
}
function clickNight() {
    document.getElementById("myImage").src="images/moon.png";
    sky.style.backgroundColor="black";
}
var textToClick = document.getElementById("doubleClick");
textToClick.addEventListener("dblclick", function() {
    if(sky.style.backgroundColor=="black"){
        document.getElementById("cytat").innerHTML ="Celuj w księżyc, bo nawet jeśli nie trafisz, będziesz między gwiazdami";
    }
    else {
        document.getElementById("cytat").innerHTML="Koniec końcem, zawsze po burzy wychodzi słońce";
    }
});
function bigger(x) {
    x.style.width = "70%";
}
function normal(x) {
    x.style.width = "50%";
}

