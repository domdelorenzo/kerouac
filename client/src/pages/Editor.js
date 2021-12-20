import React, { useState } from 'react';
import SidePane from '../components/SidePane';
import Content from '../components/Content';
import EditorPanel from '../components/EditorPanel';
import SlateComponent from '../components/SlateComponent';

import '@remirror/styles/all.css';

export default function Editor() {
  const [renderedDoc, setRenderedDoc] = useState(null);

  return (
    <div className="editor-container">
      <div className="side-pane-container">
        <SidePane />
      </div>
      <div className="content-container">
        {/* <EditorPanel /> */}
        <SlateComponent />
      </div>
    </div>
  );
}
