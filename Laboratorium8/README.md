### Laboratorium 8
Aplikacja React napisana z wykorzystaniem wybranego przykładu + użycie komendy git difftool.

Przykład oryginalny: https://github.com/kissgyorgy/every-day-calendar.

#### Wygląd aplikacji
Stworzyłam tracker, czyli aplikację, która umożliwia zapisywanie dni, w które udało nam się wykonać wybraną czynność, np. możemy zaznaczać dni, w które ćwiczyliśmy. Jest to sposób na motywowanie siebie do działania. Pierwotnie chciałam stworzyć mood tracker, dlatego taka nazwa projektu.

![1](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/1.png?raw=true)

Na stronie wyświetlany jest kalendarz całoroczny. Zaznaczony jest dzisiejszy dzień (czarna ramka). Zapisać dzień możemy poprzez naciśnięcie na niego. Kolor tła zmienia się wtedy na ciemniejszy. Drugi stycznia niezaznaczony:

![4](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/4.png?raw=true)

Drugi stycznia po kliknięciu na niego: 

![5](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/5.png?raw=true)

Nad kalendarzem znajduje się aktualny rok, a pod nim podpis czyj to tracker i jaka czynność jest "śledzona". Można to zmienić na dole w ustawieniach. 

![2](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/2.png?raw=true)

I tak po wpisaniu słowa Workout, na górze strony Yoga zmieniła się na Workout:

![3](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/3.png?raw=true)

Zmiana imienia z Kamila na Robert:

![6](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/6.png?raw=true)

![7](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/7.png?raw=true)

Pod informacją dotyczącą trackera znajduje się inspirujący cytat. Jest on losowo wybierany z pliku i zmienia się za każdym odświeżeniem strony:

![8](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/8.png?raw=true)

![9](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/9.png?raw=true)

Pod kalendarzem umieściłam dział "Progress", gdzie wyświetlana jest liczba dni zaznaczonych i wyliczony procent dni w roku, które zaznaczyliśmy. Umieściłam też tutaj diagram kołowy:

![10](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/10.png?raw=true)

I tak po każdym zaznaczonym dniu, strona odświeża się i aktualizuje dane dotyczące postępu.

#### Implementacja 
Z projektu oryginalnego wzięłam kalendarz, ale jednak nie cały. W oryginalnym przykładzie kalendarz miał dodatkowe opcje, ustawienia dotyczące wyglądu kalendarza (kalendarz miesięczny i roczny osobno, kolor oznaczonych dni) i efekty dźwiękowe. Uznałam to za zbędne. Za to sama dodałam do aplikacji kilka rzeczy: możliwość zapisania śledzonej czynności, imienia, dział z postępem, losowe cytaty. Zmieniłam też wygląd, dodałam navbar. 

Dane zapisywane w localStorage.

Główny komponent App.js:

![11](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/11.png?raw=true)

Znajduje się tutaj jedynie navbar z Bootstrapa a poniżej zaimportowany komponent Home. W oryginalnym projekcie plik ten posiadaj o wiele więcej linijek, jednak dotyczyły one ustawień i opcji, które usunęłam. 

Komponent funkcyjny Home (w oryginalnym projekcie nie istnieje, ale podobny fragment kodu znajduje w oryginalnym komponencie App.js). Korzystam z kontekstu, który umożliwia przekazywanie danych wenwątrz drzewa komponentów bez konieczności przekazywania ich przez właściwości każdego komponentu pośredniego. Tworzę zmienną dateContext, w której zapisuje załadowane dane ze storage.  Z funkcji zwracam komponent dostawcy (Provider), który przekazuje właściwości value, czyli nasz element dateContext ze wszystkimi danymi z localStorage., do wszyskich "konsumentów" tego kontekstu, czyli moich komponentów znajdującyh się poniżej w drzewie czyli Calendar.

![12](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/12.png?raw=true)

By móc korzystać z kontekstu musiałam utworzyć plik context.js, w którym tworzę pusty kontekst za pomocą metody createContext().

![13](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/13.png?raw=true)

W komponencie Calendar znajduje się prawie wszystko, co jest wyświetlane na stronie. W oryginalnym projekcie odpowiednikiem tego pliku jest MonthCal.jsx. Na początku zdefiniowałam tablicę ze skrótami miesięcy.

![14](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/14.png?raw=true)

