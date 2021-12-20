import React, {useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import DocumentCard from './DocumentCard';
import { propIsFunction } from '@remirror/react-utils';
import { set } from 'mongoose';


const DocumentList = ({openDoc}) => {
const [selectedID, setSelectedID] = useState('')
const [documentlist, setDocumentlist] = useState([])
const [ newdoc, setNewdoc] = useState({
  name: '',
  userID: 'ddeloren',
  content: []
});

const getDocuments = async () => {
  // e.preventDefault()
  const result = await axios.get('http://localhost:3001/api/documents')
  console.log(result.data.documents[0].name)
  setDocumentlist(result.data.documents)
}
useEffect(()=> {
  getDocuments()
},[])
const handleChange = (e) => {
  setNewdoc({[e.target.name]: e.target.value });
  console.log({[e.target.name]: e.target.value });
};
const createNewDoc = (e) => {
  e.preventDefault()
  axios.post('http://localhost:3001/api/documents',newdoc)
  console.log('Triggering new document')
}

// const [docID, setDocID] = useState('')
const cardClick = (e) => {
  console.log('Click!')
  // console.log(selectedID)
}
  return (
    <div>
      {/* <button onClick={getDocuments}>Get documents</button> */}
      {/* Place new doc button here */}
      <form onsubmit={createNewDoc}>
        <input 
          type="text"
          placeholder="Title here"
          name="name"
          // title={title}
          onChange={handleChange}
        />
        <button type="submit">New document</button>
        </form>
      {/* map result from axios call into each card */}
      <section className="filelist">
        {documentlist.map((doc)=> (
          <DocumentCard
          key={doc._id}
          name={doc.name}
          //pass prop to load doc
          onClick={()=> {
            openDoc(doc._id)
            setSelectedID(doc._id);
            cardClick()
          }
            }
          // onClick={()=>{console.log(doc.name)}}
          // onClick={()=>setDocID(doc.name)}
          // add button for deletion
        ></DocumentCard>

        )
        )}
      </section>
    </div>
  )

}

export default DocumentList