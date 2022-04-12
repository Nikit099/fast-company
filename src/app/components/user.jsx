import React from "react";
import Bookmark from "./bookmark";
import Qualite from "./qualite";
import PropTypes from "prop-types";

const User = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>
                {props.qualities.map((qualite) => (
                    <Qualite key={qualite._id} {...qualite} />
                ))}
            </td>
            <td key={props.profession._id}>{props.profession.name}</td>
            <td>{props.completedMeetings}</td>
            <td>{props.rate}/5</td>
            <td>
                {" "}
                <Bookmark bookmark={props.bookmark} />{" "}
            </td>
            <td>
                <button
                    onClick={() => props.handleDelete(props._id)}
                    type="button"
                    className="btn btn-danger"
                >
                    delete
                </button>
            </td>
        </tr>
    );
};
User.propTypes = {
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.string.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    handleDelete: PropTypes.func.isRequired,
    _id: PropTypes.number.isRequired
};
export default User;
