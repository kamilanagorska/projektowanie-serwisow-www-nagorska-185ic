import React from 'react';
import PropTypes from "prop-types";
import './Function.css'
//Jest to komponent funkcyjny
//W App jest on umieszczany i przekazywane są do niego dane (text), który później zostaje wyświetlany
function MyFunction(props) {
    return (
        <div className="myFunction">
            <b className="mytext">This text is being shown by function MyFunction and this text: "{props.text}" was sent to this function</b>
        </div>
    )
}
//ogranicza to typ zmiennej text, może być on tylko stringiem, jeśli nie to będzie ostrzeżenie
MyFunction.propTypes = {
    text: PropTypes.string
}
export default MyFunction;