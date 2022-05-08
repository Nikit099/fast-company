import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            <h3>
                <i
                    className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}
                ></i>
            </h3>
        </button>
    );
};
BookMark.propTypes = {
    status: PropTypes.bool.isRequired
};
export default BookMark;
