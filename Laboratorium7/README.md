### Laboratorium 7
Wykorzystanie Material UI oraz React-Router.

Stworzyłam szablon strony umożliwiającej poznawanie ludzi z różnych krajów w internecie. Ma ona 3 "podstrony": home, chat, users. Ścieżki do nich stworzyłam za pomocą React-Route. Każda podstrona wykorzystuje przynajmniej trzy różne komponenty Material UI. Dodatkowo wykorzystałam również Bootstrapa, 'state' oraz 'props'.


#### React-Route
Jak wcześniej napisałam moja strona składa się w 3 "podstron". Zdefiniowałam je w komponencie Apps.jsx.

Najpierw zaimportowałam potrzebne komponenty React-Route:
- BrowserRouter, który odrazu przemianowałam na Router, jest to główny komponent, w kótym umieszczamy całą definicję "routingu"
- Switch, renderuje pierwsze dziecko <Route>, które pasuje do lokalizaji
- Route, pozwala na zdefiniowanie poszczególnych ścieżek i powiązanie ich z komponentami
- Link, służy do przełączania się pomiędzy ścieżkami "routingu".

![1](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/1.png?raw=true)

Następnie w moim komponencie klasowym App w sekcji return umieściłam navbar Bootstrapa, gdzie dla każdego elementu należącego do klasy "nav-link" zdefiniowałam ściężkę za pomocą Link i tak dla zakładki home mam "/", dla chat "/chat", a dla users "/users".

![2](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/2.png?raw=true)

Poniżej użyłam Switch, a w nim każdej ścieżce przypisałam utworzony przeze mnie komponent, czyli co ma się wyświetlać, gdy przejdziemy do danej ścieżki.

![3](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/3.png?raw=true)

React-Router umożliwia nam posiadanie kilka podstron na stronie, gdzie każda ma swoją własną ścieżkę, a przy przechodzeniu z jednej podstrony do drugiej strona się nie odświeża. Podstrony są dynamicznie renderowane w przeglądace, a nie przez serwer. 


#### Home (ścieżka "/")
![4](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/4.png?raw=true)

Jest to strona główna, która wyświetla się po włączeniu. Umieściłam tutaj trzy komponenty Material UI. Każdy z nich umieściłam w osobnym komponencie stworzonym przeze mnie, ponieważ pozwala mi to zachować porządek w kodzie. Dzięki temu nie mylę się co gdzie jest.

![5](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/5.png?raw=true)

##### Card
Komponent Material UI o nazwie Card. Wykorzystałam "Simple Card", jednak troszkę ją zedytowałam, by pasowała do mojej strony. Określiłam jej szerokość, kolor tła, marginesy i czcionkę dla nagłówka.

![6](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/6.png?raw=true)

![7](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/7.png?raw=true)

##### Intro
Komponent Material UI o nazwie Accordion. Jest to "Simple accordion". Określiłam szerokość, marginesy i kolory tła (dla każdego elementu Accordion inny kolor). By wykorzystać ten komponent musiałam zainstalować Material Icons, ponieważ jedna z nich jest tutaj wykorzystywana, a dokładnie jest to ExpandMoreIcon. 

![8](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/8.png?raw=true)

Gdy są nierozwinięte:

![9](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/9.png?raw=true)

Rozwinięte:

![10](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/10.png?raw=true)

##### Carausel
Komponent Material UI o nazwie Stepper. Dokładniej jest to "Mobile Stepper Text". Nazwałam go Carausel, troszkę mylnie, ponieważ najpierw chciałam użyć Steppera z efektem "karuzeli", jednak z niego zrezygnowałam. 

Wybrałam trzy darmowe zdjęcia i zdefiniowałam je w tutorialSteps.

![11](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/11.png?raw=true)

Poniżej znaduje się komponent funkcyjny z komponentem Stepper. Znajduje się tu również obsługa zdarzenia kliknięcia, która umożliwia nam przewijanie zdjęć klikając guziki NEXT lub BACK.

![12](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/12.png?raw=true)

![13](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/13.png?raw=true)

![14](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/14.png?raw=true)

![15](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/15.png?raw=true)


#### Chat (ścieżka "/chat")
![16](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/16.png?raw=true)

Podstrona z opcjami chatu. Umieściłam tutaj 5 komponentów Material UI. Każdy w osobnym komponencie stworzonym przeze mnie. Dodatkowo wszystkie komponenty umieściłam w Card z Bootstrapa, a na koniec dodałam przycisk również z Bootstrapa.