Główną funkcją w komponencie jest funkcja Calendar. Jednak prócz niej znajdują się tutaj jeszcze:
- isLeap(), która sprawdza, czy rok jest przestępny lub nie. Sposób działania tej funkcji można przedstawić w kilku krokach: 
1. Jeśli rok można podzielić przez 4 to idziemy dalej, jeśli nie to przechodzimy do kroku 5.
2. Jeśli rok można podzielić przez 100 idziemy dalej, jak nie to przeskakujemy do kroku 4.
3. Jeśli rok można podzielić przez 400 idziemy dalej, jeśli nie to idziemy do kroku 5.
4. Rok jest rokiem przestepnym (366 dni)
5. Rok nie jest przestępny. 

![15](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/15.png?raw=true)

- Tracker(), jest to funkcja, która pobiera z kontekstu dane dotyczące zapisanego imienia i czynności i wyświetla te dane na stronie. Chciałam gdzieś wykorzystać Object.assign i spróbowałam tego tutaj, do połączenia 3 obiektów w jeden.

![16](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/16.png?raw=true)

- Month({month}), która odpowiada za wyświetlanie miesięcy. Pierwsza linijka funkcji za pomocą getDate() pobiera liczbę dni w miesiącu. Następnie tworzona jest tablica o długości numDays, która jest wypełniona kolejnymi liczbami od 0. Pobierana jest odpowiednia nazwa miesiąca z utworzonej na samym początku komponentu tablicy. Z funkcji zwracana jest nazwa miesiąca, a następnie za pomocą map() tworzona jest nowa tablica zawierająca wyniku wywołania funkcji Day dla każdego elementu, czyli dla każdego dnia. 

![17](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/17.png?raw=true)

- Day({month, day}), tutaj wyświetlany jest pojedynczy dzień. Tworzona jest data z przekazanym do funkcji dniem i miesiącem (rok mam zdefiniowany tutaj na 2021, jednak nie powoduje to ograniczenia kalendarza jedynie do tego roku, mogę podać tutaj dowolny rok i kalendarz będzie wyświetlał dobrą datę). useContext() pozwala nam użyć kontekstu w tej funkcji. Wywołujemy funkcję hasDay(), która zaimportowana została ze storage.js. Opiszę ten plik później, jednak powiem, że hasDay sprawdza, czy wybrane już daty są takie same jak ta, którą teraz będziemy wyświetlać. Użyłam hooka stanu. Hook to specjalna funkcja, która pozwala "zahaczyć się" w wewnętrzne mechanizmy Reacta. useState deklaruje zmienną stanu. Jest to checked. Argumentem, jaki przekazujemy do useState() jest początkowa wartość stanu, czyli wynik funkcji hasDay(). setChecked() to funkcja, która pozwala aktualizować nasz stan. Następnie za pomocą if'a sprawdzane jest, czy przekazany miesiąc i dzień to dzisiejsza data, jeśli tak to tworzona jest ramka na około tego dnia. NPoniżej znajduje się kolejny if, gdzie sprawdzane jest, czy dzień jest wybrany. Jeśli tak to ma inny kolor tła. Funkcja zwraca pole z jednym dniem. Zdefiniowana jest funkcja handleClick, która wywołuje się, gdy wciśniemy wybrany dzień. W funkcji tej zmieniany jest stan (wcześniej zdefiniowany checked), wywoływana jest funkcja toggleSelectedDay, która znajduje się w storage.js i sprawdza, czy wybrany dzień jest już zapisany, jeśli nie to na koniec wybranych dni dodawany jest ten nowy, jeśli tak to element o indeksie ind jest usuwany. Na końcu wybrane dni są zapisywane.  Po wykonaniu tej funkcji strona odświeża się. 

![18](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/18.png?raw=true)

![19](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/19.png?raw=true)

![20](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/20.png?raw=true)

- MyForm() jest to klasa z formularzem. Umożliwia wprowadzenie czynności, jaką chcemy "trackować". Zdefiniowałam konstruktor, w ktorym znajduje się pusta zmienna value. To pod nią będzie zapisywane to, co zostanie wprowadzone do formularza. Zdefiniowane są tutaj dwie funkcje, które wykonują się po konretnym zdarzeniu. handleChange wykonywane jest, gdy wartość w formularzu zmieni się. Wykorzystałam tutaj setState(), który ustawia w kolejce zmiany stanu komponentu i daje znać Reactowi, że komponent i jego komponenty potomne powinny zostać ponownie wyrenderowane ze zaktualizowanym stanem. Czyli teraz pod wartość value powinno podstawione zostać to, co zostało wpisane w formularzu. handleSubmit wykonuje się, gdy formularz zostanie zatwierdzony. W funkcji tej wywoływana jest funkcja ze storage.js checkTrack(), która sprawdza, czy wpisana wartość jest różna od tej już zapisanej i jeśli tak to aktualizuje localStorage i zapisuje w nim nową wartość.

![21](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/21.png?raw=true)

![22](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/22.png?raw=true)

