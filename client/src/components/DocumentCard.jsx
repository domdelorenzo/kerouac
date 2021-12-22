import React from 'react'
import axios from 'axios';

const DocumentCard = (props) => {
  const onDelete = () => {
    console.log(props.id)
    axios.delete(`http://localhost:3001/api/document/${props.id}`)
  }
  // const onDelete = props.functions
  return (
    <div className="card" 
    onClick={props.onClick}
    >
      <div className="info wrapper">
        <h3>{props.title}</h3>
        {/* <button onClick={props.deletefunc}>delete</button> */}
        {/* <span className="delete-btn" onClick={onDelete}>
            &times;</span> */}
            <button onClick={onDelete}>Delete</button>
      </div>
      
    </div>
  )
}

export default DocumentCard
