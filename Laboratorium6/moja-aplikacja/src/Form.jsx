import React from "react";
import './Form.css'
//komponent klasowy
//tu też używam konstruktora, ponieważ inicjuje stan i wiąże metody
class Form extends React.Component {
    //konstruktor
    constructor(props) {
        //metoda, ktora zawsze trzeba jak konstruktor
        super(props);
        //w stanie zapisuje rzeczy, jakie beda sie zmieniac czyli wartosc
        //na stronie dostepny jest formularz, gdzie wpisuje się tekst
        //tekst ten mozna wpisywac kilka razy, wiec jego wartosc sie zmienia
        this.state = {value: ''};
        //związanie metod obslugi zdarzenia z instancją komponentu
        //jest to stala skladnia, zawsze sie tak robi
        //bind nadpisuje metode przy pomocy zbindowane funkcji
        //funkcja pozostaje niezmienna od powstania komponentu aż do jego zniszczenia
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }
      handleChange(event) {
          //aktualizujemy wartosc z state za pomocą setState
        this.setState({value: event.target.value});
      }
      handleClick() {
          //wyswietlanie okienka z napisem
        alert('Welcome to my React app, ' + this.state.value);
      }
      render() {
          return (
          <form>
              <div className="form-group">
                  <label htmlFor="name">Write your name:
                      <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.value}
                      onChange={this.handleChange}
                      />
                    </label>
                </div>
                <button 
                id="btn" 
                type="button" 
                className="btn btn-outline-secondary"
                onClick={this.handleClick}>Save</button>
            </form>
          );
        }
}
export default Form;