### Laboratorium 5
Zadania z wykorzystaniem asynchronicznego JavaScript.

Asynchroniczność oznacza wykonywanie jakichś operacji jakby w tle, bez blokowania głównego wątku aplikacji. W języku JavaScript wszystkie zdarzenia są wykonywane zgodnie
z tzw. kolejką zdarzeń. Nie mamy możliwości wykonywania operacji równolegle, jak w innych językach programowania. Operacje wykonywane kolejno jedna po drugiej w jednym wątku.

Na stronie umieściłam przyciski, które po naciśnięciu wyświetlają w konsoli wyniki funkcji. Pomogło mi to z zachowaniem "porządku" w konsoli.

![1](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/1.png?raw=true)

Wszystkie zadania wykonałam na moim pliku JSON, który umieściłam na "Fake Online Rest server".

[link](https://my-json-server.typicode.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/)

Sam plik JSON znajduje się bezpośrednio w tym repozytorium pod nazwą db.json. [db.json](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/db.json)

#### 1. Funkcja zwrotna (callback)
Funkcja zwrotna, najprościej mówiąc jest to funkcja, która zostanie wykonana, gdy jakaś inna funkcja zakończy działanie. 
#### - Task 1:
"wykorzystaj funkcję zwrotną do pobrania dwóch różnych wartości liczbowych (z różnych poziomów zagnieżdżenia) z ww. obiektu JSON i wykonaj wybrane działanie na tych liczbach"

Wykorzystałam do tego metodę .getJSON(url, [data], [success]). Przyjmuje ona jeden obowiązkowy parametr url, który wskazuje url, któremu mamy wysłać żądanie. Dodatkowo przekazałam tej metodzie również parametr opcjonalny success, który wskazuje co ma się stać, gdy żadanie się powiedzie. Jest to nasza FUNKCJA ZWROTNA.

W funkcji zwrotnej pobrałam dwie wartości liczbowe (z różnych poziomów zagnieżdżenia) i wykonałam na nich jakieś działanie. Wywołuje też tam funkcję show(), którą stworzyłam. Służy ona jedynie do wyświetlania danych. Utworzyłam ją, by nie pisać w kółko tego samego przy wyświetlaniu i ułatwić sobie pracę. 

Zrobiłam to dla dwóch przykładów (dla artysty o ID = 1). 
W przykładzie 1 dodaję wartości, w przykładzie 2 odejmuję.

![2](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/2.png?raw=true)

#### - Task 2:
"wykorzystaj funkcję zwrotną do pobrania dwóch różnych łańcuchów znakowych (z różnych poziomów zagnieżdżenia) z ww. obiektu JSON i za pomocą template strings stwórz łańcuch znakowy z użyciem obu wcześniej wyekstrahowanych łańcuchów znakowych."

Tutaj tam samo jak w Task 1 użyłam metody .getJSON i przekazałam jej funkcję zwrotną, która pobiera dwa łańcuchy znakowe (z różnych poziomów zagnieżdżenia) i następnie łączy je i tworzy nowy łańcuch za pomocą template strings. 

Zrobiłam to dla dwóch przykładów (dla artysty o ID = 2).

![3](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/3.png?raw=true)


#### 2. Obiekt Promise
Dzięki obiektom Promise możemy wykonać jakiś kod, a następnie odpowiednio zareagować na jego wykonanie. Praca z obietnicami w zasadzie zawsze składa się z 2 etapów. Po pierwsze tworzymy obiekt Promise, w którym wykonujemy jakieś asynchroniczne operacje (np. ściągamy dane z serwera) i zwracamy za pomocą jednej z dwóch funkcji. Po drugie reagujemy na zwrócone przez ten obiekt dane (konsumujemy je).

Do stworzenia Promise korzystamy z konstruktora Promise(), który w parametrze przyjmuje funkcję, do której przekazujemy referencję do dwóch funkcji (tak zwanych egzekutorów), które będą wywoływane w przypadku zwrócenia poprawnego lub błędnego kodu.

Gdy obietnica kończy się powodzeniem (np. dane się wczytają), powinniśmy wywołać funkcję resolve(), przekazując do niej rezultat działania. W przypadku błędów powinniśmy wywołać funkcję reject(), do której przekażemy błędne dane lub komunikat błędu.

Po rozwiązaniu (zakończeniu) Promise możemy zareagować na jego wynik. Służą do tego dodatkowe metody, które Promise nam udostępnia (między innymi then(), catch() i finally()).

then() - pozwala reagować zarówno na pozytywne rozwiązanie obietnicy jak i negatywne

catch() - reakcja na negatywną odpowiedź 

finally() - odpalana jest zawsze po zakończeniu Promise, bez względu czy zakończyło się to powodzeniem czy nie

#### - Task 1:
"wykorzystaj obiekt Promise do pobrania dwóch różnych zasobów liczbowych i napisz funkcję wykonującą wybrane działanie na tych liczbach"

Utworzyłam funkcję, która przyjmuje dwa parametry (ID artysty i nr przykładu). Zwraca ona obiekt Promise, w którym najpierw sprawdzam, czy podane ID jest poprawne, jeśli nie obietnica kończy się porażką (reject). Gdy ID jest poprawne następuje pobranie danych z sewera (za pomocą fetch, który opiszę w innym punkcie) i obliczenie sumy dwóch pobranych liczb (obliczanie dzieje się w oddzielne funkcji). Następnie wywołujemy resolve(), do której przekazujemy wynik dodawania.

Po wywołaniu powyższej funkcji umieściłam metody then, catch i finally. Zareagowałam na wynik obietnicy. W metodzie then() umieściłam wyświetlanie naszej sumy. W catch() wyświetlany jest błąd, jeśli taki będzie miał miejsce. W finally() umieściłam napis, który będzie się zawsze wyświetlał po zakończeniu Promise.

Zrobiłam dwa przykłady. Jeden jest dla artysty z ID = 1, drugi dla artysty z ID = 2.

![4](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/4.png?raw=true)

Przykład 1, gdy podamy złe ID:

![5](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/5.png?raw=true)

Jak widać pojawia nam się tekst z metody catch() oraz tekst z reject().

#### - Task 2:
"wykorzystaj obiekt Promise do pobrania dwóch różnych dowolnych zasobów i napisz funkcję tworzącą z nich nowy obiekt"

Zrobiłam to na dokładnie tej samej zasadzie co Task 1. Jedyną różnicą jest funkcja wykonywana w obiekcie Promise. Zamiast liczenia sumy tworzony jest nowy obiekt JSON z dwóch pobranych wcześniej zasobów. Do resolve() przekazywany jest nowo utworzony obiekt. 

Zrobiłam dwa przykłady. Jeden jest dla artysty z ID = 1, drugi dla artysty z ID = 2.

![6](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/6.png?raw=true)

Przykład 1, gdy podamy złe ID:

![7](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/7.png?raw=true)


#### 3. Async/await
Async/await to nowy sposób na zapis asynchronicznego kodu. Jest to nakładka na Promise, która ułatwia pisanie kodu. 

Deklaracja funkcji async definiuje funkcję asynchroniczną, która zwraca obiekt AsyncFunction. Funkcja asynchroniczna to funkcja, która działa asynchroniczne poprzez zdarzenie pętli używając bezwarunkowego Promise do zwrócenia wyniku. Słowo async postawione przed funkcją sprawia, że dana funkcja zawsze zwraca obietnicę. 

Funkcja async może zawierać wyrażenie await, które wstrzymuje wywołanie funkcji asynchronicznej i czeka na przekazaną deklarację Promise i wtedy wznawia wywołanie funkcji async oraz interpretuje jako wartość rozwiązaną. Słowa await możemy używać tylko wewnątrz funkcji poprzedzonej słowem async.

W przypadku obsługi błędów za pomocą async/await, możemy posłużyć się konstrukcją try/catch.

#### - Task 1:
"pobranie dwóch różnych zasobów liczbowych i napisanie funkcji wykonującej wybrane działanie na tych liczbach"

Stworzyłam funkcję asynchroniczną, która za pomocą fetch pobiera danę z serwera. Przed fetch dodałam zapisek await, czyli JavaScipt poczeka na wykonanie tej asynchronicznej operacji. Sprawdzam, czy odpowiedź jest "ok", czyli jej status jest równy 200. Dodatkowo sprawdzam poprawność podanych parametrów do tej funkcji (numer albumu i piosenki, które mają zostać pobrane). Gdy wszystko jest poprawne następuje zapisanie odpowiedzi jako obiekt json. Dodałam tu await, czyli JS poczeka na wykonanie. Pobieram potrzebne dane i wykonuje na nich funkcję, która liczy ich sumę. Przed wywołaniem funkcji rownież dodałam await. Na koniec suma jest wyświetlana.

Jeśli status odpowiedzi nie jest równy 200 lub nr albumu lub piosenki jest niepoprawny to następuje zgłoszenie błędu w konsoli. 

Dodatkowo wykorzystałam konstrukcję try,catch,finally. Czyli całe postępowanie opisane powyżej (pobieranie danych, liczenie sumy) zapisane jest w try. Jeśli to się nie powiedzie łapany jest error za pomocą catch. Na końcu dodałam finally, które wyświetla się zawsze na końcu, niezależnie od powodzenia powyższych funkcji. 

Warto zaznaczyć, że catch nie uważa statusu o nr 404 jako błąd, jest to dla niego odpowiedź.

Zrobiłam dwa przykłady, tylko dla artysty o ID = 1. Sprawdzenie poprawności podanego ID artysty jest sprawdzane w funkcji, która liczy sumę. Jest to funkcja zwracająca obiekt Promise z wykorzystaniem resolve(), do którego przekazywany jest wynik dodawania i reject(), który zwraca informację o błędzie w przypadku złego ID artysty.

![8](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/8.png?raw=true)

Przykład 1, gdy podamy złe ID artysty:

![9](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/9.png?raw=true)

Przykład 2, gdy podamy zły numer albumu lub piosenki:

![10](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/10.png?raw=true)

Przykład 1 oraz 2, gdy wprowadzony url jest niepoprawny.

![11](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/11.png?raw=true)

Przykład 1, gdy nie ma internetu. W takiej sytuacji wykonuje się to, co w sekcji catch.

![12](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/12.png?raw=true)

#### - Task 2:
"pobranie dwóch różnych dowolnych zasobów i napisanie funkcji tworzącącej z nich nowy obiekt"

Zrobiłam to na podstawie Task 1. Jedyną różnicą jest wywoływana funkcja w funkcji asynchronicznej. Zamiast liczenia sumy tworzy ona nowy objekt JSON. 

Dwa przykłady zrobione dla artysty o ID = 2. Również sprawdzane jest tutaj, czy podane zostało poprawne ID. 

![13](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/13.png?raw=true)

Obsługa błędów działa tak samo jak w Task 1, więc nie będę drugi raz tego samego pokazywać. 


#### 4. AJAX
Ajax czyli Asynchronous JavaScript and XML to technika, wzorzec, który umożliwia nam dynamiczne ściąganie i wysyłanie danych bez potrzeby przeładowania całej strony. Umożliwia załadowanie zewnętrznego pliku i dodanie jego zawartości do strony internetowej. AJAX to sposób uzyskiwania dostępu do zewnętrznych plików ze strony internetowej, ale nie działa z plikami w Twoim systemie plików. Pliki, do których uzyskujesz dostęp, muszą znajdować się w Internecie: innymi słowy, nie może to być plik file: //, do którego uzyskujesz dostęp z własnego komputera. AJAX sprawia, że ​​strony użytkownika są interaktywne i zapewnia użytkownikowi wygodniejsze wrażenia.

Służy do opisania sposobu, w jaki używamy obiektu XMLHttpRequest do odświeżania części strony poprzez pobieranie danych z serwera za pośrednictwem żądań HTTP i manipulowanie modelem DOM w celu odświeżenia danych.

Obiekt XMLHttpRequest istnieje w Javascript nierozerwalnie od momentu powstania Ajax i służy do nawiązywania dynamicznych połączeń XHR.

#### - Task 1:
Stworzyłam funkcję z dwoma atrybutami: ID artysty i nr przykładu, w której utworzyłam obiekt XMLHttpRequest. Następnie skonfigurowane zostaje połączenie za pomocą metody open(typ,url,[async, login*, password*]). Przekazuje do niej wymagane atrybuty, czyli typ połączenia i adres do którego się łączymy. Dodatkowo jako atrybut dodałam true, co powoduje, że połączenie jest ustawiane na asynchroniczne, czyli połączenie jest nawiązywane, a skrypt wykonuje się dalej, ale działać na danych z serwera mogę dopiero, gdy dane zostaną zwrócone.Typ połączenia to w moim przypadku GET, ponieważ chcę pobierać dane z serwera. Definiuje typ odpowiedzi jako JSON. 

Jako, że połączenie (open()) jest asynchroniczne musimy dodać nasłuchiwanie odpowiedniego zdarzenia (onload - połączenie zakończone powodzeniem, onerror- błąd nawiązywania połączenia, np. przerwało połączenie).

Onload oznacza, że nasze połączenie zakończyło się pozytywnie i dostaliśmy w odpowiedzi jakieś dane. Zwrócone dane mogą zawierać odpowiedź której oczekiwaliśmy, ale też odpowiedź ze strony jakiegoś błędu (np. status 404, 500, czy 301 w przypadku przekierowania). Przed przystąpieniem do operowania na danych sprawdziłam, czy status połączenia wynosi 200. Następnie pobierane są interesujące mnie dane i wywoływana jest funkcja, która liczy sumę. 

Gdy status połączenia nie wynosi 200 to wyświetlany jest komunikat o błędzie.

Onerror wykonuje się, gdy wystąpił błąd nawiązywania połączenia, np. gdy nie ma internetu.

Zrobiłam dwa przykłady. Jeden dla artysty o ID = 1, a drugi dla artysty o ID = 2. 

![14](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/14.png?raw=true)

Przykład 1, gdy podamy złe ID artysty (czyli status połączenia nie jest równy 200):

![15](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/15.png?raw=true)

Przykład 2, gdy nie ma połączenia z serwerem, czyli uruchamia się onerror:

![16](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/16.png?raw=true)

#### - Task 2:
Zrobione na tej samej zasadzie co Task 1. Jedyną różnicą jest funkcja wywoływana w onload. Tworzy ona nowy obiekt JSON, a nie liczy sumę jak w powyższym zadaniu. 

Zrobiłam dwa przykłady dla artysty o ID = 1 i artysty o ID = 2. 

![17](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/17.png?raw=true)

Obsługa błędów działa tak samo jak w Task 1, więc nie będę pokazywac tego samego.


#### 5. Metoda fetch
Fetch API - nowy interfejs, a także następca XMLHttpRequest, który podobnie do swego brata pozwala pracować z dynamicznymi połączeniami. Głównymi cechami odróżniającymi Fetch od starszego brata jest domyślna obsługa przez fetch obietnic, przez co praca z nim w wielu przypadkach jest zwyczajnie przyjemniejsza. 

Podstawowa składnia fetch: fetch(url, [options]). 

Jeżeli pominiemy dodatkowe opcje, domyślnie będzie wykonywane połączenie typu GET, które będzie służyć do pobrania danych. Po odpaleniu, fetch zwraca Promise, więc możemy je skonsumować za pomocą dostępnych metod - then(), catch(), all(). 

#### - Task 1:
Utworzyłam funkcję, która przyjmuje dwa argumenty ID artysty i nr przykładu. Sprawdzana jest poprawność podanego ID. Jeśli ID jest złe to zwracana jest informacja o błędzie.

Jeśli jest poprawne to pobierane są dane za pomocą fetch'a. Fetch zwraca Promise, więc następnie "skonsumowałam" ją za pomocą then().

W then() zapisuję potrzebne dane i wykonuję na nich funkcję liczącą sumę. 

Wykorzystałam również catch() do łapania błędów, gdyby takie miały miejsce. 

Zrobiłam to dla dwóch przykładów, dla artysty ID = 1 i ID = 2.

![18](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/18.png?raw=true)

Przykład 1, gdy podane ID jest złe:

![19](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/19.png?raw=true)

#### - Task 2:
Zrobione tak samo jak Task 1. Jedynie użyłam innej funkcji, zamiast liczenia sumy tworzony jest nowy obiekt JSON.

Dwa przykłady, jeden dla artysty o ID = 1, drugi dla ID = 2.

![20](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/20.png?raw=true)

Obsługa błędów taka sama jak w Task 1.


#### 6. Biblioteka axios
Axios to słynny moduł JavaScript. Jest on opartym na obietnicach klientem HTTP dla przeglądarki.

Pracując z Axiosem możemy z kolei bezpośrednio uzyskać dostęp do wyniku JSON bezpośrednio z obiektu odpowiedzi przez właściwość data. Axios w porównaniu do Fetch'a wyrzuca błędy sieciowe. 

#### - Task 1:
Utworzyłam funkcję, która używa axios do pobrania danych. Przyjmuje ona dwa argumenty ID i nr przykładu. Axios.GET(url) wysyła żądanie do podanego url. Za pomocą then() obsłużyłam odpowiedź. Zapisałam potrzebne dane i wywołałam funkcję, która liczy sumę dla pobranych zasobów liczbowych. 

Wykorzystałam również catch() do łapania błędów. W sekcji tej sprawdzam, czy podane ID jest poprawne, jeśli nie to wyświetlany jest odpowiedni komunikat. Jeśli ID jest poprawne, a catch jest obsługiwane to znaczy, że mamy doczynienia z innym błędem. Wyświetlany jest wtedy komunikat o tym błędzie. 

Dwa przykłady dla dwóch artystów o różnych ID:

![21](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/21.png?raw=true)

Przykład 1, gdy podamy złe ID:

![22](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/22.png?raw=true)

Błąd łapany przez catch (gdy link do serwera jest błędny):

![23](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/23.png?raw=true)

#### - Task 2:
Funkcja napisana na takiej zasadzie co w Task 1. Jedyna różnica to wykonywana funkcja, zamiast liczenia sumy tworzymy nowy obiekt JSON. 

Dwa przykłady (po jednym dla jednego artysty):

![24](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/24.png?raw=true)

Obsługa błędów działa na tej samej zasadzie co w Task 1.




