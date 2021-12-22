import React, { useState, useEffect } from 'react';
import SidePane from '../components/SidePane';
import Content from '../components/Content';
import EditorPanel from '../components/EditorPanel';
import SlateComponent from '../components/SlateComponent';
import axios from 'axios';
import DocumentList from '../components/DocumentList';
import { get } from 'mongoose';

const EditorPage = (props) => {
  const [docID, setdocID] = useState('');
  const [initialValue, setInitialValue] = useState('');
  const [title, setTitle] = useState('');
  const [currentUser, setCurrentUser, authentication, setAuthentication] =
    props.functions;

  const [documentlist, setDocumentlist] = useState([]);
  const [documentState, setDocumentState] = useState('');
  useEffect(() => {
    // this resets the initialvalue to nothing so that the component page will rerender!
    setInitialValue('');
    console.log('useEffect invoked');
    // console.log(`DocumentID is ${docID}`);

    loadDocument();

    return;
  }, [docID]);

  const loadDocument = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/document/${docID}`
    );
    console.log(docID);
    // console.log(response.data.document.content);
    setInitialValue(response.data.document.content);
    setTitle(response.data.document.title);
    return;
  };

  /* IDEA: let slate component be null and conditionally render onlyl when document list is clikced */
  //elevating from DocumentList

  const getDocuments = async () => {
    // e.preventDefault()
    const result = await axios.get(
      `http://localhost:3001/api/documents/${currentUser}`
    );
    setDocumentlist(result.data.document);
    console.log('getDocuments run');
  };

  useEffect(() => {
    console.log(documentState);
    getDocuments();
  }, [documentState]);
  return (
    <div className="editor-container">
      <div className="side-pane-container">
        <DocumentList
          functions={[
            currentUser,
            setCurrentUser,
            authentication,
            setAuthentication,
            docID,
            setdocID,
            getDocuments,
            documentState,
            setDocumentState,
            setDocumentlist
          ]}
          documentlist={documentlist}
        />
      </div>
      <div className="content-container">
        <SlateComponent
          initialValue={initialValue}
          docID={docID}
          title={title}
        />
      </div>
    </div>
  );
};

export default EditorPage;
