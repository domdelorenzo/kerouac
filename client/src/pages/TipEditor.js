import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TipTap from '../components/TipTap';

const TipEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World!</p>'
  });

  return <TipTap />;
};

export default TipEditor;
