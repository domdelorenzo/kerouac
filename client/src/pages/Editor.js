import React, { useState, useEffect } from 'react';
import SidePane from '../components/SidePane';
import Content from '../components/Content';
import EditorPanel from '../components/EditorPanel';
import SlateComponent from '../components/SlateComponent';
import axios from 'axios';
import DocumentList from '../components/DocumentList';

import '@remirror/styles/all.css';

export default function Editor() {
  // const [renderedDoc, setRenderedDoc] = useState('');
  const [docID, setdocID] = useState('');
  const [initialValue, setInitialValue] = useState('');

  // setdocID('61bfb6ee631ad13ebdefabe5');

  // const loadDocument = async () => {
  //   // const response = await axios.get(
  //   //   `http://localhost:3001/api/document/${docID}`
  //   // );
  //   console.log(docID);
  //   // console.log(response);
  // };

  useEffect(() => {
    // console.log(docID);
    console.log('useEffect invoked');
    // console.log(`DocumentID is ${docID}`);
    loadDocument();
    return;
  });

  const loadDocument = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/document/${docID}`
    );
    console.log(docID);
    console.log(response.data.document.content);
    setInitialValue(response.data.document);
    return;
  };

  return (
    <div className="editor-container">
      <div className="side-pane-container">
        <button onClick={loadDocument}>getDocID</button>
        <DocumentList
          openDoc={(selectedID) => {
            setdocID(selectedID);
          }}
        />
      </div>
      <div className="content-container">
        {/* <EditorPanel /> */}
        <SlateComponent
          initialValue={initialValue}
          // docID={renderedDoc}
          // render={}
          //pass prop to load renderedDoc
        />
      </div>
    </div>
  );
}
