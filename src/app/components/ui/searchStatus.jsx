import React from "react";
import PropTypes from "prop-types";

function SearchStatus({ length }) {
    const renderPhrase = (namber) => {
        return namber >= 2 && namber <= 4 ? "человека" : "человек";
    };
    return !length ? (
        <h1>
            <span className="badge bg-danger">Никто с тобой не тусанет</span>
        </h1>
    ) : (
        <h1>
            <span className="badge bg-primary">
                {length} {renderPhrase(length)} тусанет с тобой сегодня
            </span>
        </h1>
    );
}
SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};
export default SearchStatus;
