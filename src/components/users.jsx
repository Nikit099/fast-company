import React, { useState } from 'react';
import API from '../api/indeex';
import SearchStatus from './searchStatus';
import User from './user';
const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll())
    const handleDelete = userId => {
        setUsers(users.filter(i => i._id  !== userId ))
    }
    
    return (
        !users.length ? <SearchStatus length = {users.length} /> 
        :
        <>
      <SearchStatus length = {users.length} />

                <table className="table">
            <thead>
                <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col"></th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                   <User key={user._id} {...user}  handleDelete = {handleDelete} />
                    
                ))}
            </tbody>
            </table>
                </> 
    );
};

export default Users;