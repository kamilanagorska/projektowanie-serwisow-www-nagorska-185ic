var myId = 0;
slides();

function slides() {
    var i;
    var x = document.getElementsByClassName("images");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myId++;
    if (myId > x.length) {myId = 1}
    x[myId-1].style.display = "block";
    setTimeout(slides, 5000);
}
