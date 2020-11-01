var dHello = document.getElementsByClassName("display-4")[0];
hello();

var timesClicked = 0;
function changeNumber(){
    timesClicked ++;
    document.getElementById("timesClicked").innerHTML = timesClicked;
   }
var numberFlowers = 1;
function newFlower(){
    var x = document.createElement("IMG");
    x.setAttribute("src","images/flower.png");
    x.setAttribute("height","60px");
    x.setAttribute("alt","flower");
    x.style.margin="3% 3%";
    document.body.appendChild(x);
    numberFlowers ++;
    document.getElementById("numberFlowers").innerHTML=numberFlowers;
   }

function hello() {
    var d = new Date();
    var h = d.getHours();
    if(h > 17) {
        dHello.innerHTML = "Dobry wieczór!";
    }
    else {
        dHello.innerHTML = "Dzień dobry!";
    }
}

