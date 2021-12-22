import React, { useState, useEffect } from 'react';
import SidePane from '../components/SidePane';
import Content from '../components/Content';
import EditorPanel from '../components/EditorPanel';
import SlateComponent from '../components/SlateComponent';
import axios from 'axios';
import DocumentList from '../components/DocumentList';

import '@remirror/styles/all.css';
import { propIsFunction } from '@remirror/react-utils';

const EditorPage = (props) => {
  // const [renderedDoc, setRenderedDoc] = useState('');
  const [docID, setdocID] = useState('');
  const [initialValue, setInitialValue] = useState(
    ''
    // defaultText
  );
  const [title, setTitle] = useState('');
  const [currentUser, setCurrentUser, authentication, setAuthentication] =
    props.functions;

  const [documentlist, setDocumentlist] = useState([]);

  useEffect(() => {
    // this resets the initialvalue to nothing so that the component page will rerender!
    setInitialValue('');
    console.log('useEffect invoked');
    // console.log(`DocumentID is ${docID}`);
    // if (docId) {
    loadDocument();
    // }

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
  const deletefunc = (e) => {
    e.preventDefault();
    console.log('triggering delete');
    console.log(e.target);
  };

  /* IDEA: let slate component be null and conditionally render onlyl when document list is clikced */
  //elevating from DocumentList

  const getDocuments = async () => {
    // e.preventDefault()
    const result = await axios.get(
      `http://localhost:3001/api/documents/${currentUser}`
    );
    setDocumentlist(result.data.document);
  };

  useEffect(() => {
    getDocuments();
  }, [documentlist]);
  return (
    <div className="editor-container">
      <div className="side-pane-container">
        <button onClick={loadDocument}>getDocID</button>
        <DocumentList
          functions={[
            currentUser,
            setCurrentUser,
            authentication,
            setAuthentication,
            docID,
            setdocID,
            deletefunc
            // documentlist,
            // setDocumentlist
          ]}
          documentlist={documentlist}
          openDoc={(selectedID) => {
            setdocID(selectedID);
          }}
        />
      </div>
      <div className="content-container">
        {/* <EditorPanel /> */}
        <SlateComponent
          initialValue={initialValue}
          docID={docID}
          title={title}
        />
      </div>
    </div>
  );
};

const defaultText = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'The editor gives you full control over the logic you can add. For example, it\'s fairly common to want to add markdown-like shortcuts to editors. So that, when you start a line with "> " you get a blockquote that looks like this:'
      }
    ]
  },
  {
    type: 'block-quote',
    children: [{ text: 'A wise quote.' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Order when you start a line with "## " you get a level-two heading, like this:'
      }
    ]
  },
  {
    type: 'heading-two',
    children: [{ text: 'Try it out!' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Try it out for yourself! Try starting a new line with ">", "-", or "#"s.'
      }
    ]
  }
];

export default EditorPage;
