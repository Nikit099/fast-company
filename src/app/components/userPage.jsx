import React, { useEffect, useState } from "react";
import API from "../api/indeex";
import { Link } from "react-router-dom";

function UserPage({ match }) {
    const [user, setUser] = useState(null);
    const userId = match.params.userId;
    useEffect(() => {
        API.users.getById(userId).then(data => setUser(data));
    }, []);
    return (
       !user ? <h1>Loading</h1> : <>
       {console.log(user.qualities)}
            <h1>{user.name}</h1>
            <h3>Профессия: {user.profession.name}</h3>
            <p>{user.qualities.map(i => (
                <p key={i._id} style={{ margin: "0 5px" }} className={`badge bg-${i.color}`}>
                    {i.name}
                </p>
            ))}</p>
            <p>completedMeetings: {user.completedMeetings}</p>
            <h2>Rate: {user.rate}</h2>
            <Link to='/users'> <button> Все пользователи </button></Link>
        </>
    );
}

export default UserPage;
