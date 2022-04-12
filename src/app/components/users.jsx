import React from 'react';
import { useState } from 'react';
import Pagination from './pagination';
import SearchStatus from './searchStatus';
import User from './user';
import { paginate } from '../utils/paginate';

const Users = ({users, ...rest}) => {
   const [currentPage, setCurrentPage] = useState(1)
    const count = users.length
    const pageSize = 5
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }
   
    const userCrop = paginate(users, currentPage, pageSize)
   
   
    return (
        !count ? <SearchStatus length = {count} /> 
        :
        <>
      <SearchStatus  length = {count} />

                <table className="table">
            <thead>
                <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col">Избранное</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {userCrop.map(user => (
                   <User key={user._id} {...user}  handleDelete = {rest.handleDelete} />
                    
                ))}
            </tbody>
            </table>
            <Pagination currentPage = {currentPage} itemsCount = {count} pageSize = {pageSize} onPageChange = {handlePageChange} />
                </> 
    );
};

export default Users;