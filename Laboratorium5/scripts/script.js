let request = new XMLHttpRequest();
//otwieramy plik
request.open('GET', 'artists.json', true);
//funkcja zwrotna to taka, która zostaje wykonana, gdy jakaś inna funkcja zakończy działanie
//przekazywana jako parametr innej funkcji w celu późniejszego jej wywołania w tejże funkcji
function loadJSON1(callback){

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