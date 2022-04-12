import React, { useState } from "react";
import API from "./api/indeex";
import Users from "./components/users";

const App = () => {
    const [users, setUsers] = useState(API.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers(users.filter((i) => i._id !== userId));
    };
    return (
        <>
            <Users users={users} handleDelete={handleDelete} />
        </>
    );
};

export default App;
