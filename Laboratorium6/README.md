### Laboratorium 6
Prosta aplikacja zrobiona za pomocą React'a.

#### Polecenie:
- tworzenie aplikacji za pomocą modułu ‘create-react-app’,
- tworzenie komponentów funkcyjnych i klasowych,
- należy utworzyć komponent nadrzędny i dwa komponenty potomne, mogą to być np. tabele, listy ‘ol’ lub ‘ul’, obrazki itp. Dowolność wyboru, aby nie były to przykłady zbyt zbliżone do tych z repo,
- należy wykorzystać props (atrybuty, właściwosci) przy przekazywaniu danych do komponentu potomnego,
- należy wykorzystać state (stan) przy tworzeniu komponentu klasowego,
- należy dodać plik .css do wybranych komponentów,
- należy zastosować funkcję map() przy generowaniu komponentów i należy pamiętać o atrybucie key,
- należy zrealizowac wysyłanie funkcji za pomocą ‘props’,
- plusy za wykorzystanie Bootstrapa lub react-bootstrap’a w create-react-app.

#### Wygląd strony:
![1](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/1.png?raw=true)

Utworzyłam komponent klasowy App.jsx, który jest jednocześnie komponentem nadrzędnym. W nim umieściłam komponenty potomne.

![2](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/2.png?raw=true)

#### Komponent Navbar (komponent potomny, css, bootstrap)
W komponencie tym znajduje się pasek "menu" (navbar). Wykorzystałam tutaj Bootstrapa. 

![3](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/3.png?raw=true)

By korzystać z Bootsrapa najpiew musiałam pobrać plik css Bootstrapa za pomocą komenty npm install --save bootstrap. Następnie zaimportowałam ten plik w src/index.js.

![4](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/4.png?raw=true)

Utworzyłam plik Navbar.css, by zmienić kolor paska i zaimportować wybraną Google Font.

![5](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/5.png?raw=true)

#### Komponent Form (komponent klasowy, potomny, wykorzystanie state, css, bootstrap)
Jest to komponent klasowy. Znajduje się w nim formularz, do którego wpisuje się swoje imię, a po wciśnięciu guzika "Save" wyświetla się okienko z napisem "Welcome to my React app, {wpisane imie}".

![6](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/6.png?raw=true)

![7](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/7.png?raw=true)

W komponencie tym użyłam konstruktora, jako że będę inicjować stan, ponieważ wartość wpisywana do formularza zmienia się w czasie "pracy" aplikacji. Dodatkowo wiążę metody obsługi zdarzeń z instancją komponentu. Użyty przeze mnie "bind" nadpisuje metode przy pomocy zbindowanej funkcji, znaczy to, że funkcja zostaje niezmienna od powstania komponentu aż do jego zniszczenia. 

![8](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/8.png?raw=true)

Poniżej konstruktora zdefiniowałam dwie funkcje, które zdarzą się, gdy nastąpi konkretne zdarzenie: zmiana wartości w input powoduje wywołanie handleChange(event), a wciśnięcie guzika Save powoduje wywołanie handleClick().

![9](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/9.png?raw=true)

W handleChange aktualizowana zostaje wartość wyrażenia opisanego w state. Dzieje się to za pomocą setState().

W handleClick wyświetlany jest alert z wiadomością i wpisanym imieniem.

W sekcji render znajduje się nasz formularz.

![10](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/10.png?raw=true)

Utworzyłam plik Form.css, w którym definiuję położenie naszego formularza (na środku), importuję kolejną Google Font i określam rozmiar czcionki.

![11](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/11.png?raw=true)

#### Komponent Function (komponent funkcyjny, przekazanie atrybutu do komponentu potomnego, css)
Jest to komponent funkcyjny. Komponent nadrzędny przekazuje do niego daną za pomocą props, która jest wyświetlana dzięki komponentowi Function.

![12](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/12.png?raw=true)

![13](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/13.png?raw=true)

Funkcja przyjmuje atrybut props, przekazywany przez komponent nadrzędny, a następnie zwraca go wraz z dodatkowym tekstem. 

![14](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/14.png?raw=true)

Dodatkowo określiłam typ dla zmiennej text (props.text) jako string. Znaczy to, że jeśli przekażemy do tej funkcji np. zmienną liczbową to w konsoli ujrzymy ostrzeżenie. 

![15](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/15.png?raw=true)

Gdy text jest numerem równym 4:

![16](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/16.png?raw=true)

![17](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/17.png?raw=true)

Utworzyłam plik Function.css, w którym ustawiłam ułożenie tekstu, czcionkę, grubość, kolor i rozmiar.

![18](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/18.png?raw=true)

#### Komponent CopyEvent (komponent potomny, wysłanie funkcji za pomocą props)
Jest to komponent potomny względem komponentu App. Przekazywana jest do niego funkcja onCopy() za pomocą props.

![19](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/19.png?raw=true)

Przekazywaną funkcją jest onCopy, w której wyświetlany jest alert z napisem "Wow, you copied this text!!!". 

W komponencie umieszczony jest tekst, do którego dodane zostało zdarzenie onCopy. Gdy ma ono miejsce, czyli, gdy ktoś kopiuje tekst, wykonywana jest funkcja props.OnCopy(), czyli ta przekazana z komponentu nadrzędnego. Nazwa funkcji przekazywanej do tego komponentu może być inna, nie musi to być onCopy, po prostu ja ją tak nazwałam, ale równie dobrze można ją nazwać copy, czy jak tylko chcemy. 

![20](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/20.png?raw=true)

Po skopiowaniu tekstu:

![21](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/21.png?raw=true)

#### Komponent App (komponent klasowy, nadrzędny, wykorzystanie stanu, css, map() i key)
Jest to komponent nadrzędny dla wszyskich moich pozostałych komponentów. Jest on komponentem klasowym. Znajduje się w nim konstruktor, ponieważ inicjuję w tym komponencie stan. 

![22](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/22.png?raw=true)

W konstruktorze, jak wyżej napisałam, inicjuje stan. Stanu używa się, gdy powiązane dane z komponentem zmieniają się w czasie. Utworzyłam w komponencie listę zakupów, która jest tworzona dzięki generowaniu komponentów List i przekazywaniu im wartości. Wartości te zmieniają się za każdym razem. Dla każdego nowego komponentu List mamy inną wartość. Dlatego wykorzystałam stan. W stanie tym pod nazwą things zdefiniowałam pozycje, które mają znaleźć się na liście. Każda ma swoje id, amount czyli ilość i text, który mówi co to za rzecz do kupienia.

W sekcji render() generowane są komponenty. 

![23](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/23.png?raw=true)

Dzieje się to za pomocą map, która wykonuje funkcję, a raczej komponent List na każdym elemencie zawartym w stanie (things). Prócz amount i text definiuję również atrybut key, którym jest id. Bez zdefiniowania klucza (key) pojawia się ostrzeżenie, że każdy potomek w liście powienien mieć unikatowy "key".

W sekcji return wyświetlam moją listę zakupów.

![24](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/24.png?raw=true)

![28](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/28.png?raw=true)

Utworzyłam plik App.css, w którym definiuje ustawienie tekstu, czcionkę i jej rozmiar.

![25](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/25.png?raw=true)

#### Komponent List (komponent potomny, bootstrap)
Komponent potomny względem App. Tworzone są tutaj kolejne pozycje listy zakupów.

![26](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/26.png?raw=true)

Wykorzystałam listę z Bootstrapa. 

Określiłam też typy dla przekazywanych atrybutów. Oba muszą być stringiem.

![27](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium6/images/27.png?raw=true)