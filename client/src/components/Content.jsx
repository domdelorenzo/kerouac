import React, { useMemo, useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

export default function Content() {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState([{text:'Write, endlessly...'}])
  return(
    <div>
      <Slate
        editor={editor}
        value={value}
        onChange={newValue=>setValue(newValue)}
      >
        <Editable />
        </Slate>
    </div>
  )
}