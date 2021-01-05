import React from "react";
import Home from './Home'
import "./App.css"
//importy z pakieru react-router-dom
import {
  //BrowserRouter odrazu przemianowujemy na Router
  //główny komponent, w kótym umieszczamy całą definicję "routingu"
  BrowserRouter as Router,
  //Switch renderuje pierwsze dziecko <Route>, które pasuje do lokalizaji
  //renderuje wyłącznie trasę
  Switch,
  //Route pozwala na zdefiniowanie poszczególnych ścieżek
  //i powiązanie ich z komponentami
  Route,
  Link,
} from "react-router-dom";


function App() {
  
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#b3cccc'}}>
        <a className="navbar-brand disabled">My Tracker</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        </nav>
        <Switch>
          {/* tu są moje komponenty wraz z trasami*/}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;