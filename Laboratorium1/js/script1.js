var myId = 0;
slides();
function slides() {
    var i;
    var x = document.getElementsByClassName("images");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none"; /*ukrywa obrazek*/
    }
    myId++;
    if (myId > x.length) {
        myId = 1;
    }
    x[myId-1].style.display = "block"; /*pokazuje*/
    setTimeout(slides, 5000); /*5 sekund*/
}
var button1 = document.getElementById("button1");
button1.addEventListener("click", function() {
    var y = document.getElementById("hideImage");
        if(y.style.display === "none"){
            y.style.display = "block";
            button1.style.backgroundColor = "#666699";
        }
        else{
            y.style.display = "none";
            button1.style.backgroundColor = "#8585ad";
        }
});  

