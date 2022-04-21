import React from "react";
import PropTypes from "prop-types";

function TableHeader({ onSort, selectedSort, columns, setColumns }) {
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
    const getNewColumn = (column) => {
        if (column.caret === 0 || column.caret === 2) {
            column.obj &&
            setColumns((prev) => ({
                ...prev,
                [column.obj]: { ...column, caret: 1 }
            }));
        } else if (column.caret === 1) {
            column.obj &&
                setColumns((prev) => ({
                    ...prev,
                    [column.obj]: { ...column, caret: 2 }
                }));
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
                                ? () => {
                                    Object.keys(columns).map((i) => (columns[i].obj && setColumns((prevState) => ({ ...prevState, [columns[i].obj]: { ...columns[i], caret: 0 } }))));
                                    handleSort(columns[column].path);
                                    getNewColumn(columns[column]);
                                }
                                : null
                        }
                        scope="col"
                        {...{ role: columns[column].path && "button" }}
                    >
                        {columns[column].name}
                        {columns[column].caret === 1 && (
                            <i className="bi bi-caret-down-fill"></i>
                        )}
                        {columns[column].caret === 2 && (
                            <i className="bi bi-caret-up-fill"></i>
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
    columns: PropTypes.object.isRequired,
    setColumns: PropTypes.func
};

export default TableHeader;
