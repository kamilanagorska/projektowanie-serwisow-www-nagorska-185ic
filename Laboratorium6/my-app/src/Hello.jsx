import React from "react";
import "./Hello.css"

// funkcja strzałkowa bez parametrów
const Hello = () => (
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
);

export default Hello;