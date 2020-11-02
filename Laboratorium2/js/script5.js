function userText() {
    var uText = document.getElementById("formGroupExampleInput").value;
    document.getElementById("input").innerHTML = "Twój tekst: " + uText;
}
function changeBg() {
    if(document.body.style.backgroundColor === "beige") {
        document.body.style.backgroundColor = "blanchedalmond";
    } else {
        document.body.style.backgroundColor = "beige";
    }
}
function changeHd() {
    var head = document.getElementsByClassName("display-4")[0];
    if(head.style.color === "red") {
        head.style.color = "black";
    }
    else {
        head.style.color = "red";
    }
}
function changeTx() {
    var tex = document.getElementById("textChange");
    if(tex.style.fontSize=="30px")
    {
        tex.style.fontSize="16px";
    }
    else {
        tex.style.fontSize="30px";
    }
}