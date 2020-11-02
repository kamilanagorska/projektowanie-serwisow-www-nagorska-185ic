showURL();
count();
function newButton() {
    "use strict";
    var newBt = document.createElement("button");
    newBt.classList.add("btn");
    newBt.classList.add("btn-outline-warning");
    newBt.innerHTML = "Nowy Guzik";
    document.body.appendChild(newBt);
}
function showURL() {
    var doc = document.URL;
    document.getElementById("urlDoc").innerHTML = doc;
}
function count() {
    var divs = document.getElementsByTagName("div");
    document.getElementById("count").innerHTML = "Ile jest elementów DIV na tej stronie? " + divs.length;
}
function changeBtn(button) {
    if(button.innerHTML=== "Wow, zmieniono tekst!")
    {
        button.innerHTML = "Naciśnij, by zmienić napis na guziku";
    }
    else {
        button.innerHTML="Wow, zmieniono tekst!";
    }
}
var button1 = document.getElementById("button1");
button1.addEventListener("click", function() {
    "use strict";
    var y = document.getElementById("hideImage");
        if(y.style.display === "none"){
            y.style.display = "block";
        }
        else{
            y.style.display = "none";
        }
});  
var inputHd = document.getElementsByTagName("input")[0];
document.getElementsByTagName("input")[0].addEventListener("copy",copied);
function copied() {
  inputHd.style.display="none";
}