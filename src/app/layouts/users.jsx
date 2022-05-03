import React, { useState, useEffect } from "react";
import Pagination from "../components/pagination";
import { paginate } from "../utils/paginate";
import GroupList from "../components/groupList";
import API from "../api";
import SearchStatus from "../components/searchStatus";
import UsersTable from "../components/usersTable";
import _ from "lodash";

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    const [users, setUsers] = useState(null);
    const [searchName, setSearchName] = useState("");
    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);
    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };
    const handleDelete = (userId) => {
        setUsers(users.filter((i) => i._id !== userId));
    };
    const pageSize = 5;
    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfessions(data));
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);
    useEffect(() => {
        setCurrentPage(1);
    }, [searchName]);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleProfessionSelect = (item) => {
        setSearchName("");
        setSelectedProf(item);
    };
    const handleSort = (item) => {
        setSortBy(item);
    };
    const handleSearchName = ({ target }) => {
        setSelectedProf();
        setSearchName(target.value);
    };
    if (users) {
        const filteredUsers = selectedProf
            ? users.filter(
                  (user) =>
                      JSON.stringify(user.profession) ===
                      JSON.stringify(selectedProf)
              )
            : searchName ? users.filter(
                user => user.name.toLowerCase().includes(searchName.toLowerCase())
            ) : users;
        const count = filteredUsers.length;

        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );

        const userCrop = paginate(sortedUsers, currentPage, pageSize);
        const clearFilter = () => {
            setSelectedProf();
        };
        return (
            <div className="d-flex justify-content-center">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    <input type="text" placeholder="Search..." className="form-control" value={searchName} onChange={handleSearchName}/>

                    {count > 0 && (
                        <UsersTable
                            onSort={handleSort}
                            users={userCrop}
                            onToggleBookMark={handleToggleBookMark}
                            onDelete={handleDelete}
                            selectedSort={sortBy}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            currentPage={currentPage}
                            itemsCount={count}
                            pageSize={pageSize}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return "loading";
};

export default Users;