- MySecondForm() to drugi formularz. Ten umożliwia podanie imienia i zapisanie go w localStorage. Działa na takiej samej zasadzie co poprzedni, więc nie będę go specjalnie opisywać. Wspomne tylko, że wywoływana jest funkcja checkName, która importowana jest ze storage.js i sprawdza, czy podane imię jest inne niż to zapisane już w localStorage. Jeśli jest inne to je zapisuje, jeśli nie to nie.

![23](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/23.png?raw=true)

![24](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/24.png?raw=true)

W funkcji głównej Calendar, na początku tworzona jest tablica z 12 pozycjami wypełnionymi liczbami od 0 do 11. Używać będziemy tutaj naszego kontekstu, dlatego korzystamy z useContext(). Definiuje zmienne days, date (aktualna data), year (true lub false w zależności od wyniku funkcji isLeap). Następnie ifem sprawdzam co wyszło z wywołania tej funkcji. Jeśli true znaczy to, że rok ten ma 366 dni, jeśli false to 365 dni. Tworzę też zmienną percent, która jest wynikiem działania (liczba zaznaczonych dni/liczba dni w roku)*100%. Funkcja Calendar zwraca wszystko to, co widzimi na stronie pod navbarem. Najpierw wyświetlany jest aktualny rok przechowywany w kontekście. Następnie wywoływany jest Tracker, po nim Generator, którego jeszcze nie opisałam. Pod nim znajduje się kalendarz. Tworzona jest tablica, w której umieszczane są wyniki wykonania funkcji Month. Poniżej wyświetlane są informacje dotyczące postepu: ilość dni zaznaczonych i wyliczony procent. Zainstalowałam react-minimal-pie-chart. Jest to pakiet umożliwiający tworzenie diagramów kołowych. Utworzyłam taki diagram by graficznie przedstawić sotsunek dni zaznaczonych do tych niezaznaczonych. Pod diagramem znajduje się dział z ustawieniami, czyli dwa formularze opisane wcześniej.

![25](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/25.png?raw=true)

Komponent Generator (nie ma takiego w oryginalnym projekcie). Tutaj losuje cytat z pliku z cytatami i wyświetlam go. Cytaty znajdują się w QuotesDatabase.js. Znalazłam taki plik w internecie i uznałam, że go wykorzystam. 

![26](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/26.png?raw=true)

Każdy element ma wartośc "quote" i "author". Niektóre cytaty mają pustego autora, dlatego w funkcji musiałam wstawić odpowiedniego if'a. Najpierw generuję pseudolosową liczbę pamiętając, że nie może być ona większa od długości tablicy z moimi cytatami. Następnie pobieram cytat o wylosowanym numerze i pobieram z niego tekst i autora. Sprawdzam, czy autor nie jest pusty. Jeśli tak to pod author podstawiam wartość 'Unknown'. Funkcja wyświetla tekst i autora.

![27](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/27.png?raw=true)

Zostało mi jedynie opisać plik storage.js, który odpowiada za sprawdzanie, zapisywanie i pobieranie danych z localStorage. Zainstalowałam react-day-picker. Jest to pakiet umożliwiający selekcje dat. Z tego pakietu wykorzystałam DateUtils, który dostarcza przydatnych funkcji do pracy z datami. Ja użyłam z niego jedynie isSameDay(). 

Dwie pierwsze funkcje w tym pliku to serializeDates(dates) i deserializeDates(dates). 

![28](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/28.png?raw=true)

Pierwsza z nich konwertuje daty przekazane do funkcji na JSON string. Druga z nich dokonuje odwrotnej konwersji, znaczy że z typu JSON daty zamieniane są na object JavaScript.  

Kolejną funkcją jest hasDay, którą już pokazywałam. Jest to funkcja, która używana jest przy wyświetlaniu dni i sprawdza, czy aktualnie wyświetlany dzień jest już zapisany w localStorage. Do sprawdzenia, czy dni te są takie same użyłam DateUtils.isSameDay(). Funkcja ta zwraca tru jeśli dni te są takie same.

![29](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/29.png?raw=true)

Kolejne trzy funkcje odpowiadają za sprawdzanie, zapisywanie i ładowanie wybranych dni. Jedną z nich toggleSelectedDay już wcześniej opisywałam. Wspomnę tylko, że tu też użyłam DateUtils.isSameDay() do sprawdzenia, czy wśród zapisanych dni istnieje już ten przekazany do funkcji. loadSelectedDays() pobiera z localStorage zapisane dni (metoda getItem) i wykonywana jest na nich funkcja deserializeDates opisana wcześniej. saveSelectedDays(dates) zapisuje wybrane dni (metoda setItem), ale przed tym wywoływana jest na nich funkcja serializeDates również opisana już wcześniej. 

