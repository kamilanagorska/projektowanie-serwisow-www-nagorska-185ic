import React from "react";
import PropTypes from "prop-types";
//listowanie danych przekazanych z komponentu nadrzędnego 
//lista z bootstrapa
const List = props => (
    <div className="List">
        <ul className="list-group">
            <li className="list-group-item disabled">{props.amount} {props.text}</li>
        </ul>
    </div>
);
//okreslenie typow, tylko string inaczej warning
List.propTypes = {
    amount: PropTypes.string,
    text: PropTypes.string
  };
export default List;
