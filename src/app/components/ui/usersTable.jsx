import React from "react";
import PropTypes from "prop-types";
import TableHeader from "../common/table/tableHeader";
import TableBody from "../common/table/tableBody";
import BookMark from "../common/bookmark";
import QualitiesList from "./qualities/qualitiesList";
import Table from "../common/table";

function UsersTable({
    users,
    onSort,
    selectedSort,
    onToggleBookMark,
    onDelete
}) {
    const columns = {
        name: {
            path: "name",
            name: "Имя"
        },
        qualities: {
            name: "Качества",
            component: (user) => <QualitiesList qualities={user.qualities} />
        },
        professions: {
            path: "profession.name",
            name: "Профессия"
        },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: {
            path: "rate",
            name: "Оценка"
        },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
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
    };
    return (
        <Table>
            <TableHeader {...{ onSort, selectedSort, columns }} />
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
