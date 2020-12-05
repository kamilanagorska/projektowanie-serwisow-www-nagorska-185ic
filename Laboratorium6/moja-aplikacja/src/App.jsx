import React, {Component} from "react";
import Navbar from './Navbar'
import Form from './Form'
import Function from './Function'
import List from './List'
import './App.css'
import CopyEvent from './CopyEvent'
//jest to komponent klasowy
class App extends Component {
    //konstruktow jest konieczny gdy inicjujemy stan (state)
    constructor(props) {
        //super(props) powinno być zawsze wywoływane gdy używamy konstruktora
        //inaczej this.props będzie mialo wartosc undefined
        super(props);
        //state używane jest, gdy powiązane dane z komponentem zmieniają się w czasie 
        //state zarządza sam komponent 
        //zapisujemy w nim rzeczy, ktore będą się zmieniać w czasie
        //tylko w konstruktorze mozna uzywac this.state, w innych miejscach this.setState()
        this.state = {
            //to jest lista rzeczy, które będą się zmieniać, czyli lista zakupów
            //kazdy ma swoje id, ktore uzyjemy w key, ilosc i tekst
            things: [
                { id: 0, amount: "2", text: "bottles of milk"},
                { id: 1, amount: "10", text: "eggs"},
                { id: 2, amount: "1", text: "bread"},
                { id: 3, amount: "4", text: "kinder country"},
                { id: 4, amount: "3", text: "instant noodles"},
                { id: 5, amount: "1", text: "pepsi"}
            ]
        };
    }
    render(){
        //generowanie komponentów 
        //map wywoluje funkcje a raczej komponent List na każdym elemencie zawartym w state (things)
        //definiujemy tutaj key=id, bo bez tego można otrzymać ostrzeżenie w konsoli, że każdy potomek w liście powinien mieć unikatowy "key"
        const myThings = this.state.things.map(th => {
            return <List key={th.id} amount={th.amount} text={th.text} />
        })
        return(
        <div className="App">
            {/*komponenty zagniezdzone, w komponencie App umieszczam inne komponenty*/}
            {/*komponent potomny Navbar*/}
            <Navbar/>
            <br></br>
            {/*komponent potomny Form, komponent klasowy*/}
            <Form />
            <br></br>
            {/*komponent potomny Function, jest to komponent funkcyjny*/}
            <Function text="my text"/>
            <br></br>
            {/*komponent potomny CopyEvent,wysylanie funkcji za pomocą props*/}
            <CopyEvent onCopy={() => alert("Wow, you copied this text!!!")}/>
            <br></br>
            <b>My Shopping List</b>
            {myThings}
        </div>
        );
    }
}

export default App;
