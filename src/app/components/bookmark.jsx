import React, { useState } from "react";
import PropTypes from "prop-types";

function Bookmark(props) {
    const [bookmark, setBookmark] = useState(props.bookmark);
    const handleBookmark = () => {
        setBookmark(!bookmark);
    };
    return (
        <button onClick={handleBookmark}>
            {bookmark ? (
                <h4>
                    <i className="bi bi-bookmark-check"></i>
                </h4>
            ) : (
                <h4>
                    <i className="bi bi-bookmark"></i>
                </h4>
            )}
        </button>
    );
}
Bookmark.propTypes = {
    bookmark: PropTypes.bool.isRequired
};
export default Bookmark;
