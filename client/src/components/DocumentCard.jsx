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

 
  return (
    <div className="card"
    id={props.id}
    onClick={props.onClick}
    
    >
      <div className="info-wrapper">
     
      <span class="material-icons-outlined">description</span>
      <div>{props.title} </div>
        
      
      </div>
      <span style={{float:"right"}} onClick={onDelete} class="material-icons-outlined delete">delete</span>
    </div>
  )
}

export default DocumentCard
