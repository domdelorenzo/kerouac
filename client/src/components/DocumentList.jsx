import React, {useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import DocumentCard from './DocumentCard';


const DocumentList = () => {
// make Axios call to get all documents
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
          // add button for deletion
        ></DocumentCard>

        )
        )}
      </section>
    </div>
  )

}

export default DocumentList