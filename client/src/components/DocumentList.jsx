import React, {useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import DocumentCard from './DocumentCard';
import { propIsFunction } from '@remirror/react-utils';
import { set } from 'mongoose';


const DocumentList = ({openDoc}) => {
const [selectedID, setSelectedID] = useState('')
const [documentlist, setDocumentlist] = useState([])
const [ newdoc, setNewdoc] = useState({
  title: "",
  userID: "ddeloren",
  content: [{
    type: 'paragraph',
    children: [ { text: "" } ]
  }]
});

const getDocuments = async () => {
  // e.preventDefault()
  const result = await axios.get('http://localhost:3001/api/documents')
  console.log(result.data.documents[0].title)
  setDocumentlist(result.data.documents)
}
useEffect(()=> {
  getDocuments()
},[])
const handleChange = (e) => {
  setNewdoc({...newdoc, [e.target.name]: e.target.value });
  console.log({...newdoc, [e.target.name]: e.target.value });
};
const createNewDoc = (e) => {
  e.preventDefault();
  console.log('Triggering new document');
  console.log(newdoc);
  axios.post('http://localhost:3001/api/documents',newdoc)

}


  const deletefunc = (e) => {
    e.preventDefault();
    console.log('triggering delete')
    console.log(e.target)
  }

  return (
    <div>
      <form onSubmit={createNewDoc}>
        <input 
          type="text"
          placeholder="Title here"
          name="title"
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
          title={doc.title}
          id={doc._id}
          //pass prop to load doc
          onClick={()=> {
            openDoc(doc._id)
            setSelectedID(doc._id);
          }
          
            }
            deletefunc={deletefunc}
        ></DocumentCard>
        

        )
        )}
      </section>
    </div>
  )

}

export default DocumentList