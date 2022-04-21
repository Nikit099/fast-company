import React from "react";
import PropTypes from "prop-types";

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
Qualitie.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
export default Qualitie;
