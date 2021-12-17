// import React, { useState, useEffect } from 'react';
import SidePane from '../components/SidePane';
// import Content from '../components/Content';
import React, { useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import DocPanel from '../components/DocPanel';

export default function Editor() {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'Write, endlessly...' }]
    }
  ]);
  return (
    <div className="editor-container">
      <div className="side-pane-container">
        <SidePane />
      </div>
      <div className="content-container">
        {/* <Content /> */}
        <DocPanel />
        {/* <Slate
          editor={editor}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        >
          <Editable className="slateBox" />
        </Slate> */}
      </div>
    </div>
  );
}
