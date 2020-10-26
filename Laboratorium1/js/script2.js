var myForm = document.getElementById('form');
		myForm.addEventListener("submit", function(ev) {
            var newElm = document.createElement('div');
            var name = document.getElementById("fname").value;
            newElm.innerText = name+', cieszymy się, że dołączysz do grona naszych kursantów. Sprawdź pocztę, bo właśnie wysłaliśmy do Ciebie wiadomość ze szczegółami.' +
            ' Jeśli nie otrzymałeś żadnej, proszę sprawdź folder ze spamem. Jeśli również tam nie ma wiadomości od nas, skontaktuj się z nami: HTMLAcademy@study.com';
            newElm.classList.add("thanks");
            newElm.classList.add("font6");
			myForm.parentNode.replaceChild(newElm, myForm); /*zamienia istniejące dziecko z nowym*/
			ev.preventDefault(); /*nie odswieza sie strona*/
		});