![17](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/17.png?raw=true)

##### Form
Komponent Material UI o nazwie Text Field. Utworzyłam z nich formularz za pomocą form. Wykorzystałam style Material UI, który pomógł mi ładnie ustawić pola do wpisywania danych. 

![18](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/18.png?raw=true)

![19](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/19.png?raw=true)

##### Radio
Komponent Material UI o nazwie Radio. Użyłam RadioGroup. Domyślnie zaznaczoną wartością jest "Female". Znajduje się tutaj obsłużenie zdarzenia (onChange), które umożliwia nam zmienianie zaznaczonej wartości. 

![20](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/20.png?raw=true)

Domyślna wartość:

![21](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/21.png?raw=true)

Zmieniona wartość:

![22](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/22.png?raw=true)

##### Selector
Komponent Material UI o nazwie Select. Utworzyłam takie dwa. W jednym można wybrać płeć osoby, z którą chcemy porozmawiać, a w drugim kraj (nasz lub inny). Również wykorzystałam tutaj gotowe Styles, które pomogły w ułożeniu okienek. Znajduje się tutaj również obsługa zdarzenia zmiany, która umożliwia nam wybór płci lub kraju.

![23](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/23.png?raw=true)

![24](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/24.png?raw=true)

![25](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/25.png?raw=true)

Z wybranymi opcjami:

![26](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/26.png?raw=true)

##### Range
Komponent Material UI o nazwie Slider (Range slider). Umożliwia on wybór zakresu wieku osoby, z którą chcemy porozmawiać. Domyślnie ustawiłam to jako przedział od 20 do 30.

![27](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/27.png?raw=true)

Mamy tu też obsługę zdażenia, by móc zmieniać zakres.

![28](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/28.png?raw=true)

![29](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/29.png?raw=true)

Zmieniony zakres + jak widać, gdy najedziemy na jeden z końców przedziału wyświetla się coś na kształt łezki z wartością w środku.

![30](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/30.png?raw=true)

##### Accept
Komponent Material UI o nazwie Progress, dokładniej jest to Interactive integration. Po wciśnięciu go następuje ładowanie, a następnie zmienia on swój kolor na zielony.

Importy i styl:

![31](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/31.png?raw=true)

Obsługa zdarzenia kliknięcia, zdefioniowanie ładowania się, zmiany koloru:

![32](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/32.png?raw=true)

Komponent Material UI:

![33](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/33.png?raw=true)

Wygląd podstawowy:

![34](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/34.png?raw=true)

Ładowanie po wciśnięciu:

![35](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/35.png?raw=true)

Załadowane:

![36](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/36.png?raw=true)


#### Users (ścieżka "/users")
![37](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/37.png?raw=true)
![38](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/38.png?raw=true)

Podstrona z listą użytkowników. Wykorzystałam tutaj state i zdefiniowałam 14 użytkowników wraz z informacjami o nich. Wygenerowałam dla każdego komponent List. Prócz List użyłam jeszcze dwóch innych komponentów Material UI. Wszystko umieściłam w Card z Bootstrapa.

![39](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/39.png?raw=true)

##### List
Komponent Material UI o nazwie List Checkbox, jednak usunęłam z niej Checkbox'y, gdyż ich nie potrzebowałam. Wykorzystałam tutaj props. Do komponentu tego przesyłani są użytkownicy utworzeni w komponencie Users i dla każdego z nich tworzona jest kolejna pozycja listy.

![40](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/40.png?raw=true)

![41](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/41.png?raw=true)

##### Swi
Komponent Material UI o nazwie Switch z FormControlLabel. Umieściłam go na stronie, by moża było wybierać między wyświetlaniem wszyskich użytkowników lub tylko tych online. Nie implementowałam żadnego sposobu filtracji użytkowników. Po wciśnięciu Switcha wygląd listy się nie zmienia.

![42](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/42.png?raw=true)

Domyślnie jest zaznaczony:

![43](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/43.png?raw=true)

Odchaczony:

![44](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/44.png?raw=true)

##### Dialog
Komponent Material UI o nazwie Dialog, dokładniej jest to Form dialog. Po wciśnięciu guzika wyskakuje okienko, w którym jesteśmy proszeni o podanie swojego adresu e-mail. Można to okienko zamknąć bez wpisywania wciskając Cancel. 

![45](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/45.png?raw=true)

Guzik:

![46](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/46.png?raw=true)

Wyskakujące okienko po wciśnięciu:

![47](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium7/images/47.png?raw=true)