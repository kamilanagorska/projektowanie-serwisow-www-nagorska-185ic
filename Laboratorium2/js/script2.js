function clickDay() {
    document.getElementById("myImage").src="images/sun.png";
    let sky = document.getElementsByClassName("d-inline-block")[0];
    sky.style.backgroundColor="skyblue";
}
function clickNight() {
    document.getElementById("myImage").src="images/moon.png";
    let sky = document.getElementsByClassName("d-inline-block")[0];
    sky.style.backgroundColor="black";
}

