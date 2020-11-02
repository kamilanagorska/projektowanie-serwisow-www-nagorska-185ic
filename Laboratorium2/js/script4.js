"use strict";
/*const-stala tylko do odczytu, nie mozna jej zmienić, przypisać do innego obiektu
ale ja bede zmieniac display.value i to juz nie jest const*/
const buttons = document.querySelectorAll("button.btn");
const display = document.querySelector(".form-control");
/*dla każdego guzika dodajemy eventlistener na click i gdy click to funkcja calculate*/
buttons.forEach(function(button) {
    button.addEventListener("click", calculate);   
});
/*wartosc kliknietego guzika*/
function calculate(event) {
    const clickedButtonValue = event.target.value;
    /*jeśli klikamy = to:*/
    if(clickedButtonValue === "=") {
        /*sprawdzamy czy wyswietlacz nie jest pusty jak tak to oblicz*/
        if(display.value !== '') {
            /*eval wykonuje działanie*/
            display.value = eval(display.value);
        }
    }
    /*jeśli klikneliśmy inny guzik, sprawdzamy czy to C*/
    else if (clickedButtonValue === "C") {
        /*jak C to wyczyść wszystko*/
        display.value='';
    }
    /*jeśli X to usuwamy ostani element*/
    else if (clickedButtonValue == "X") {
        display.value = display.value.substring(0,display.value.length-1);

    } /*jeśli % to najpierw wykonujemy to co mamy a potem liczymy %*/
    else if (clickedButtonValue == "/100") {   
        display.value=eval(display.value); 
        display.value=eval(display.value/100);
    }
    /*w innym przypadku zapisujemy klikniętą wartość na wyświetlaczu*/
    else {
        display.value += clickedButtonValue;
    }
}
