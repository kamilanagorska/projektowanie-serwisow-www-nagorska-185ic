function userText() {
    var uText = document.getElementById("formGroupExampleInput").value;
    document.getElementById("input").innerHTML = uText;
}
function changeBg() {
    var nBg = document.getElementsByClassName("d-inline-block")[0];
    if(nBg.style.backgroundColor == "floralwhite") {
        nBg.style.backgroundColor = "aliceblue";
    }
    else {
        nBg.style.backgroundColor = "floralwhite";
    }
}
function changeHd() {
    "use strict";
    var head = document.getElementsByClassName("d-inline-block")[0];
    if(head.style.color === "deeppink") {
        head.style.color = "black";
    }
    else {
        head.style.color = "deeppink";
    }
}
function changeTx() {
    var tex = document.getElementById("not");
    if(tex.style.fontSize=="30px")
    {
        tex.style.fontSize="16px";
    }
    else {
        tex.style.fontSize="30px";
    }
}