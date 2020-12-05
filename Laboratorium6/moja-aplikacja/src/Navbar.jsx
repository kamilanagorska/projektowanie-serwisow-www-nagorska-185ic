import React from "react";
import "./Navbar.css"
const Navbar = () => (
  //pasek menu (navbar) bootstrapa
  <div className="navbar">
    <nav className="navbar navbar-light">
      <a className="navbar-brand" href='/public/index.html'>
        My first React App
      </a>
    </nav>
</div>
);
export default Navbar;