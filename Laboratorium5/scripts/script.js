//Asynchroniczność oznacza wykonywanie jakichś operacji jakby w tle, bez blokowania głównego wątku aplikacji
//W procesie asynchronicznym wszystkie operacje są wykonywane kolejno jedna po drugiej w jednym wątku, jednak możemy
//oczekiwać na zakończenie operacji asynchronicznej bez długotrwałego blokowania tego wątku

//funkcja do wyświetlania odp
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
            reject("!!!!!! Nie ma artysty o takim ID");
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
    letsCalculate(2, 2)
        .then(data => console.log("------ Suma: " + data))
        .catch(error => console.log("------ Błąd!!!!", error))
        .finally(() => console.log("------ Koniec przykładu"))
});

//Zadanie 2 - tworzenie nowego obiektu
function newObject(x,y){
    return ({"title": x, "genre": y});
};
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
            reject("!!!!!! Nie ma artysty o takim ID");
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
    makeNewObject(2, 2)
        .then(data => console.log("------ Nowy obiekt: ", data))
        .catch(error => console.log("------ Błąd!!!!", error))
        .finally(() => console.log("------ Koniec przykładu"))
});

//3. async/await
//Deklaracja funkcji async definiuje funkcję asynchroniczną, która zwraca obiekt AsyncFunction.
//Funkcja asynchroniczna to funkcja, która działa asynchroniczne poprzez zdarzenie pętli używając bezwarunkowego Promise do zwrócenia wyniku.
//Funkcja async może zawierać wyrażenie await, które wstrzymuje wywołanie funkcji asynchronicznej i czeka na przekazaną 
//deklarację Promise i wtedy wznawia wywołanie funkcji async oraz interpretuje jako wartość rozwiązaną.
//Słowo async postawione przed funkcją sprawia, że dana funkcja zawsze zwraca obietnicę.
//Słowo kluczowe await, sprawia, że JavaScript poczeka na wykonanie danej obietnicy (wykonywania asynchronicznych operacji) i zwrócenia przez nią wyniku
//Słowa await możemy używać tylko wewnątrz funkcji poprzedzonej słowem async!!!!!

//Zadanie 1 - suma ale z async tylko dla artysty1
function letsCalculateAsync(id, x, y) {
    return new Promise((resolve,reject) => {
        //dodatkowe zabezpieczenie
        if(id === 1){
            console.log("------ ID albumu: " + x);
            console.log("------ Długość piosenki: " + y);
            const sum = x+y;
            resolve(sum);
        } else {
            reject("!!!!!! Nie ma artysty o takim ID");
        }
    })
};
async function getValuesAsync(id, nr,a,s){
    try {
        //przerwanie
        const response = await fetch("https://my-json-server.typicode.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/artists/1");
        if (response.status === 200 && a >=0 && a <=1 && s >=0 && s<=4) {
            //przerwanie
            let jsonObj = await response.json();
            let albumID = jsonObj.albums[a].id;
            let length = jsonObj.albums[a].songs[s].length;
            console.log("---- Przykład " + nr +":");
            //przerwanie
            const data = await letsCalculateAsync(id,albumID,length);
            console.log("------ Suma: " + data);
        } else {
            if(a < 0 || s < 0 || a > 1 || s > 4) {
                console.log("!!!!!! Nie ma takiej piosenki lub albumu");
            } else {
                console.log("!!!!!! Błąd: ", response.status, response.statusText);
            }
        }
    } catch(error) {
        //nie łapie erroru typu not found, bo to też odpowiedź dla niego
        console.log("Błąd!");
    } finally {
        console.log("------ Koniec przykładu");
    }
};
let btn5 = document.getElementById("btn5");
btn5.addEventListener("click", function(){
    //przykład1
    getValuesAsync(1,1, 0, 3);
    //przykład2
    getValuesAsync(1,2, 1, 2);
})

