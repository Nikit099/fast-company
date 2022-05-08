import React from "react";

function Qualitie(props) {
    return (
        <span
            style={{ margin: "0 5px" }}
            className={"badge  bg-" + props.color}
        >
            {props.name}
        </span>
    );
}

export default Qualitie;
