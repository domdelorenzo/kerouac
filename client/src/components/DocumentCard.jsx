import React from 'react'


const DocumentCard = (props) => {

  return (
    <div className="card" 
    // onClick={props.onClick}
    >
      <div className="info wrapper">
        <h3>{props.name}</h3>
      </div>
    </div>
  )
}

export default DocumentCard
