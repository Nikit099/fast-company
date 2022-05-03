import React, { useEffect, useState } from "react";
import {
    useHistory,
    useParams
} from "react-router-dom/cjs/react-router-dom.min";
import API from "../api";

function UserPage() {
    const [user, setUser] = useState(null);
    const params = useParams();
    const { userId } = params;
    useEffect(() => {
        API.users.getById(userId).then((data) => setUser(data));
    }, []);
    const history = useHistory();
    const handleSave = () => {
        history.replace("/users");
    };
    return !user ? (
        <h1>Loading</h1>
    ) : (
        <>
            {console.log(user.qualities)}
            <h1>{user.name}</h1>
            <h3>Профессия: {user.profession.name}</h3>
            <p>
                {user.qualities.map((i) => (
                    <p
                        key={i._id}
                        style={{ margin: "0 5px" }}
                        className={`badge bg-${i.color}`}
                    >
                        {i.name}
                    </p>
                ))}
            </p>
            <p>completedMeetings: {user.completedMeetings}</p>
            <h2>Rate: {user.rate}</h2>
            <button
                onClick={() => {
                    handleSave();
                }}
            >
                Все пользователи
            </button>
        </>
    );
}

export default UserPage;
