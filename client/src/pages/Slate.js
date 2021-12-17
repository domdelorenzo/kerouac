import React, { useMemo, useState, useEffect } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

const SlateEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'Write, endlessly...' }]
    }
  ]);
  return (
    <div>
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      >
        <Editable className="slateBox" />
      </Slate>
    </div>
  );
};

export default SlateEditor;
