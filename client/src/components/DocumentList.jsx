import React, {useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import DocumentCard from './DocumentCard';

const DocumentList = (props) => {
const [selectedID, setSelectedID] = useState('')
// const [documentlist, setDocumentlist] = useState([])
// const [documentState, setDocumentState ] = useState(true)
const [ newdoc, setNewdoc] = useState({
  title: "",
  userID: "",
  content: [{
    type: 'paragraph',
    children: [ { text: "" } ]
  }]
});
const [currentUser,
  setCurrentUser,
  authentication,
  setAuthentication,
  docID,
  setDocID,
  getDocuments,
  documentState, 
  setDocumentState,
  setDocumentlist
  ] = props.functions

const handleChange = (e) => {
  console.log(e.target.value)
  console.log(currentUser)
  setNewdoc({...newdoc, "userID": currentUser, [e.target.name]: e.target.value });
  console.log({...newdoc, "userID": currentUser, [e.target.name]: e.target.value });
};
const createNewDoc = (e) => {
  e.preventDefault();
  console.log('Triggering new document');
  console.log(newdoc);
  axios.post('http://localhost:3001/api/documents',newdoc);
  // getDocuments();
  setDocumentState(newdoc)
  console.log(documentState)
}

// useEffect(()=>{
//   getDocuments()
// },[documentState])


  return (
    <div>
      <form onSubmit={createNewDoc}>
        <input 
          type="text"
          placeholder="Title here"
          name="title"
          onChange={handleChange}
        />
        <button type="submit">New document</button>
        </form>
      {/* map result from axios call into each card */}
      <section className="filelist">
        {props.documentlist.map((doc)=> (
          <div className="documentCard">
            <DocumentCard
            key={doc._id}
            title={doc.title}
            id={doc._id}
            functions={[documentState,setDocumentState]}
            onClick={()=> {
              // openDoc(doc._id)
              setDocID(doc._id)
              setSelectedID(doc._id);
              // setDocumentState(true)
              getDocuments()
              }            
            }
          />
        </div>

        )
        )}
      </section>
    </div>
  )

}

export default DocumentList