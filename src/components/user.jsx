import React from 'react';
import Bookmark from './bookmark';
import Qualite from './qualite';

const User = (props) => {

    return (
        <tr >
                <td>{props.name}</td>
                <td>{props.qualities.map(qualite => (
                   <Qualite key={qualite._id} {...qualite} />
                ))}</td>
                <td key={props.profession._id} >{props.profession.name}</td>
                <td  >{props.completedMeetings}</td>
                <td  >{props.rate}/5</td>
                <td  >  <Bookmark/> </td>
                <td  ><button onClick={() => props.handleDelete(props._id)} type="button" className="btn btn-danger">delete</button></td>
      
                
                    </tr>
    );
};

export default User;