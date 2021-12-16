import React, { useState, useEffect } from 'react';
import SidePane from '../components/SidePane';
import Content from '../components/Content';
export default function Editor(props) {
  return (
    <div className="editor-container">
      <div className="side-pane-container">
        <SidePane />
      </div>
      <div className="content-container">
        <Content />
      </div>
    </div>
  );
}
