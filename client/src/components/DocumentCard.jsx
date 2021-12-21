import React from 'react'
import axios from 'axios';

const DocumentCard = (props) => {
  const onDelete = () => {
    console.log(props.id)
    axios.delete(`http://localhost:3001/api/document/${props.id}`)
  }
  return (
    <div className="card" 
    onClick={props.onClick}
    >
      <div className="info wrapper">
        <h3>{props.title}</h3>
        {/* <button onClick={props.deletefunc}>delete</button> */}
        <span className="delete-btn" onClick={onDelete
          // () => {console.log(props.id)}
        }>
            &times;</span>
      </div>
      
    </div>
  )
}

export default DocumentCard
