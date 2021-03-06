import '../style/Slate.css';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import {
  Editor,
  Transforms,
  Range,
  Point,
  createEditor,
  Element as SlateElement
} from 'slate';
import { withHistory } from 'slate-history';
import isHotkey from 'is-hotkey';
import axios from 'axios';

const SHORTCUTS = {
  '*': 'list-item',
  '-': 'list-item',
  '+': 'list-item',
  '>': 'block-quote',
  '#': 'heading-one',
  '##': 'heading-two',
  '###': 'heading-three',
  '####': 'heading-four',
  '#####': 'heading-five',
  '######': 'heading-six'
};

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};
const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const SlateComponent = (props) => {
  const [docDetails, setDocDetails] = useState({
    title: '',
    content: []
  });
  const writeDocument = () => {
    axios.put(
      `http://localhost:3001/api/document/${props.docID}`,
      docDetails
    );
    console.log(props.docID)
    console.log(props.title)
    console.log('This is where we make a put request');
  };
  const [value, setValue] = useState('');
  
  const renderElement = useCallback(
    (props) => React.createElement(Element, Object.assign({}, props)),
    []
  );
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(
    () => withShortcuts(withReact(withHistory(createEditor()))),
    []
  );

  useEffect(()=>{
    setValue(props.initialValue)  
  }, [props.initialValue]
  )
  
  if (value ==='') {
    return <div></div>
  } else return (
    <Slate
      editor={editor}
      value={value}
      onChange={(value) => {
        setValue(value);
        const isNewChange = editor.operations.some(
          (op) => 'set_selection' !== op.type
        );
        if (isNewChange) {
          const content = JSON.stringify(value);
          console.log(content);
          setDocDetails({ ...docDetails, title: `${props.title}`, content: value});
          console.log(docDetails)
          localStorage.setItem('content', content);
        }
      }}
    >
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Write some markdown..."
        spellCheck
        autoFocus
        onKeyDown={(event) => {
          const content = JSON.stringify(value);
          if (!event.ctrlKey) {
            return;
          }
          switch (event.key) {
            case 's': {
              event.preventDefault();
              console.log(content);
              writeDocument()
              break;
            }
            default:
              break;
          }
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event)) {
              event.preventDefault();
              const mark = HOTKEYS[hotkey];
              toggleMark(editor, mark);
            }
          }
        }}
      />
    </Slate>
  );
      
};
const withShortcuts = (editor) => {
  const { deleteBackward, insertText } = editor;
  editor.insertText = (text) => {
    const { selection } = editor;
    if (text === ' ' && selection && Range.isCollapsed(selection)) {
      const { anchor } = selection;
      const block = Editor.above(editor, {
        match: (n) => Editor.isBlock(editor, n)
      });
      const path = block ? block[1] : [];
      const start = Editor.start(editor, path);
      const range = { anchor, focus: start };
      const beforeText = Editor.string(editor, range);
      const type = SHORTCUTS[beforeText];
      if (type) {
        Transforms.select(editor, range);
        Transforms.delete(editor);
        const newProperties = {
          type
        };
        Transforms.setNodes(editor, newProperties, {
          match: (n) => Editor.isBlock(editor, n)
        });
        if (type === 'list-item') {
          const list = {
            type: 'bulleted-list',
            children: []
          };
          Transforms.wrapNodes(editor, list, {
            match: (n) =>
              !Editor.isEditor(n) &&
              SlateElement.isElement(n) &&
              n.type === 'list-item'
          });
        }
        return;
      }
    }
    insertText(text);
  };
  editor.deleteBackward = (...args) => {
    const { selection } = editor;
    if (selection && Range.isCollapsed(selection)) {
      const match = Editor.above(editor, {
        match: (n) => Editor.isBlock(editor, n)
      });
      if (match) {
        const [block, path] = match;
        const start = Editor.start(editor, path);
        if (
          !Editor.isEditor(block) &&
          SlateElement.isElement(block) &&
          block.type !== 'paragraph' &&
          Point.equals(selection.anchor, start)
        ) {
          const newProperties = {
            type: 'paragraph'
          };
          Transforms.setNodes(editor, newProperties);
          if (block.type === 'list-item') {
            Transforms.unwrapNodes(editor, {
              match: (n) =>
                !Editor.isEditor(n) &&
                SlateElement.isElement(n) &&
                n.type === 'bulleted-list',
              split: true
            });
          }
          return;
        }
      }
      deleteBackward(...args);
    }
  };
  return editor;
};

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>;
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>;
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>;
    case 'heading-three':
      return <h3 {...attributes}>{children}</h3>;
    case 'heading-four':
      return <h4 {...attributes}>{children}</h4>;
    case 'heading-five':
      return <h5 {...attributes}>{children}</h5>;
    case 'heading-six':
      return <h6 {...attributes}>{children}</h6>;
    case 'list-item':
      return <li {...attributes}>{children}</li>;
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

export default SlateComponent;