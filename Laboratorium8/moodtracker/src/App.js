import React from "react";
import Home from './Home'
import "./App.css"

function App() {
  return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#b3cccc'}}>
        <a className="navbar-brand disabled">My Tracker</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        </nav>
        <Home />
        </div>
  );
}
export default App;

