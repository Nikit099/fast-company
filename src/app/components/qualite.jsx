import React from 'react'

function Qualite(props) {
    return (
        <span style={{margin: '0 5px'}}  className = { 'badge  bg-' + props.color}> { props.name}</span >
    )
}

export default Qualite
