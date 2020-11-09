"use strict";
var exText = "Dowolny tekst";
var exTab = [20,22,23,24];
var first = false;
var second = 66;
var imie = "Kamila";
var miesiac = "Styczen";
const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
var znakPodzialu = "|";
var arrayNames = ["Ania" , "Marcin" , "Bartek" , "Piotr", "Kamila"];
const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Beatczak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Betata Lecka",
    "Katarzyna Melecka"
]

console.info("Tekst: " + exText);
console.info(zadanie1(exText));
console.info("Tablica: " + exTab);
console.info("Suma tablicy: " + zadanie2(exTab));
console.info("Zmiksowana wielkosc liter: " + zadanie3(exText));
console.info("Pierwszy atrybut: " + first);
console.info("Drugi atrybut: " + second);
console.info("Iloczyn: " + zadanie4(first,second));
console.info("Imie: " + imie);
console.info("Miesiac: " + miesiac);
console.info(zadanie5(imie,miesiac));
console.info("Tekst: " + str);
console.info("Znak podziału: " +znakPodzialu)
console.info("Nowy tekst: " + zadanie6(str,znakPodzialu));
console.info("Tablica imion: " + arrayNames);
console.info("Duże litery: " + zadanie7a(arrayNames));
console.info("Zmienna wielkość liter: " + zadanie7b(arrayNames));
console.info("Imie: " + imie);
console.info("Czy żeńskie? " + checkFemale(imie));
console.info("Ile kobiet? " + countWomanInTable(users));

function zadanie1(myText) {
    /*usuwa " " by wyliczyć tylko ilośc liter*/
    myText = myText.split(" ").join("");
    return "Liczba liter: " + myText.length;
}

function zadanie2(myTab) {
    /*redukuje tablice zaczynając od początku (odejmuje liczby)*/
    /*doprowadza tablicę do pojedynczej wartości*/
    /*reduce(tu dodajemy do siebie kolejne wartosci,pierwszy element (indeks))*/
    let sum = myTab.reduce(function(a,b) {
        return a+b;
    }, 0)
    return sum;
}

function zadanie3(myText) {
    let mixText = "";
    for (let i = 0; i<myText.length; i++) {
        /*math.random zwraca liczbę od 0 (włącznie) do 1 (bez 1)*/
        /*dlatego jeśli >0.5 to mała literka, jak mniejsze od 0.5 to duża*/
        if(Math.random() > 0.5) {
            mixText += myText.charAt(i).toLowerCase();
        } else {
            mixText += myText.charAt(i).toUpperCase();
        }
    }
    return mixText;
}

function zadanie4(f, s) {
    if(typeof(s) == "number" && typeof(f) == "number") {
        return f*s;
    } else {
        return false;
    }
}

function zadanie5(i, m) {
    m =  m.toLowerCase();
    let result;
    switch(m) {
        case "grudzien":
        case "styczen":
        case "luty":
            result = i + " jezdzi na sankach";
            break;
        case "marzec":
        case "kwiecien":
        case "maj":
            result = i + " chodzi po kaluzach";
            break;
        case "czerwiec":
        case "lipiec":
        case "sierpien":
            result = i + " sie opala";
            break;
        case "wrzesien":
        case "pazdziernik":
        case "listopad":
            result = i + " zbiera liscie";
            break;
        default:
            result = i + " uczy sie JS";
    }
    return result;
}

function zadanie6(myStr,znak) {
    let myArray = myStr.split(znak);
    myArray.sort();
    let newText = myArray.join(znak);
    return newText;
}

function zadanie7a(myTab) {
    let newTab =[];
    for(let i = 0; i < myTab.length; i++) {
        newTab[i] = myTab[i].toUpperCase();
    }
    return newTab;
}

function zadanie7b(myTab) {
    let newTab = [];
    /*pętla po wszyskich imionach*/
    for(let i=0; i < myTab.length; i++){
        /*pętla po wszystkich literkach*/
        newTab[i]="";
        for(let j = 0; j < myTab[i].length; j++) {
            if(Math.random() > 0.5) {
                newTab[i] += myTab[i].charAt(j).toUpperCase();   
            } else {
                newTab[i] += myTab[i].charAt(j).toLowerCase();
            }
        }
    }
    return newTab;
}

function checkFemale(name) {
    var lastCh = name.slice(-1);
    if(lastCh == "a") {
        return true;
    } else {
        return false;
    }
}

function countWomanInTable(arr) {
    var newArr = [];
    var count = 0;
    for(let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i].split(" ",1);
    }
    for(let i = 0; i < newArr.length; i++) {
        if(checkFemale(newArr[i].toString()) == true) {
            count ++;
        }
    }
    return count;
}