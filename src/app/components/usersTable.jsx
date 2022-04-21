import React, { useState } from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import BookMark from "./bookmark";
import QualitiesList from "./qualitiesList";
import Table from "./table";

function UsersTable({
    users,
    onSort,
    selectedSort,
    onToggleBookMark,
    onDelete
}) {
    const [columns, setColumns] = useState({
        name: {
            path: "name",
            name: "Имя",
            caret: 0,
            obj: "name"
        },
        qualities: {
            name: "Качества",
            component: (user) => <QualitiesList qualities={user.qualities} />
        },
        professions: {
            path: "profession.name",
            name: "Профессия",
            caret: 0,
            obj: "professions"
        },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз",
            caret: 0,
            obj: "completedMeetings"
        },
        rate: {
            path: "rate",
            name: "Оценка",
            caret: 0,
            obj: "rate"
        },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            obj: "bookmark",
            caret: 0,
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    onClick={() => onToggleBookMark(user._id)}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    onClick={() => {
                        onDelete(user._id);
                    }}
                    className="btn btn-danger"
                >
                    delete
                </button>
            )
        }
    });
    return (
        <Table>
            <TableHeader {...{ onSort, selectedSort, columns, setColumns }} />
            <TableBody {...{ columns, data: users }} />
        </Table>
    );
}
UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};
export default UsersTable;
