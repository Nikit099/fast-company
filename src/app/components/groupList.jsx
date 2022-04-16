import React from "react";
import PropTypes from "prop-types";
const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    if (!Array.isArray(items)) {
        return (
            <ul className="list-group">
                {Object.keys(items).map((i) => (
                    <li
                        className={
                            "list-group-item" +
                            (items[i] === selectedItem ? " active" : "")
                        }
                        onClick={() => onItemSelect(items[i])}
                        key={items[i][valueProperty]}
                        role="button"
                    >
                        {items[i][contentProperty]}
                    </li>
                ))}
            </ul>
        );
    }
    return (
        <ul className="list-group">
            {items.map((i) => (
                <li
                    className={
                        "list-group-item" +
                        (i === selectedItem ? " active" : "")
                    }
                    key={i[valueProperty]}
                    role="button"
                    onClick={() => onItemSelect(i)}
                >
                    {i[contentProperty]}
                </li>
            ))}
        </ul>
    );
};
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};
GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
export default GroupList;
