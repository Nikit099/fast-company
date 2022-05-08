import React from "react";
import PropTypes from "prop-types";

function TableHeader({ onSort, selectedSort, columns }) {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort((selectedSort) => ({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            }));
        } else {
            onSort({ path: item, order: "asc" });
        }
    };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : null
                        }
                        scope="col"
                        {...{ role: columns[column].path && "button" }}
                    >
                        {columns[column].name}
                        {columns[column].path === selectedSort.path && (
                            <i
                                className={
                                    "bi bi-caret-" +
                                    (selectedSort.order === "asc"
                                        ? "down"
                                        : "up") +
                                    "-fill"
                                }
                            ></i>
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    );
}
TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
