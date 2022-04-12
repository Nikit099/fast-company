import React from "react";
import PropTypes from "prop-types";

function Qualite(props) {
    return (
        <span
            style={{ margin: "0 5px" }}
            className={"badge  bg-" + props.color}
        >
            {" "}
            {props.name}
        </span>
    );
}
Qualite.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
export default Qualite;