//Zadanie 2 - nowy object z async, tylko dla artysty 2
function makeObjectAsync(id, x, y) {
    return new Promise((resolve,reject) => {
        //dodatkowe zabezpieczenie
        if(id === 2){
            const obj = {"title": x, "genre": y};
            console.log("------ Tytuł utworu: " + x);
            console.log("------ Gatunek muzyczny: " + y);
            resolve(obj);
        } else {
            reject("!!!!!! Nie ma artysty o takim ID");
        }
    })
};
//w tej funkcji mamy już zabezpieczenie, że niemożliwe jest szukanie artysty o wiekszym id niż dostępne, bo nie ma takiego adresu url, więc zgłaszany jest błąd, który jest łapany
async function getObjectsAsync(id, nr, s){
    try {
        //przerwanie
        const response = await fetch("https://my-json-server.typicode.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/artists/2");
        if (response.status === 200 && s >=0 && s<=5) {
            //przerwanie
            let jsonObj = await response.json();
            let title = jsonObj.albums[0].songs[s].title;
            let genre = jsonObj.albums[0].genre;
            console.log("---- Przykład " + nr +":");
            //przerwanie
            const data = await makeObjectAsync(id,title,genre);
            console.log("------ Nowy obiekt: ", data);
        } else {
            if(s>5 || s<0){
                console.log("!!!!!! Nie ma takiej piosenki");
            } else {
                console.log("!!!!!! Błąd: ", response.status, response.statusText);
            }
        }
    } catch(error) {
        console.error(error);
    } finally {
        console.log("------ Koniec przykładu");
    }
};
let btn6 = document.getElementById("btn6");
btn6.addEventListener("click", function(){
    //przykład1
    getObjectsAsync(2,1,1);
    //przykład2
    getObjectsAsync(2,2,4);
});

//4. AJAX
//Ajax - Asynchronous JavaScript and XML, umożliwia załadowanie zewnętrznego pliku i dodanie jego zawartości do strony internetowej
//AJAX to sposób uzyskiwania dostępu do zewnętrznych plików ze strony internetowej, ale nie działa z plikami w Twoim systemie plików. 
//Pliki, do których uzyskujesz dostęp, muszą znajdować się w Internecie: innymi słowy, nie może to być plik file: //, 
//do którego uzyskujesz dostęp z własnego komputera. AJAX sprawia, że ​​nasza strona jest dynamiczna i pozwala nam odświeżać dane 
//na naszych stronach internetowych bez odświeżania strony. Sprawia, że ​​strony użytkownika są interaktywne i zapewnia użytkownikowi wygodniejsze wrażenia.
//Służy do opisania sposobu, w jaki używamy obiektu XMLHttpRequest do odświeżania części strony poprzez pobieranie danych z serwera za pośrednictwem 
//żądań HTTP i manipulowanie modelem DOM w celu odświeżenia danych
//Zadanie 1 - suma
function letsCalculateAJAX(id, nr){
    let url = `https://my-json-server.typicode.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/artists/${id}`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    //sukces 
    xhr.onload = function() {
        //jeśli status 200 to odpowiedz dobra
        if(xhr.status === 200) {
            let responseObj = xhr.response;
            let albumID = responseObj.albums[0].id;
            let length = responseObj.albums[0].songs[3].length;
            show(calculate(albumID,length), nr, "ID albumu: ", "Długość utworu: ", "Suma: ", albumID, length);
        } else {
            //jak nie 200 to coś poszło nie tak, np nie ma takiej strony internetowej
            console.log("Błąd: ", xhr.statusText);
        }
    }
    //on error nie zalicza HTTP errorów jako błąd ale odpowiedź z serwera, więc dodatkowo sprawdzam ifem wyżej
    //to sie wyswietli np gdy nie ma polaczenia z serwerem
    xhr.onerror = function() {
        console.log("Błąd!!!!!");
    }
    //send na koncu bo dalam ze polacenia asynchorniczne i inaczej sie nie da bo error
    xhr.send();
};
let btn7 = document.getElementById("btn7");
btn7.addEventListener("click", function(){
    //przykład1
    letsCalculateAJAX(1,1);
    //przykład2
    letsCalculateAJAX(2,2);
});