![30](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/30.png?raw=true)

Kolejne trzy funkcje dotyczą czynności, którą trackujemy. Jedną z nich checkTrack(thing) już opisałam wcześniej. saveTrack(thing) zamienia podaną czynność na typ JSON i zapisuje w localStorage pod nazwą trackingThing. loadTrack() pobiera z localStorage trackingThing, zamienia na obiekt JavaScript i zwraca. 

![31](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/31.png?raw=true)

Funkcja loadProgress() pobiera zapisane dni i zwraca ich długość zmniejszoną o 1.

![32](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/32.png?raw=true)

Trzy ostatnie funkcje odnoszą się do zapisywanego imienia. jedną z nich już pokazywałam. Działają one tak samo jak te od zapisywanej czynności, więc nie będę ich opisywać.

![33](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/33.png?raw=true)

Na koniec eksportuje wszystkie funkcje, które używane są poza plikiem storage.js.

![34](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/34.png?raw=true)


#### Git difftool - pokazanie modyfikacji
Nie robiłam swojej aplikacji na zasadzie pobrania oryginalego przykładu i następnie edytowaniu go, a sama tworzyłam projekt, bo nie chciałam bezmyślnie kopiować i nie mam nigdzie na repozytorium oryginalnego projektu, którym się wzorowałam. 

Wykorzystałam komendę git diff do zobaczenia różnicy między moim pierwszym commitem w ramach tego projektu, a ostatnim na chwilę obecną. Wyszło bardzo dużo różnic, więc pokażę tylko fragmenty:

![35](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/35.png?raw=true)

![36](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/36.png?raw=true)

![37](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/37.png?raw=true)

Do wykorzystania komendy git difftool musiałam pobrać jakiś program do pobierania plików, znalazłam winmerge. Zedytowałam zawartość pliku .gitconfig, dodając tam te dwie linijki:

![38](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/38.png?raw=true)

Teraz gdy wywołam komendę git difftool na dwóch commitach pojawi się zapytanie, czy uruchomić winmerge:

![39](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/39.png?raw=true)

Oryginalny przykład zapisałam na komputerze, więc postanowiłam, że za pomocą programu WinMerge pokażę zmiany w plikach. Porównałam cały folder src w moim i w oryginalnym projekcie.

![40](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/40.png?raw=true)

Pliki zaznaczone na żółto to te, które znajdują się i w moim i w projekcie oryginalnym i zostały zmodyfikowane przeze mnie. Pliki podpisane jako "Tylko po prawej" to pliki znajdujące się jedynie w moim folderze src, a pliki "Tylko po lewej" to pliki znajdujące się jedynie w folderze scr oryginalnego projektu. W oryginalnym projekcie komponenty są umieszczone w folderze components, a w moim nie, więc jest to nie do końca dobre porównanie. 

Postanowiłam przenieść komponenty z folderu components, by porównanie pokazało wszystkie różnice:

![42](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/42.png?raw=true)

Teraz jeszcze porównam poszczególne pliki, które mają u mnie inne nazwy, ale odpowiadają konkretnym plikom z oryginalnego projektu. 

Porównanie pliku App.js. Mój plik jest zdecydowanie uboższy, ponieważ dodałam plik, którego nie ma w oryginalnym projekcie i tam zdefiniowałam co trzeba (Home.js).

![41](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/41.png?raw=true)

Jako, że u mnie podobne rzeczy co w App.js oryginalnego projektu ja definiuję w Home.js postanowiłam porównać też te dwa pliku, różnią się one jednak bardzo:

![47](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/47.png?raw=true)

Porównanie pliku context.js:

![43](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/43.png?raw=true)

Porównanie mojego pliku Calendar.js i pliku SimoneCal.jsx, ponieważ tym plikiem z oryginalnego przykładu się wzorowałam do napisania Calendar.js. Plik jest dość spory dlatego nie pokażę całego, ale po lewej znajduje się ogólny wygląd różnic, wszystko na biało to to, co jest takie samo, żółte to różnice.

![44](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/44.png?raw=true)

Porówanie pliku storage.js:

![45](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/45.png?raw=true)

Ostatnim plikiem do porównania jest mój css i css z oryginalnego projektu. Oryginalnie miał on bardzo dużo rzeczy, które ja uznałam za zbędne. Dodałam swoje własne css'y, więc pliki te różnią się bardzo. Mój dodatkowo jest bardzo króciutki. 

![46](https://github.com/kamilanagorska/projektowanie-serwisow-www-nagorska-185ic/blob/main/Laboratorium8/images/46.png?raw=true)