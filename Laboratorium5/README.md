### Laboratorium 5
Zadania z wykorzystaniem asynchronicznego JavaScript.

Asynchroniczność oznacza wykonywanie jakichś operacji jakby w tle, bez blokowania głównego wątku aplikacji. W języku JavaScript wszystkie zdarzenia są wykonywane zgodnie
z tzw. kolejką zdarzeń. Nie mamy możliwości wykonywania operacji równolegle, jak w innych językach programowania. Operacje wykonywane kolejno jedna po drugiej w jednym wątku.

Na stronie umieściłam przyciski, które po naciśnięciu wyświetlają w konsoli wyniki funkcji. Pomogło mi to z zachowaniem "porządku" w konsoli.

![1](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/1.png?raw=true)

Wszystkie zadania wykonałam na moim pliku JSON, który umieściłam na "Fake Online Rest server".
[link](https://my-json-server.typicode.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/)
Sam plik JSON znajduje się bezpośrednio w tym repozytorium pod nazwą db.json. [db.json](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/db.json)

#### Funkcja zwrotna (callback)
Funkcja zwrotna, najprościej mówiąc jest to funkcja, która zostanie wykonana, gdy jakaś inna funkcja zakończy działanie. 
### - Task 1:
  "wykorzystaj funkcję zwrotną do pobrania dwóch różnych wartości liczbowych (z różnych poziomów zagnieżdżenia) z ww. obiektu JSON i wykonaj wybrane działanie na tych liczbach"

  Wykorzystałam do tego metodę .getJSON(url, [data], [success]). Przyjmuje ona jeden obowiązkowy parametr url, który wskazuje url, któremu mamy wysłać żądanie. Dodatkowo przekazałam tej metodzie również parametr opcjonalny success, który wskazuje co ma się stać, gdy żadanie się powiedzie. Jest to nasza FUNKCJA ZWROTNA.

  W funkcji zwrotnej pobrałam dwie wartości liczbowe i wykonałam na nich jakieś działanie. Zrobiłam to dla dwóch przykładów (dla artysty o ID = 1). W przykładzie 1 dodaję wartości, w przykładzie 2 odejmuję.

  ![2](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium5/images/2.png?raw=true)
