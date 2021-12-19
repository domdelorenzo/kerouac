// import React from 'react';
// import {
//   Plate,
//   createPlateUI,
//   createPlugins,
//   createParagraphPlugin,
//   createBlockquotePlugin,
//   createTodoListPlugin,
//   createHeadingPlugin,
//   createImagePlugin,
//   createAutoformatPlugin,
//   HeadingToolbar,
//   createBoldPlugin
// } from '@udecode/plate';

// const PlateEditor = () => {
//   let components = createPlateUI();
//   // components = withStyledPlaceHolders(components);

//   const plugins = createPlugins(
//     [
//       createParagraphPlugin(),
//       createBlockquotePlugin(),
//       createTodoListPlugin(),
//       createHeadingPlugin(),
//       createImagePlugin(),
//       //   // createHorizontalRulePlugin(),
//       //   // createLinkPlugin(),
//       createListPlugin(),
//       //   // createTablePlugin(),
//       //   // createMediaEmbedPlugin(),
//       //   // createExcalidrawPlugin(),
//       //   // createCodeBlockPlugin(),
//       //   // createAlignPlugin(CONFIG.align),
//       createBoldPlugin()
//       //   // createCodePlugin(),
//       //   // createItalicPlugin(),
//       //   // createHighlightPlugin(),
//       //   // createUnderlinePlugin(),
//       //   // createStrikethroughPlugin(),
//       //   // createSubscriptPlugin(),
//       //   // createSuperscriptPlugin(),
//       // createAutoformatPlugin(CONFIG.autoformat),
//     ],
//     {
//       components
//     }
//   );
//   // const editableProps = {
//   //   placeholder: 'Type…',
//   //   style: {
//   //     padding: '15px',
//   //   },
//   // };

//   const initialValue = [
//     {
//       children: [
//         {
//           text: 'This is editable plain text with react and history plugins, just like a <textarea>!'
//         }
//       ]
//     }
//   ];

//   return (
//     <Plate
//       id="1"
//       //  editableProps={editableProps}
//       initialValue={initialValue}
//       plugins={plugins}
//     >
//       {/* <HeadingToolbar>
//        <BasicElementToolbarButtons />
//        <ListToolbarButtons />
//        <IndentToolbarButtons />
//        <BasicMarkToolbarButtons />
//        </HeadingToolbar> */}
//     </Plate>
//   );
// };

import React from 'react';
import { autoformatMark } from '@udecode/plate-autoformat';
import {
  Plate,
  createBasicElementsPlugin,
  createBasicMarksPlugin,
  createPlateUIEditor,
  createAutoformatPlugin
} from '@udecode/plate';
import { HeadingToolbar } from '@udecode/plate-ui-toolbar';
import { createReactPlugin, createHistoryPlugin } from '@udecode/plate-core';
import { AutoformatPlugin } from '@udecode/plate-autoformat';

const PlateEditor = () => {
  // const [editValue, setEditValue] = useState(null);
  const config = [autoformatMark];
  const plugins = [
    // editor
    createReactPlugin(), // withReact
    createHistoryPlugin(), // withHistory
    // elements
    createPlateUIEditor(),
    createBasicElementsPlugin(), //block quote, code bloc, heading, paragraph,
    createBasicMarksPlugin(), // bold, code, italic, strike, sub, super, underline
    createAutoformatPlugin()
  ];
  const editableProps = {
    placeholder: 'Type…',
    // style: {
    //   padding: '15px'
    // }
    style: {
      padding: '15px',
      width: '80%',
      margin: '0 auto',
      border: '1px solid #dfdfdf',
      boxShadow: '2px 2px 10px 3px rgb(43 42 42 / 13%)'
    }
  };

  return <Plate editableProps={editableProps} plugins={plugins}></Plate>;
};

export default PlateEditor;
