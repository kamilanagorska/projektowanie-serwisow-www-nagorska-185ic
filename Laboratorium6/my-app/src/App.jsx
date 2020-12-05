import React, {Component} from "react";
import "./App.css"
import Hello from './Hello'
import Navbar from './Navbar'
import Form from './Form'

class App extends Component {
    constructor(){
        super();
    }
    render(){
        <Navbar />
        <br></br><br></br>
        <Form onSave={() => alert("Dziala!")}/>
        <Hello />

    }
}
export default App;