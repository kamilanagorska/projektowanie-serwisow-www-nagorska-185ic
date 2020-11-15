/*czcionka*/
WebFont.load({
    google: {
        families: ['Orbitron']
    }
});
/*nasz canvas*/
const canvas = document.getElementById('canvas1');
/*tworzy obiekt CanvasRenderignContext2D reprezentujący dwuwymiarowy kontekst renderowania*/
const ctx = canvas.getContext('2d');
/*wymiary*/
canvas.width = 600;
canvas.height = 400;
/*zmienne użyte w grze
wszystkie są typu let, bo ich wartosć będzie się często zmieniać 
podczas pracy gry */
/*będzie się zmieniać z true na false i na odwrót za każdym razem jak wciśniemy klawisz Space*/
let spacePressed = false;
/*będzie wykorzystane przez math.sin by nasza postać ruszała się płynnie w górę
i w dół kiedy pojawi się przeszkoda*/
let angle = 0;
/*pomoże zmieniać odcienie między czerownym, zielonym i niebieskim spektrum kolorów używając HLS*/
let hue = 0;
/*śledzi liczbę klatek dla naszej pętli animacji*/
let frame = 0;
/*rośnie za każdym razem jak uda nam się ominąć przeszkodę*/
let score = 0;
/*szybkość gry*/
let gameSpeed = 2;

/*tło*/
const background = new Image();
background.src = 'images/background.png';
/*mamy dwa tła obok siebie i będą one się przesuwać w lewo jak 
się poruszamy*/
const BG = {
    /*pozyzja na poziomej osi x dla pierwszego tła
    pojawia się od samego początku*/
    x1: 0,
    /*pozycja na poziomej osi x dla drugiego tła, zaczyna się
    dopiero na końcu canvas*/
    x2: canvas.width,
    /*pozycja pionowa, bo chcemy zawsze by zaczynało się tło od
    górnej krawedzi*/
    y: 0,
    /*szerokośc i wysokość oczywiście takie samo jak nasz canvas*/
    width: canvas.width,
    height: canvas.height
}
function handleBackground(){
    /*jeśli pierwsze tło całe zjedzie w lewo to znaczy, że jest za lewym
    bokiem canvas to szybko przenieśmy je i schowajny za prawym bokiem canvas
    dodanie gameSpeed powoduje, że nie będzie białej przestrzeni między tłami*/
    if(BG.x1 <= -BG.width + gameSpeed){
        BG.x1 = BG.width;
    }
    /*tło porusza się w lewo równo z szybkością gry*/
    else {
        BG.x1 -= gameSpeed;
    } 
    /*na takiej samej zasadzie co wyżej przenosimy tło nr 2*/
    if(BG.x2 <= -BG.width + gameSpeed) {
        BG.x2 = BG.width;
    } 
    /*poruszanie się tła z szybkością gry*/
    else {
        BG.x2 -= gameSpeed;
    }
    /*rysujemy obrazek tła nr 1
    drawImage() - rysuje zdjęcie na canvas
    drawImage(image, dx, dy, dWidth, dHeight), image to obrazek,
    (dx, dy) wspolrzedne no i dWidth i dHeight to wymiary obrazka*/
    ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height);
    /*rysowanie drugiego tła*/
    ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height);
}

function animate() {
    /*czyści canvas przed każdą ramką animacji
    clearRect() - ustawia piksele w prostokątnym obszarze na
    przezroczystą czerń (rgba(0,0,0,0)), narożnik prostokąta znajduje się
    w (x,y), a jego rozmiar podany jest przez szerokosc i wysokość)*/
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleBackground();
    /*wyświetlanie przeszkód przed wyświetlaniem postaci, by postać była
    na przeszkodach, a nie by one ją zakrywały*/
    handleObstacles();
    /*wyświetla ogonek dymu*/
    handleParticles();
    /*oblicza pozycja i szybkośc gracza*/
    bird.update();
    /*rysuje ptaszka*/
    bird.draw();
    ctx.font = "50px Orbitron";
    ctx.fillStyle = "#990000";
    ctx.fillText(score,450,70);
    /*wykrywa kolizje, jeśli kolizja ma miejsce to wykonywanie funkcji animate jest kończone, co
    powoduje zatrzymanie się gry*/
    if(handleColisions()) return;
    /*requestAnimationFrame informuję przeglądarkę o zamiarze wykonania
    animacji i żąda od przeglądarki wywołania określone funkcji w celu odświeżenia
    animacji przed następnym odmalowaniem
    przekazujemy metodzie tej naszą funkcję animate() co utworzy pętlę animacji*/
    /*funkcja wykonuje się i w środku ciągle w kółko wywołuje siebie jeszcze raz*/
    requestAnimationFrame(animate);
    /*zwiększamy wartośc angle za kazdym razem o 0.12, jest to szybkosc
    skakania, gdy postać spadnie, im większa tym szybciej*/
    angle+=0.12;
    /*wartośc odcienia ogonka będzię się zmieniać co ramkę*/
    hue++;
    /*zwiększa wartośc licznika ramek o jeden za każdym razem, gdy wywoływana jest
    funkcja animate*/
    frame++;
}
/*wywołanie naszej funkcji*/
animate();
/*kiedy wciśniemy spację to spacePressed zmienia się na true*/
window.addEventListener('keydown',function(e){
    if(e.code === "Space"){
        spacePressed = true;
    }
});
/*kiedy puścimy spację to spacePressed zmienia się na false*/
window.addEventListener('keyup',function(e){
    if(e.code === "Space"){
        spacePressed = false;
    }
    /*trochę polepsza pracę skrzydeł*/
    bird.frameX = 0;
});

/*kolizje*/
const bang = new Image();
bang.src = 'images/bang.png';
function handleColisions(){
    /*pętla po całej tablicy z przeszkodami*/
    for(let i = 0; i < obstaclesArray.length; i++){
        if(bird.x < obstaclesArray[i].x + obstaclesArray[i].width && 
            bird.x + bird.width > obstaclesArray[i].x &&
            /*kolizja z top przeszkodą*/
            ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) || 
            /*kolizja z bottom przeszkodą*/
            (bird.y > canvas.height - obstaclesArray[i].bottom &&
                bird.y + bird.height < canvas.height))){
                    /*jeśli kolizja została wykrywa to:
                    drawImage() - rysuje zdjęcie na canvas
                    drawImage(image, dx, dy, dWidth, dHeight), image to obrazek,
                    (dx, dy) wspolrzedne no i dWidth i dHeight to wymiary obrazka*/
                    ctx.drawImage(bang, bird.x, bird.y, 50, 50);
                    /*czcionka i rozmiar tekstu*/
                    ctx.font = "25px Orbitron";
                    /*kolor tekstu*/
                    ctx.fillStyle = "#990000";
                    /*fillText() - rysuje tekst o określonych wartościach i kolorze określonym w fillStyle
                    fillText(text, x, y [, maxWidth]) - text, (x,y) to współrzędne punktu gdzie zacznięte
                    zostanie rysuwanie (w px)*/
                    ctx.fillText("Game Over, your score is " + score, 120, canvas.height/2 - 10);
                    /*byśmy mogli sprawdzić z zewnątrz, że kolizja miała miejsce*/
                    return true;
                }
    }
}

