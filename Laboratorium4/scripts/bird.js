/*obrazek z postacią*/
const batSprite = new Image();
batSprite.src='images/bat.png';

/*klasa Bird, deklarujemy ją za pomocą słowa kluczowego class
constructor to szczegółowa metoda, który służy tworzeniu i inicjalizowaniu
obiektu zdefiniowanego słowem kluczowym klass
dozwolony jest tylko JEDEN CONSTRUCTOR w dane klasie*/
class Bird {
    constructor(){
        /*pozycja pozioma*/
        this.x = 150;
        /*pozycja pionowa*/
        this.y = 200;
        /*prędkość pionowa naszego ptaszka, jak szybko opada i poszura
        się w górę*/
        this.vy = 0;
        /*oryginalne szerokość i wysokość*/
        this.originalWidth = 401;
        this.originalHeight = 249;
        /*zeskalowane wymiary*/
        this.width = this.originalWidth/7;
        this.height = this.originalHeight/7;
        /* waga, która będzie ciągnąć ptaszka na dół*/
        this.weight = 1;
        /* wykorzystana do ruszania skrzydłami*/
        this.frameX = 0;
    }
    /*metoda update - oblicza pozycję i szybkość dla każdej ramki*/
    update(){
        /*math.sin, zwraca sinus danej liczby liczy wartośc między +1 a -1 i sprawia
        że nasza postać, gdy spadnie będzię się ruszać w górę i w dół*/
        let curve = Math.sin(angle) * 20;
        /*gracz zawsze musi pozostać w canvas, nie może spaść*/
        /* *3 troszkę podnosi tą postac, bez tego opadała by poniżej obszaru canvas*/
        if(this.y > canvas.height - (this.height * 3) + curve){
            this.y = canvas.height - (this.height * 3) + curve;
            /*dzięki temu postać spada na dół canvas, a nie wypada poza
            jego obszar*/
            this.vy = 0;
        }
        else {
            /*ptaszek będzie spadał, im dłużej tym szybciej
            ponieważ vy rośnie nieskończenie dla każdej ramki
            i w tym samym czasie vy jest dodawane do y czyli pozycji pionowej
            gracza i porusza się w dół*/
            this.vy += this.weight;
            this.vy *=0.9;
            this.y += this.vy;
        }
        /*postać nie może wylatywać z pola canvas*/
        if(this.y < 0 + this.height){
            this.y = 0 + this.height;
            /*dzięki temu natychmiast spada na dół po dojściu na samą górę i puszczeniu spacji*/
            this.vy = 0;
        }
        /*jeśli klawisz spacji jest wciśnięty to wywołaj flap, czyli latanie naszej postaci*/
        /* i jeśli this.y czyli pozycja pionowa postaci jest wieksza od wysokosci to postać będzie drgać*/
        if(spacePressed && this.y > this.height * 3){
            this.flap();
        }
    }
    /*metoda draw - rysuje postać*/
    draw(){
        /*mnoże razy 1.45 by dopasować bardziej obrazek do rozmiarów prostokąta, by uniknąć niewłaściwych kolizji dodatkowo przesuwam go troszkę 
        w lewo odejmując 13 i w górę odejmując 8*/
        /*drawImage() - rysuje obrazek
        */
        ctx.drawImage(batSprite, this.frameX * this.originalWidth, 0, this.originalWidth, this.originalHeight, this.x-13, this.y-8, this.width*1.45, this.height*1.45);
    }
    /*latanie*/
    flap(){
        /*za każdym razem jak ruszamy skrzydłami vy będzie się zmieniać*/
        this.vy -= 2;
        /*jeśli mamy ostatni obrazek to wracamy znowu do pierwszego*/
        if (this.frameX >= 5) {
            this.frameX = 0;
        }
        /*kolejny obrazek, ale tylko co drugą ramkę, by skrzydła
        troszkę wolniej machały*/
        else if(frame%2 === 0){
            this.frameX ++;
        }
    }
}
/*instancja klasy Bird, tworzymy element klasy jakby, konretnego ptaszak bird
ma on dostęp do wszyskich zdefiniowanych własności klasy, metod*/
const bird = new Bird();
