import React from 'react'
import axios from 'axios';

const DocumentCard = (props) => {
  const [documentState, setDocumentState] = props.functions
  const onDelete = () => {
    console.log(props.id)
    axios.delete(`http://localhost:3001/api/document/${props.id}`)
    setDocumentState(props.id)
    console.log(documentState)
    console.log('onDelete run')
  }
  // const onDelete = props.functions
  return (
    <div className="card" 
    onClick={props.onClick}
    >
      <div className="info wrapper">
     


        <p> 
          <span class="material-icons-outlined">description
          </span>
          {props.title}
          <span style={{float:"right"}} onClick={onDelete} class="material-icons-outlined">
            delete
            </span></p>
      </div>
      
    </div>
  )
}

export default DocumentCard
