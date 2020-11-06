var button1 = document.getElementById("btn");
button1.addEventListener("click", function() {
    let myText = document.getElementById("txt");
    if(myText.style.display === "none") {
        myText.style.display = "block";
        button1.style.backgroundColor = '#b3cce6';
    } else {
        myText.style.display = "none";
        button1.style.backgroundColor ='#d9e6f2';
    }
})

/*kiedy zmieniany jest rozmiar strony wyświetlana jest random*/
window.addEventListener("resize", function() {
    document.getElementById("txt2").innerHTML=Math.random();
})

document.addEventListener("mousemove", function(event){
    let myText = document.getElementById("txt3");
    var x = event.clientX;
    var y = event.clientY;
    var xy = "X: " + x + ", Y: " + y;
    myText.innerHTML = xy;
})
document.addEventListener("keypress", function(event) {
    let cd = event.code;
    document.getElementById("txt4").innerHTML = cd;
})

var input1 = document.getElementById("inp");
input1.addEventListener("input", fInput);
function fInput(){
    let x = input1.value;
    document.getElementById("txt6").innerHTML = "Wpisano: " + x;
}
var button2 = document.getElementById("btn2");
button2.addEventListener("click",remEv);
function remEv() {
    input1.removeEventListener("input", fInput);
}
document.addEventListener("dblclick", function(){
    if(document.body.style.backgroundColor === "mistyrose") {
        document.body.style.backgroundColor='#ecf2f9';
    } else {
        document.body.style.backgroundColor = "mistyrose";
    }   
})

var myBlock = document.getElementById("bloc");
myBlock.addEventListener("wheel", function(){
    myBlock.style.fontSize="35px";
})

