function loadJSON1(callback){
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'artists.json', true);
    //liczenie+ wyświetlanie
}
function callback1() {
    //branie wartości z JSONA i ich zwracanie?
}
let button1 = document.getElementById("bt1");
button1.addEventListener("click", function(){
    let p1 = document.getElementById("t1");
    if(p1.style.display=="none"){
        p1.style.display="block";
        //loadJSON1(callback1())  ????
    } else {
        p1.style.display="none";
    }

})