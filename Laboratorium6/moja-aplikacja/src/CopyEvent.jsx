import React from "react";
//komponent potomny, do ktorego przesylana jest funkcja za pomocą "props"
//ktora wydarzy się, gdy skopiowany zostanie wyświetlany tekst
const CopyEvent = props => {
    return (
        <div className="CopyEvent">
            <b onCopy={() => props.onCopy()}>!! Copy this text !!</b>
        </div>
    );
};
export default CopyEvent;