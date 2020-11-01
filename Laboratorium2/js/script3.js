function updateWatch(){
    var timeNow = new Date();
    /*godziny >12 zamieniamy na takie z przedzialu 1-12, dzielimy przez 12 i mnożymy przez 360 bo 360 stopni + minuty, bo od nich
    też zależy pozycja godzinowej wskazowki 
    60 bo tyle minut w h, 30 bo 360/12 czyli wskazówka godzinowa jest przeswana o 0-29.999 stopni w zaleznosci od minuty */
    var h = ((timeNow.getHours()>12)?timeNow.getHours()-12:timeNow.getHours())/12*360+timeNow.getMinutes()/60*30;
    var m = timeNow.getMinutes()/60*360;
    var s = timeNow.getSeconds()/60*360;
    /*JQuery*/
    /*element o id hour, zmieniamy jego oryginalny styl (obracamy o h stopni), dopisek deg bo domyslnie w radianach jest css*/
    $("#hour").css("transform","rotate("+h+"deg)");
    $("#minute").css("transform","rotate("+m+"deg)");
    $("#sec").css("transform","rotate("+s+"deg)");
}
/*sprawdzamy czy cały DOM się załadował za pomocą ready, jeśli tak to wywołujemt funkcję po raz pierwszy
nastepnie ustawiamy timer, ktory wywoluje funkcje co sekunde*/
$(document).ready(function(){
    updateWatch();
    setInterval(updateWatch,1000);        
});