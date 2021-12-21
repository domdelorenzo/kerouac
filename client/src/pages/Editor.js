import React, { useState, useEffect } from 'react';
import SidePane from '../components/SidePane';
import Content from '../components/Content';
import EditorPanel from '../components/EditorPanel';
import SlateComponent from '../components/SlateComponent';
import axios from 'axios';
import DocumentList from '../components/DocumentList';

import '@remirror/styles/all.css';

const Editor = () => {
  // const [renderedDoc, setRenderedDoc] = useState('');
  const [docID, setdocID] = useState('');
  const [initialValue, setInitialValue] = useState(defaultText);

  // useEffect(() => {
  //   // console.log(docID);
  //   console.log('useEffect invoked');
  //   // console.log(`DocumentID is ${docID}`);
  //   loadDocument();
  //   return;
  // }, [docID]);

  const loadDocument = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/document/${docID}`
    );
    console.log(docID);
    // console.log(response.data.document.content);
    setInitialValue(response.data.document.content);
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
        <SlateComponent initialValue={initialValue} />
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

export default Editor;
