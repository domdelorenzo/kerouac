import React from 'react';
import { Plate, createPlateUI, createPlugins, createParagraphPlugin, createBlockquotePlugin, createTodoListPlugin, createHeadingPlugin, createImagePlugin, createAutoformatPlugin, HeadingToolbar, createBoldPlugin } from '@udecode/plate'



const DocPanel = () => {
  let components = createPlateUI();
  // components = withStyledPlaceHolders(components);

  const plugins = createPlugins([
    createParagraphPlugin(),
    createBlockquotePlugin(),
    createTodoListPlugin(),
    createHeadingPlugin(),
    createImagePlugin(),
  //   // createHorizontalRulePlugin(),
  //   // createLinkPlugin(),
  //   // createListPlugin(),
  //   // createTablePlugin(),
  //   // createMediaEmbedPlugin(),
  //   // createExcalidrawPlugin(),
  //   // createCodeBlockPlugin(),
  //   // createAlignPlugin(CONFIG.align),
    createBoldPlugin(),
  //   // createCodePlugin(),
  //   // createItalicPlugin(),
  //   // createHighlightPlugin(),
  //   // createUnderlinePlugin(),
  //   // createStrikethroughPlugin(),
  //   // createSubscriptPlugin(),
  //   // createSuperscriptPlugin(),
  // createAutoformatPlugin(CONFIG.autoformat),

  ], {
    components,
  });
  // const editableProps = {
  //   placeholder: 'Type…',
  //   style: {
  //     padding: '15px',
  //   },
  // };

  const initialValue = [
    {
      children: [
        {
          text:
            'This is editable plain text with react and history plugins, just like a <textarea>!',
        },
      ],
    },
  ];


  return (
     <Plate id="1" 
    //  editableProps={editableProps} 
     initialValue={initialValue}
     plugins={plugins}
     >
       {/* <HeadingToolbar>
        <BasicElementToolbarButtons />
        <ListToolbarButtons />
        <IndentToolbarButtons />
        <BasicMarkToolbarButtons />
        </HeadingToolbar> */}
      </Plate>
  );
}


export default DocPanel

