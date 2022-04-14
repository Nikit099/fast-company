import React, { useEffect, useState } from "react";
import API from "./api/indeex";
import Users from "./components/users";

const App = () => {
    const [users, setUsers] = useState(null);
    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);
    const handleDelete = (userId) => {
        setUsers(users.filter((i) => i._id !== userId));
    };

    return <>{users && <Users users={users} handleDelete={handleDelete} />}</>;
};

export default App;
