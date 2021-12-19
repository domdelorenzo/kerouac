// import '../example.css';
import React, {useCallback, useState } from 'react';
import { Remirror, useHelpers, useKeymap, useRemirror } from '@remirror/react';
import { 
  BoldExtension, 
  ItalicExtension, 
  BlockquoteExtension, 
  ListItemExtension, 
  BulletListExtension,
  OrderedListExtension,
  TaskListExtension,
  TaskListItemExtension,
  MarkdownExtension, MarkdownOptions } from 'remirror/extensions';
import { MarkdownEditor } from '@remirror/react-editors/markdown';
import { EditorComponent } from '@remirror/react-core';
import test from '../Data/test.json'




const hooks = [
  () => {
    const { getJSON } = useHelpers();

    const handleSaveShortcut = useCallback(
      ({ state }) => {
        console.log(`Save to backend: ${JSON.stringify(getJSON(state))}`);
        const filedata = JSON.stringify(getJSON(state))
        
        return true; // Prevents any further key handlers from being run.
      },
      [getJSON],
    );

    // "Mod" means platform agnostic modifier key - i.e. Ctrl on Windows, or Cmd on MacOS
    useKeymap('Mod-s', handleSaveShortcut);
  },
];

const starterText = test


const EditorPanel = () => {
  const { manager, state } = useRemirror({ extensions: () => [
    new BoldExtension(), 
    new ItalicExtension(), 
    new BlockquoteExtension(), 
    new ListItemExtension(),
    new BulletListExtension(),
    new OrderedListExtension(),
    new TaskListExtension(),
    new TaskListItemExtension()
  ],
  content: starterText,
  // selection: 'start,
  stringHandler:'json' 
});
  // const { manager, state } = useRemirror({
  //   extensions: () => [new BoldExtension()],
  //   content: '<p>I love <b>Remirror</b></p>',
  //   selection: 'start',
  //   stringHandler: 'html',
  // });
  return (
  
      <Remirror manager={manager} initialContent={state} hooks={hooks}>
        {/* <EditorComponent /> */}
      </Remirror>
    
    // <MarkdownEditor 
    // // initialContent={state}
    //     manager={manager} 
    //     hooks={hooks} 
    //     // placeholder="Start typing..."
    //     placeholder={test}
    //     >
    //   {/* <MarkdownPreview /> */}
    // </MarkdownEditor>
  );
};




/* Saving functionality

async saveContent = ()=> {
  // Fake API call
  return new Promise(resolve=>{
    settimeout(()=>{
      resolve('resolved');
    }, 2000)
  })
  await delay(1000);
}

interface UseSaveHook {
  saving: boolean;
  error: Error | undefined;
}

// Create a hook which saves the content as markdown whenever `Ctrl-s` on Mac `Cmd-s` is pressed.
function useSaveHook() {
  const helpers = useHelpers();
  const [state, setState] = useState<UseSaveHook>({ saving: false, error: undefined });

  useKeymap(
    'Mod-s',
    useCallback(() => {
      // Convert the editor content to markdown.
      const markdown = helpers.getMarkdown();

      setState({ saving: true, error: undefined });

      saveContent(markdown)
        .then(() => {
          setState({ saving: false, error: undefined });
        })
        .catch((error) => {
          setState({ saving: true, error });
        });

      return true;
    }, [helpers]),
  );

  return state;
}

*/

export default EditorPanel;
