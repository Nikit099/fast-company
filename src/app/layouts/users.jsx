import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
import EditPage from "../components/page/editPage";
const Users = () => {
    const params = useParams();
    const { userId } = params;
    if (userId) {
        return <UserPage userId={userId} />;
    } else if (useLocation().pathname.includes("edit")) {
       return <EditPage/>;
    } else {
        return <UsersListPage />;
    }
};

export default Users;
