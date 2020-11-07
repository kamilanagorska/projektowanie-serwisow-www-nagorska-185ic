### Laboratorium 3
Moja strona składa się ze strony głównej z wykonanymi ćwiczeniami oraz ze strony z obsługą zdarzeń.

#### Strona główna - ćwiczenia
[glowna](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/glowna.png?raw=true)

- Ćwiczenie 1. 
Funkcja zwracająca liczbę liter tekstu (bez liczenia spacji). Do usunięcia spacji użyłam metod split() i join().
[cw1](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/cw1.png?raw=true)

- Ćwiczenie 2.
Funkcja sumująca tablicę. Do wykonania tego ćwiczenia użyłam reduce().
[cw2](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/cw2.png?raw=true)

- Ćwiczenie 3.
Funkcja zwracająca zmiksowaną wielkość liter. Dla każdej litery losowana jest pseudolosowa wartość za pomocą Math.random(), jeśli jest ona większa od 0.5 to literka pisana jest jako mała, jeśli jest inaczej to jako duża. Przykład dla tekstu z pierwszego ćwiczenia, czyli "Dowolny tekst".
[cw3](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/cw3.png?raw=true)

- Ćwiczenie 4.
Funkcja sprawdzająca, czy oba atrybuty są liczbami, jeśli tak to zwraca ona iloczyn tych liczb, jeśli nie to zwraca false. Sprawdzenie, czy atrubut jest liczbą dokonałam za pomocą typeof() == "number".
Przykład dla dwóch liczb:
[cw4a](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/cw4a.png?raw=true)
Przykład dla liczby i nie liczby:
[cw4b](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/cw4b.png?raw=true)

- Ćwiczenie 5.
Funkcja zwracająca odpowiedni tekst w zależności od podanego miesiąca. Wykorzystałam tu warunek wielokrotnego wyboru switch. Dla zabezpieczenia, gdyby ktoś wpisał miesiąc z dużej litery na samym początku zamieniam wielkość liter na małe. 
Przykład dla mojego imienia i miesiąca urodzin:
[cw5a](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/cw5a.png?raw=true)

- Ćwiczenie 6.
Funkcja przyjmująca dwa atrybuty (tekst, znak podziału). Dzieli ona tekst na części, z czego tworzona jest tablica. Tablica zostaje posortowana, a funkcja zwraca tekst ponownie rozdzielony znakiem podziału. Najpierw tekst rozdzielam za pomocą split(). Następnie sortuję go z użyciem sort(), a na koniec łączę go dzięki join().
Przykład:
[cw6](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/cw6.png?raw=true)

- Ćwiczenie 7.
Pierwsza funkcja zwracająca nową tablicę, w której imiona zapisane są dużymi literami. Wykorzystałam do tego toUpperCase(). Do tablicy z przykładu dopisałam na końcu swoje imię.
Przykład:
[cw7a](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/cw7a.png?raw=true)
Druga funkcja, która zwraca nową tablicę, w której imiona mają zmienną wielkość liter. Funkcja działa podobnie do tej z Ćwiczenia 3, jednak tutaj wykorzystać musiałam dwie pętle for, jedna zagnieżdżona w drugiej, by prócz przejścia wszystkich imion przejść również po wszystkich literach. 
Przykład dla tej samej tablicy co wyżej:
[cw7b](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/cw7b.png?raw=true)

- Ćwiczenie 8.
Funkcja checkFemale, która sprawdza, czy przekazane imię jest żeńskie. Jeśli tak to zwraca wartość true, jeśli nie to wartość false. Działa na zasadzie sprawdzania ostatniej literki imiona, zakładając, że żeńskie imiona w języku polskim kończą się na literę "a". Wykorzystałam do tego slice().
Przykład dla mojego imienia:
[cw8a](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/cw8a.png?raw=true)
Przykład dla imienia męskiego:
[cw8b](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/cw8b.png?raw=true)

- Ćwiczenie 9.
Funkcja countWomanInTable(), do której przekazana zostaje tablica użytkowników z ich imionami i nazwiskami. Funkcja liczy ile wśród nich jest kobiet. Najpierw z tablicy pobierane są imiona użytkowników i zapisywane w nowej tablicy za pomocą split(). Następnie dla każdego imienia wykonywana jest funkcja z Ćwiczenia 8. Jeśli funkcja ta zwraca wartość true, to wartość licznika jest zwiększana. Na końcu otrzymujemy ilość kobiet wśród użytkowników.
Przykład dla tablicy z polecenia:
[cw9](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/cw9png.png?raw=true)

#### Obsługa zdarzeń
[obsluga](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/obsluga.png?raw=true)

1. "click"
Gdy wciśniemy guzik pojawi się napis i guzik zmieni kolor. Po ponownym wciśnięciu napis znika. 
[1b](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/1b.png?raw=true)
[1a](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/1a.png?raw=true)

2. "resize"
Jeśli zmienimy rozmiar okna wyświeli się nam pseudolosowa wartość z przedziału [0,1).
[2a](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/2a.png?raw=true)
[2b](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/2b.png?raw=true)

3. "mousemove
Gdy myszka porusza się po obszarze strony wyświetlana jest jej pozycja dzięki clientX i clientY. 
[3a](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/3a.png?raw=true)
[3b](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/3b.png?raw=true)

4. "keypress"
Gdy wciskany zostaje klawisz wyświetlany jest jego "kod". 
[4a](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/4a.png?raw=true)
[4b](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/4b.png?raw=true)

5. "input"
Gdy wpisywane są dane do formularza, poniżej zostają one wyświetlone. Dzieje się to w czasie rzeczywistym. 
[5a](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/5a.png?raw=true)
[5b](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/5b.png?raw=true)
Dodatkowo użyłam tutaj removeEventListener(). Po wciśnięciu guzika obsługa zdarzenia zostaje usunięta. 
[5c](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/5c.png?raw=true)
Po wciśnięciu:
[5d](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/5d.png?raw=true)

6. "dblclick"
Po podwójnym kliknięciu w dowolnym miejcu w obszarze strony zostaje zmieniony kolor tła strony. Po ponownym podwójnym kliknięciu kolor wraca do stanu pierwotnego.
[6a](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/6a.png?raw=true)
[6b](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/6b.png?raw=true)

7. "wheel"
Gdy "zeskrolujemy" myszką w obszarze bloku z tekstem, czcionka zmieni swój rozmiar. 
[7a](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/7a.png?raw=true)
[7b](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/7b.png?raw=true)

8. "copy"
Po skopiowaniu tekstu zmienia on swój rozmiar i kolor. Po ponownym skopiowaniu wraca do stanu pierwotnego.
[8a](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/8a.png?raw=true)
[8b](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/8b.png?raw=true)
Dodatkowo ten Event Listener można też usunąć. Gdy najedziemy myszką na blok poniżej obsługa zdarzenia "copy" zostanie usunięta.
[8c](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/8c.png?raw=true)

9. "mousedown"
Gdy wciśniemy klawisz myszki na obszarze obrazka, zostanie on powiększony.
[9](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/9.png?raw=true)

10. "mouseup"
Po puszczeniu klawisza myszki obrazek powróci do rozmiaru pierwotnego.
[10](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium3/images/10.png?raw=true)