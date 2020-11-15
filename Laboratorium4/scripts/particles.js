/*tablica z naszymi obiektami składającymi się na ogon dymu*/
const particleArray = [];

class Particle {
    constructor(){
        /*x i y są równe pozycji ptaszka*/
        this.x = bird.x;
        this.y = bird.y;
        /*rozmiar jest losową wartością między 3 a 10*/
        this.size = Math.random() * 7 + 3;
        /*prędkość będzie losową wartością między 0.5 a -0.5*/
        this.speedY = (Math.random() * 1) - 0.5;
        /*hue, które się zwiększa z każdą kolejną ramką*, 
        saturacja, jasność, alpha czyli transparentność*/
        this.color = 'hsla(' + hue + ',14%, 47%, 0.7)';
    }
    /*oblicza pozycje dla każdej ramki animacji*/
    update(){
        /*będzie poruszać się w lewo*/
        this.x -= gameSpeed;
        /*będzie poruszać się "ślizgać" w górę i w dół*/
        this.y += this.speedY;
    }
    /*rysowanie*/
    draw(){
        /*kolor wypełnienia równy this.color*/
        ctx.fillStyle = this.color;
        /*beginPath() - uruchamia nową świężkę*/
        ctx.beginPath();
        /*arc() - tworzy okrągły łuk ze środkiem w (x, y) o podanym promieniu
        radius, zaczyna się na startAngle, kończy na endAngle i porusza się w kierunku podanym
        w anticlockwise (domysle zgodnie z ruchem wskazowek)
        ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);*/
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        /*wypełnia kolorem z fillStyle*/
        ctx.fill();
    }
}

function handleParticles(){
    /*unshift() - dodaje element na początek tablicy i zwraca jej nową długość*/
    /*dodajemy do niej nowy element klasy Particle z wartościami zdefiniowanymi
    w konstruktorze i metodami tej klasy*/
    particleArray.unshift(new Particle);
    for (let i = 0; i < particleArray.length; i++){
        /*dla każdego elemetu particle wywolujemy funkcje update(), która
        oblicza nam pozycję*/
        particleArray[i].update();
        /*wywolujemy też funkcję draw, która narysuje nam obiekt*/
        particleArray[i].draw();
    }
    /*nie chcemy by tablica rosła w nieskończonośc, bo wywoła to problemy z wydajnością*/
     /*musimy więc dodać jakiś warunek, który sprawi, że tablica będzię się co jakiś czas
     redukować, np jeśli jest większa niż 200 to usuniemy 20*/
     if(particleArray.length > 200){
         /*usuwamy tworząc pętle for, ktora przejdzie 20 razy i za każdym
         razem wywołana zostanie metoda pop, która usuwa ostatni element tablicy i zmienia jej
         długość*/
         for(let j = 0; j < 20; j++){
            particleArray.pop(particleArray[j]);
         }
     }
}