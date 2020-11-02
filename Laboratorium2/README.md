### Laboratorium 2
Wykorzystanie Java Script (vanilla, jQuery lub inny) do wyświeltlania, modyfikowania, tworzenia (itp.) elementów strony związanych z HTML i CSS.
Do zrobienia tej strony użyłam Bootstrapa. W niektórych funkcjach użyłam "use strict".

Moja strona składa się ze strony głównej i sześciu podstron:
- dzień/noc
- zegar
- kalkulator
- notatnik
- zdjęcia
- inne.

#### Strona główna
![glowna](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/glowna.png?raw=true)

Mamy tutaj powitanie, które zmienia się w zależności od pory dnia (od godziny 18 wyświetla "Dobry wieczór", od 1 "Dzień dobry") i datę. Poniżej znajduje się guzik, który liczy ilość kliknięć.

![guzik](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/guzik.png?raw=true)

Niżej widać kwiatka, gdy na niego najedziemy poniżej pojawia się kolejny kwiatek i tak za każdym najazdem. Nad pierwszym kwiatkiem znajduje się licznik, który wskazuje łączną ilość kwiatków na stronie.

![kwiatek](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/kwiatek.png?raw=true)

Dodatkowo zmieniłam kursor na całej stronie na "pointer".

#### Dzień/Noc
![dziennoc](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/dziennoc.png?raw=true)

Znajdują się tutaj dwa guziki. W zależności który zostanie wciśnięty, taki obrazek i tło zobaczymy. Wciśnięcie "Dzień" powoduje wyświetlenie słońca i niebieskiego tła. Wciśnięcie "Noc" sprawia, że tło jet czarne, a wyświetlony zostaje księżyc. 

![noc](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/noc.png?raw=true)

Niżej mamy tekst. Jeśli klikniemy na niego dwa razy, ukaże się cytat nawiązujący do wybranej wyżej pory.

![cytatdzien](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/cytatdzien.png?raw=true)
![cytatnoc](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/cytatnoc.png?raw=true)

Na końcu mamy obrazek, który powiększa się, gdy najedzemy na niego.

![nocprzed](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/nocprzed.png?raw=true)
![nocpo](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/nocpo.png?raw=true)

#### Zegar
![zegar](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/zegar.png?raw=true)

Podstrona z zegarem. Pokazuje on aktualną godzinę. Zrobiony został za pomocą JQuery i CSS. W CSS'ie stworzyłam strzałki, każda ma swój kolor, rozmiar i centrum rotacji. Za pomocą JQuery pobierany jest aktualny czas i wyliczane są stopnie, o które należy obracać strzałki. Następnie strzałki są obracane (transform, rotate) o określone stopnie. Funkcja ta jest powtarzana co sekundę. 

#### Kalkulator
![kalkulator](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/kalkulator.png?raw=true)

Prosty kalkulator zrobiony za pomocą Java Script. Wszystkie guziki zapisane są pod jedną zmienną i dla każdego dodawany eventListener. Gdy guzik zostanie kliknięty, sprawdzane jest, czy był to guzik z wartościami: =, C, ⌫, %, bo te wymagają innych akcji niż pozostałe. Obliczanie wykonywane jest za pomocą eval, nie jest to zalecana metoda, jednak do tak prostego kalkulatora, z którego i tak nikt nie będzie korzystać, może być. 

#### Notatnik 
![notatnik](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/notatnik.png?raw=true)

Podstrona z notatnikiem. Można tu umieścić swoją wiadomość, a zostanie ona wypisana. Dodatkowo można zmienić tło notatki, kolor tekstu i rozmiar nagłówka.

![notatka1](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/notatka1.png?raw=true)
![notatka2](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/notatka2.png?raw=true)

#### Zdjęcia
![zdjecia](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/zdjecia.png?raw=true)

Galeria zdjęć ze strony https://picsum.photos/. Zdjęcia są dodane do HTML'a za pomocą Java Script. Wyświetlane są one w małych okienkach, a po naciśnięciu konretnego zdjęcia wyświetla się one w powiększeniu (za pomocą Modal).

![zdjecie](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/zdjecie.png?raw=true)

#### Inne 
![inne](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/inne.png?raw=true)

Strona z pozostałymi przykładami zastosowania JS. Mamy tu przycisk, który po naciśnięciu sprawia, że utworzony zostaje nowy przycisk i doklejany jest on do końca body. 
![przycisk](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/przycisk.png?raw=true)

Za pomocą JS wyświetlany jest tutaj URL dokumentu, a poniżej ilość elementów div użytych na stronie. 

![url](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/url.png?raw=true)

Niżej są dwa guziki, jeden zmienia swój tekst po naciśnięciu, a drugi wyświetla ukryte zdjęcie. Oba po ponownym naciśnięciu powodują powrót do stanu poprzedniego. 

![guziki](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/guziki.png?raw=true)

Na końcu znajduje się pole z tekstem, jeśli go skopiujemy całe pole zniknie. 

![form1](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium2/images/form1.png?raw=true)