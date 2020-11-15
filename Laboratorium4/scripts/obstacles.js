/*tablica przeszkód*/
const obstaclesArray = [];

class Obstacle {
    constructor(){
        /*jeden konstruktor do robienia przeszkód na dole i u góry*/
        /*wysokośc górnej przeszkody, randomowa wartośc między 0
        a wysokością canvas podzieloną przez 3*/
        this.top = (Math.random() * canvas.height/3) + 20;
        /*wysokość dolnej przeszkody takie same rozmiary co top
        dzielimy wysokosc canvas na 3, by mieć pewność, że będzie miejsce do przejścia między
        górną przeszkodza, a dolną*/
        this.bottom = (Math.random() * canvas.height/3) + 20;
        /*x tuż za krawędzią canvas*/
        this.x = canvas.width;
        /*szerokość przeszkód*/
        this.width = 40;
        /*tęczowe przeszkody*/
        this.color = 'black';
        /*pomoże w liczeniu punktów, jeśli nie policzona to false*/
        this.counted = false;
    }
    /*rysowanie przeszkód*/
    draw(){
        /*kolor wypełnienia*/
        ctx.fillStyle = this.color;
        /*fillRect() - rysuje prostokąt i wypełnia go bieżącym stylem fillStyle
        (x,y,width,height) (x,y) miejsce rozpoczęcia rysowania, width i height rozmiar*/
        /*rysowanie przeszkody górnej*/
        ctx.fillRect(this.x, 0, this.width, this.top);
        /*rysowanie przeszkody dolnej*/
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
    }
    /*oblicznie pozycji przeszków + liczenie punktów*/
    update(){
        /*przesuwanie przeszków w lewo, przesuwa pixele o wartośc gameSpeed w lewo*/
        this.x -= gameSpeed;
        /*liczenie punktów jeśli jeszcze nie policzony i wspolrzedna x przeszkody
        jest mniejsza od wspolrzednej x postaci/ptaszka*/
        if(!this.counted && this.x < bird.x)
        {
            score++;
            this.counted = true;
        }
        /*rysowanie*/
        this.draw();
    }
}

function handleObstacles(){
    /*co 100 klatek tworzymy nowy
    czyli za każdym razem jak ilość klatek jest liczbą podzielną przez 100
    to tworzymy nową przeszkodę*/
    if(frame%100 === 0){
        /*unshift dodaje element na początek tablicy*/
        obstaclesArray.unshift(new Obstacle);
    }
    for(let i = 0; i< obstaclesArray.length; i++){
        /*wywolanie metody update dla każdego elementu tablicy z 
        przeszkodami, w metodzie update mamy wywołanie draw, więc nie trzeba
        wywoływać tego tutaj*/
        obstaclesArray[i].update();
    }
    /*oczywiście tak samo jak z ogonkiem dymu, nie chcemy by nasza tablica
    rosła w nieskończonośc, więc trzeba ją co jakiś czas zmniejszać
    więc dlatego, jeśli dlugosc jest wieksza od 20 to usuwamy jeden element*/
    if(obstaclesArray.length > 20){
        obstaclesArray.pop(obstaclesArray[0]);
    }
}