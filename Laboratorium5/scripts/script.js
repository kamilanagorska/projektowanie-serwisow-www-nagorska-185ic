//Asynchroniczność oznacza wykonywanie jakichś operacji jakby w tle, bez blokowania głównego wątku aplikacji
//W procesie asynchronicznym wszystkie operacje są wykonywane kolejno jedna po drugiej w jednym wątku, jednak możemy
//oczekiwać na zakończenie operacji asynchronicznej bez długotrwałego blokowania tego wątku

//funkcja do wyświetlania odp w punkcie 1.
function show(respond, nr, tx1, tx2, tx3, v1, v2) {
    console.log("---- Przykład " + nr + ":");
    console.log("------ " + tx1 + v1);
    console.log("------ " + tx2 + v2);
    console.log("------ " + tx3 + respond);
};

//1. Funkcja zwrotna callback
//Dodałam mojego JSONa na "server", sam plik znajduje się bezpośrednio w moim repozytorium projektowanie-serwisow-www-nagorska pod nazwą db.json
//Zadanie 1 - callback1 to funkcja zwrotna, tylko pierwszy artysta
function callback1(data) {
    console.log("-- Zadanie 1:");
    //przykład2
    let y1 = data.albums[0].year;
    let y2 = data.albums[1].songs[3].length;
    const sum = y2 + y1;
    show(sum, "1","Rok wydania Kiss Me, Kiss Me, Kiss Me: ", "Długość piosenki LoveSong z albumu Desintegration: ", "Suma: ", y1, y2);
    //przyklad2
    let y3 = data.id;
    let y4 = data.albums[0].songs[4].id;
    const dif = y3 - y4;
    show(dif, "2", "ID artysty: ", "ID piosenki Why Can't I Be You?: ", "Różnica: ", y3, y4);
}
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function(){
    $.getJSON("https://my-json-server.typicode.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/artists/1", callback1);
});

//Zadanie 2 - callback2 to funkcja zwrotna, tylko dla drugiego artysty
function callback2(data) {
    console.log("-- Zadanie 2:");
     //przykład1
     const x1 = data.artist;
     const x2 = data.albums[0].songs[1].title;
     const text1 = `Zespół ${x1} nagrał piosenkę ${x2}`;
     show(text1, "1", "Tekst 1: ", "Tekst 2: ", "Nowy łańcuch znakowy: ", x1, x2);
     //przykład2
     const x3 = data.albums[0].genre;
     const x4 = data.albums[0].songs[4].title;
     const text2 = `Piosenka ${x4} reprezentuje gatunek muzyczny zwany ${x3}`;
     show(text2, "2", "Tekst 1: ", "Tekst 2: ", "Nowy łańcuch znakowy: ", x3, x4);
}
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function(){
    $.getJSON("https://my-json-server.typicode.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/artists/2", callback2);
});


//2. obiekt Promise(resolve, reject) z metodami then(), catch() i finally() + fetch

//Promise - Dzięki nim możemy wykonać jakiś kod, a następnie odpowiednio zareagować na jego wykonanie
//2 etapy:
//Po pierwsze tworzymy obiekt Promise, w którym wykonujemy jakieś asynchroniczne operacje (np. ściągamy dane z serwera, czytamy plik) i zwracamy za pomocą jednej z dwóch funkcji.
//Po drugie reagujemy na zwrócone przez ten obiekt dane (konsumujemy je)
//resolve(data) -> then (gdy sukces)
//reject("error") -> catch (gdy porażka)
//finally() - odpalana jest po zakończeniu Promise, bez względu czy zakończyło się powodzeniem czy nie
//Fetch domyślnie obsługuje obietnie, Metoda fetch przyjmuje dwa parametry. Pierwszy określa adres 
//pożądanego zasobu, a drugi, opcjonalny, pozwala zdefiniować różne dodatkowe parametry, jak nagłówki, dane przekazywane jako body do zapytania itp
//Jeżeli pominiemy dodatkowe opcje, domyślnie będzie wykonywane połączenie typu GET, które będzie służyć do pobrania danych.
//zwraca obietnicę, która w przypadku rozwiązania pozytywnego zawiera dane zwrócone z serwera

//Zadanie 1 - wybrane działanie na liczbach
//funkcja licząca sumę
function calculate(x,y){
    return x+y;
};
function letsCalculate(id, nr) {
    return new Promise((resolve, reject) => {
        if(id > 0 && id < 3) {
            fetch(`https://my-json-server.typicode.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/artists/${id}`)
                .then(response => response.json())
                .then(response => {
                    let albumID = response.albums[0].id;
                    let length = response.albums[0].songs[3].length;
                    console.log("---- Przykład " + nr +":");
                    console.log("------ ID albumu: " + albumID);
                    console.log("------ Długość piosenki: " + length);
                    resolve(calculate(albumID,length));
                })
        } else {
            reject("Nie ma artysty o takim ID");
        }
    })
};
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function(){
    //przykład1 - dla artysty 1
    letsCalculate(1, 1)
        .then(data => console.log("------ Suma: " + data))
        .catch(error => console.log("------ Błąd!!!!", error))
        .finally(() => console.log("------ Koniec przykładu"))
    //przykład2 - dla artysty 2
    letsCalculate(1, 2)
        .then(data => console.log("------ Suma: " + data))
        .catch(error => console.log("------ Błąd!!!!", error))
        .finally(() => console.log("------ Koniec przykładu"))
})

//Zadanie 2 - tworzenie nowego obiektu
function newObject(x,y){
    return ({"title": x, "genre": y});
}
function makeNewObject(id, nr) {
    return new Promise((resolve, reject) => {
        if(id > 0 && id < 3) {
            fetch(`https://my-json-server.typicode.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/artists/${id}`)
                .then(response => response.json())
                .then(response => {
                    let title = response.albums[0].songs[4].title;
                    let genre = response.albums[0].genre;
                    console.log("---- Przykład " + nr +":");
                    console.log("------ Tytuł utworu: " + title);
                    console.log("------ Gatunek muzyczny: " + genre);
                    resolve(newObject(title,genre));
                })
        } else {
            reject("Nie ma artysty o takim ID");
        }
    })
};
let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function(){
    //przykład1 - dla artysty 1
    makeNewObject(1, 1)
        .then(data => console.log("------ Nowy obiekt: ", data))
        .catch(error => console.log("------ Błąd!!!!", error))
        .finally(() => console.log("------ Koniec przykładu"))
    //przykład2 - dla artysty 2
    makeNewObject(1, 2)
        .then(data => console.log("------ Nowy obiekt: ", data))
        .catch(error => console.log("------ Błąd!!!!", error))
        .finally(() => console.log("------ Koniec przykładu"))
});


