var myForm = document.getElementById('form');
		myForm.addEventListener("submit", function(ev) {
            var newElm = document.createElement('p');
            var name = document.getElementById("fname").value;
            newElm.innerText = 'Dziękujemy '+name+' za cos tam';
            newElm.classList.add("thanks");
			myForm.parentNode.replaceChild(newElm, myForm); /*zamienia istniejące dziecko z nowym*/
			ev.preventDefault(); /*nie odswieza sie strona*/
		});