import React, {Component} from "react";
import Home from './Home'
import Chat from './Chat'
import Users from './Users'
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
  //Link służy do przełączania się pomiędzy ścieżkami "routingu"
  Link
} from "react-router-dom";
//strona ma 3 podstrony, wszystkie są dynamicznie renderowane w przeglądace a nie przez serwer!
//strona się nie odświeża po wciśnięciu na link do innej podstrony!
//ale React Router utrzymuje aktualność adresu URL podczas nawigacji za pośrednictwem witryny
//Pozwala to zachować historię przeglądarki
class App extends Component {
  render(){
  return (
    <Router>
      <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand disabled">Meet new friends</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link">
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>home</Link>
            <span class="sr-only"></span>
            </a>
            <a class="nav-link">
            <Link to="/chat" style={{ textDecoration: 'none', color: 'black'}}>chat</Link>
            </a>
            <a class="nav-link">
            <Link to="/users" style={{ textDecoration: 'none', color: 'black' }}>users</Link>
            </a>
          </div>
        </div>
        </nav>
        <Switch>
          {/* tu są moje komponenty wraz z tracami*/}
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  }
}
export default App;