/*---------------
Source:
https://github.com/hubgit/react-prosemirror
---------------*/

import { useState } from 'react';
import { HtmlEditor, Toolbar, Editor } from '@aeaton/react-prosemirror';
import {
  plugins,
  schema,
  toolbar
} from '@aeaton/react-prosemirror-config-default';
import { Schema } from 'prosemirror-model';
import { toggleMark } from 'prosemirror-commands';
import { baseKeymap } from 'prosemirror-commands';
import { keymap } from 'prosemirror-keymap';
import { history, undo, redo } from 'prosemirror-history';
import { createHTMLTransformer } from '@aeaton/prosemirror-transformers';
import { createMarkdownTransformer } from '@aeaton/prosemirror-transformers';
import { isMarkActive } from '@aeaton/prosemirror-commands';
import { EditorProvider } from '@aeaton/react-prosemirror';
import { useEditorState } from '@aeaton/react-prosemirror';
const initialValue = '<p></p>';

/*---------------
Schema
---------------*/

const myschema = new Schema({
  nodes: {
    // a text node
    text: {},
    // a top-level doc node, which can contain at least one paragraph
    doc: {
      content: 'paragraph+'
    },
    // a paragraph node, which can contain some text nodes, represented in HTML as `<p>`
    paragraph: {
      content: 'text*',
      parseDOM: [{ tag: 'p' }],
      toDOM: () => ['p', 0]
    }
  },
  marks: {
    // a strong mark, represented in HTML as `<strong>`
    strong: {
      parseDOM: [{ tag: 'strong' }],
      toDOM: () => ['strong', 0]
    },
    // an emphasis mark, represented in HTML as `<em>`
    emphasis: {
      parseDOM: [{ tag: 'em' }],
      toDOM: () => ['em', 0]
    }
  }
});

/*---------------
Commands
---------------*/

const toggleMarkStrong = toggleMark(schema.marks.strong);
const toggleMarkEmphasis = toggleMark(schema.marks.emphasis);

/*---------------
Plugins for history and key pressses
---------------*/

const myplugins = [
  history(),
  keymap({
    'Mod-z': undo,
    'Shift-Mod-z': redo,
    'Mod-b': toggleMarkStrong,
    'Mod-i': toggleMarkEmphasis
  }),
  keymap(baseKeymap)
];

/*---------------
Toolbar definition
---------------*/
const mytoolbar = [
  {
    id: 'marks',
    items: [
      {
        id: 'toggle-strong',
        // content: icons.strong,
        action: toggleMarkStrong,
        enable: toggleMarkStrong,
        active: isMarkActive(myschema.marks.strong)
      },
      {
        id: 'toggle-emphasis',
        title: 'Toggle emphasis',
        // content: icons.emphasis,
        action: toggleMarkEmphasis,
        enable: toggleMarkEmphasis,
        active: isMarkActive(myschema.marks.emphasis)
      }
    ]
  }
];

/*------------
Create a doc by parsing HTML
------------*/

const transformer = createHTMLTransformer(myschema);
// const transformer = createMarkdownTransformer(myschema);
const doc = transformer.parse('<p>Hello World!</p>');

/* ------------
Tool for using Editor State
const ExampleComponent = () => {
  const state = useEditorState()
  
  // do something with the current state
}
------------ */

const ReactProsemirror = () => {
  /* --- custom Editor --- */
  return (
    <EditorProvider doc={doc} plugins={myplugins}>
      <Toolbar toolbar={mytoolbar} />
      <Editor />
    </EditorProvider>
  );

  /* ----- basic HTML Editor ----
  const [value, setValue] = useState(initialValue);

  console.log({ value });

  return (
    <HtmlEditor
      schema={schema}
      plugins={plugins}
      value={initialValue}
      handleChange={setValue}
      debounce={250}
    >
      <Toolbar toolbar={toolbar} />
      <Editor autoFocus />
    </HtmlEditor>
  );

  ----- */
};

export default ReactProsemirror;