//Zadanie 2 - nowy obiekt
function makeNewObjectAJAX(id, nr){
    let url = `https://my-json-server.typicode.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/artists/${id}`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function() {
        if(xhr.status === 200) {
            let responseObj = xhr.response;
            let title = responseObj.albums[0].songs[4].title;
            let genre = responseObj.albums[0].genre;
            show("", nr, "Tytuł utworu: ", "Gatunek muzyczny: ", "Nowy obiekt: ", title, genre);
            console.log(newObject(title,genre));}
        else {
            console.log("Błąd!!!", xhr.status, xhr.statusText);
        }
    }
    xhr.onerror = function() {
        console.log("Błąd!!!!!");
    }
};
let btn8 = document.getElementById("btn8");
btn8.addEventListener("click", function(){
    //przykład1
    makeNewObjectAJAX(1,1);
    //przykład2
    makeNewObjectAJAX(2,2);
});

//5. metoda fetch
//Zadanie 1 - suma
function calculateFetch(id, nr){
    if(id > 0 && id < 3) {
        fetch(`https://my-json-server.typicode.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/artists/${id}`)
            .then(response => response.json())
            .then(response => {
                let albumID = response.albums[0].id;
                let length = response.albums[0].songs[3].length;
                show(calculate(albumID,length), nr, "ID albumu: ", "Długość utworu: ", "Suma: ", albumID, length);
            })
            .catch(error => console.log("Błąd!!! ", error))
    } else {
        console.log("!!!!!! Nie ma artysty o takim ID");
    }
}
let btn9 = document.getElementById("btn9");
btn9.addEventListener("click", function(){
    //przyklad1
    calculateFetch(1,1);
    //przyklad2
    calculateFetch(2,2);
})
//Zadanie 2 - nowy objekt
function makeNewObjectFetch(id, nr){
    if(id > 0 && id < 3) {
        fetch(`https://my-json-server.typicode.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/artists/${id}`)
            .then(response => response.json())
            .then(response => {
                let title = response.albums[0].songs[4].title;
                let genre = response.albums[0].genre;
                show("", nr, "Tytuł utworu: ", "Gatunek muzyczny: ", "Nowy obiekt: ", title, genre);
                console.log(newObject(title,genre));
            })
            .catch(error => console.log("Błąd!!! ", error))
    } else {
        console.log("!!!!!! Nie ma artysty o takim ID");
    }
}
let btn10 = document.getElementById("btn10");
btn10.addEventListener("click", function(){
    //przyklad1
    makeNewObjectFetch(1,1);
    //przyklad2
    makeNewObjectFetch(2,2);
})

//6. biblioteka axios
//Zadanie 1 - suma
function calculateAxios(id,nr){
    axios.get(`https://my-json-server.typicode.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/artists/${id}`)
    .then(function (response) {
        let albumID = response.data.albums[0].id;
        let length = response.data.albums[0].songs[3].length;
        show(calculate(albumID,length), nr, "ID albumu: ", "Długość utworu: ", "Suma: ", albumID, length);
    })
    .catch (function (error) {
        if(id > 3 || id <0){
            console.log("Nie ma artysty o takim ID");
        } else{
        console.log("Błąd!!! ", error);
        }
    })
}
let btn11 = document.getElementById("btn11");
btn11.addEventListener("click", function(){
    //przyklad1
    calculateAxios(1,1);
    //przyklad2
    calculateAxios(2,2);
})
//Zadanie 2 - object
function makeNewObjectAxios(id,nr){
    axios.get(`https://my-json-server.typicode.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/artists/${id}`)
    .then(function (response) {
        let title = response.data.albums[0].songs[4].title;
        let genre = response.data.albums[0].genre;
        show("", nr, "Tytuł utworu: ", "Gatunek muzyczny: ", "Nowy obiekt: ", title, genre);
        console.log(newObject(title,genre));
    })
    .catch (function (error) {
        if(id > 3 || id <0){
            console.log("Nie ma artysty o takim ID");
        } else{
        console.log("Błąd!!! ", error);
        }
    })
}
let btn12 = document.getElementById("btn12");
btn12.addEventListener("click", function(){
    //przyklad1
    makeNewObjectAxios(1,1);
    //przyklad2
    makeNewObjectAxios(2,2);
})

