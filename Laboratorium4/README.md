### Laboratorium 4
Flappy Bat - prosta gra przeglądarkowa inspirowana słynną grą Flappy Bird. Do napisania jej wykorzystane zostały jedynie Vanilla JavaScipt, HTML'a i troszkę CSS'a. 

W grze jesteśmy nietoperzem i próbujemy przelecieć uważnie między przeszkodami, uważając, by w nie nie uderzyć.

[!menu](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium4/images/1.png?raw=true)

Włączając grę ukazuje nam się strona startowa gry. Mamy tutaj nazwę gry, krótką instrukcję i guzik Start, który rozpoczyna rozgrywkę.
Sterowanie w grze odbywa się za pomocą klawisza Spacji lub Myszki, w zależności od upodobań gracza. Naciskając spację lub przycisk myszy (sterowanie działa dla prawego i lewego przycisku myszy, jednak lepiej używać lewego) nietoperz podnosi się do góry, gdy puszczamy klawisz bądź przycisk postać opada na dół. Nie da się jednak wypaść poza obszar "canvas" i spadnięcie nie powoduje przegranej. Niemożliwe jest również, by nietoperz "wyleciał" z obszaru gry, jest to zablokowane odpowiednią konstrukcją w kodzie.

[!game](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium4/images/2.png?raw=true)

Po drodze nietoperz napotyka przeszkody. Mamy dwa rodzaje przeszkód, górne i dolne. Przeszkody przechowywane są w tablicy, która co jakiś czas zmniejsza się, by ograniczyć jej rośnięcie w nieskończoność i przez to pogorszenie wydajności gry. Długość przeszkód jest losowo generowana, jednak zapewnione jest to, że nawet jeśli przeszkoda góra i dolna będą miały największą możliwą długość, nietoperz zmieści się między nimi, o ile umiejętnie nim posterujemy. Występowanie przeszkód jest uzależnione od ilości klatek. Nowa przeszkoda górna i dolna pojawia się co 100 klatek (dodawany jest nowy element do tablicy z przeszkodami).

Każde ominięcie przeszkody powoduje zdobycie jednego punktu. Łączna ilość punktów wyświetla się w górnym prawym rogu. Uderzenie w którąś z przeszkód podowuje koniec gry. Wyświetla nam się wtedy informacja o przegranej, nasz wynik i przycisk Play Again, który umożliwia rozpoczęcie rozgrywki od początku. Strona wtedy odświeża się i możemy zagrać ponownie. 

[!again](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium4/images/3.png?raw=true)

Kolizje z przeszkodą wykrywane są za pomocą odpowiedniego porównania własności nietoperza, przeszkód i obszaru gry. Np. by doszło do kolizji zmienna x nietoperza, czyli jego położenie w poziomie musi być mniejsze niż poziome położenie przeszkody + jej szerokość i jednocześnie poziome położenie nietoperza + jego szerokość muszą być większe od poziomej pozycji przeszkody. Oznacza to, że nietoperzowi nie udało się przejść za przeszkodę, więc znajduje się przed nią lub na/pod nią. Dodatkowe warunki porównujące położenie nietoperza w pionie z wysokościami przeszkód umożliwiają wykrycie kolizji w sytuacji, gdy nietoperz uderzył w spód górnej przeszkody lub w górę dolnej przeszkody.

Gdy nietoperz lata za nim pojawia się ogon z tęczowego dymu w przygaszonych odcieniach. Wykorzystany został tutaj model HSL. Kolory w tym modelu opisywane są za pomocą współrzędnych:
- H (Hue) czyli odcień
- S (Saturation) czyli nasycenie
- L (Lightness) czyli średnie światło białe.
Ogon zbudowany jest z kółek o losowych wielkościach. Wszystkie kółka przechowywane są w jednej tablicy, która z czasem zmniejsza się, by nie utracić na wydajności gry. Kolor określony został dzięki hsla(). Hsla() jest funkcją CSS, która prócz współrzędnych H, S, L do opisywania kolorów używa również A czyli Alpha, która odpowiada za przezroczystość koloru. S, L oraz A są stałe, a efek zmieniającyh się kolorów uzyskany został przez zmienną wartość H, która rośnie o 1 dla każdej nowej klatki animacji gry. 

Dodałam do gry również muzykę i efekt dźwiękowy, gdy uderzamy w przeszkodę. Są to darmowe pliki, które można wykorzystać do swoich prywatnych projektów. Tło i postać nietoperza są również darmowymi pobranymi z internetu plikami.
