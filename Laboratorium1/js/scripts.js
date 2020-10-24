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
var button = document.getElementById("button1");
button.addEventListener("click", function() {
    var y = document.getElementById("hideImage");
        if(y.style.display === "none"){
            y.style.display = "block";
            button.style.backgroundColor = "#666699";
        }
        else{
            y.style.display = "none";
            button.style.backgroundColor = "#8585ad";
        }
});
