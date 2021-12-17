// import '../example.css';
import React, {useCallback } from 'react';
import { Remirror, useHelpers, useKeymap, useRemirror } from '@remirror/react';
import { BoldExtension } from 'remirror/extensions';
import { MarkdownEditor } from '@remirror/react-editors/markdown';


// function MarkdownPreview() {

//   const { getMarkdown } = useHelpers(true);

//   return (

//     <pre>

//       <code>{getMarkdown()}</code>

//     </pre>

//   );

// }

const hooks = [
  () => {
    const { getJSON } = useHelpers();

    const handleSaveShortcut = useCallback(
      ({ state }) => {
        console.log(`Save to backend: ${JSON.stringify(getJSON(state))}`);

        return true; // Prevents any further key handlers from being run.
      },
      [getJSON],
    );

    // "Mod" means platform agnostic modifier key - i.e. Ctrl on Windows, or Cmd on MacOS
    useKeymap('Mod-s', handleSaveShortcut);
  },
];

const EditorPanel = () => {
  const { manager, state } = useRemirror({ extensions: () => [new BoldExtension()] });
  return (
    <div>
      <Remirror manager={manager} initialContent={state} hooks={hooks}
      />
      
    </div>
    
    // <MarkdownEditor placeholder="Start typing...">
    //   {/* <MarkdownPreview /> */}
    // </MarkdownEditor>
  );
};

export default EditorPanel;
