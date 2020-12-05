import React from "react";
const Form = props => (
<form>
    <div className="form-group">
        <label htmlFor="name">Podaj swoje imię:</label>
        <input 
        type="text" 
        className="form-control" 
        id="name" name="name" 
        value={props.name}
        />
    </div>
    <button 
    id="btn" 
    type="button" 
    className="btn btn-outline-secondary"
    onClick={() => props.onSave()}>Zapisz</button>
</form>
);

export default Form;