import React, { useState } from 'react';
import API from '../api/indeex';
import 'bootstrap/dist/css/bootstrap.css'
const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll())
    const handleDelete = userId => {
        setUsers(users.filter(i => i._id  !== userId ))
    }
    const renderPhrase = namber => {
        
      return  namber >= 2 && namber <= 4 ? 'человека' : 'человек'
    }
    return (
          users.length === 0 ?  <h1><span className="badge bg-danger">Никто с тобой не тусанет</span>  </h1>
        :
        <>
        <h1>
        <span className="badge bg-primary">{users.length} {renderPhrase(users.length)} тусанет с тобой сегодня</span>
                </h1>
                <table className="table">
            <thead>
                <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {users.map(i => (
                    <tr key={i._id}>
                <td>{i.name}</td>
                <td>{i.qualities.map(y => (
                    <span style={{margin: '0 5px'}} key={y._id} className = { 'badge  bg-' + y.color}  > { y.name}</span >
                ))}</td>
                <td key={i.profession._id} >{i.profession.name}</td>
                <td  >{i.completedMeetings}</td>
                <td  >{i.rate}/5</td>
                <td  ><button onClick={() => handleDelete(i._id)} type="button" className="btn btn-danger">delete</button></td>
                
                    </tr>
                    
                ))}
                
            </tbody>
            </table>
                </> 
    );
};

export default Users;