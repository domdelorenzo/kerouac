import React from 'react';
import SidePane from '../components/SidePane';
import Content from '../components/Content';
import EditorPanel from '../components/EditorPanel';

export default function Editor() {
  return (
    <div className="editor-container">
      <div className="side-pane-container">
        <SidePane />
      </div>
      <div className="content-container">
        <EditorPanel />
      </div>
    </div>
  );
}
