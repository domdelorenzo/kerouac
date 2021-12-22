import React, {useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import DocumentCard from './DocumentCard';


const DocumentList = (props, {openDoc}) => {
const [selectedID, setSelectedID] = useState('')
// const [documentlist, setDocumentlist] = useState([])
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
  deletefunc,
  // documentlist,
  // setDocumentlist
  ] = props.functions
// const getDocuments = async () => {
//   // e.preventDefault()
//   const result = await axios.get(`http://localhost:3001/api/documents/${currentUser}`)
//   console.log(currentUser)
//   console.log(result.data.document[0])
//   setDocumentlist(result.data.document)
// }
// useEffect(()=> {
//   getDocuments()
// },[])
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
  axios.post('http://localhost:3001/api/documents',newdoc)

}


  // const deletefunc = (e) => {
  //   e.preventDefault();
  //   console.log('triggering delete')
  //   console.log(e.target)
  // }

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
            //pass prop to load doc
            onClick={()=> {
              // openDoc(doc._id)
              setDocID(doc._id)
              setSelectedID(doc._id);
            }
            
              }
              // deletefunc={deletefunc}
              
          />
        </div>

        )
        )}
      </section>
    </div>
  )

}

export default DocumentList