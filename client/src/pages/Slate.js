import '../style/Slate.css';
import React, { useState, useCallback, useMemo } from 'react';
import axios from 'axios';
import SlateComponent from '../components/SlateComponent';

// const loadDocument = async () => {
//   const response = await axios.get(
//     'http://localhost:3001/api/document/name/First%20document'
//   );
//   console.log(response.data.document[0].content);
//   console.log(response.data.document[0].name);
//   let savedDoc = response.data.document[0].content;
// };
// const [docDetails, setDocDetails] = useState({
//   name: 'First document',
//   userID: 'ddeloren',
//   content: []
// });

// const handleChange = (e) => {
//   setDocDetails({ ...docDetails, [e.target.content]: e.target.value });
//   console.log({ ...docDetails, [e.target.content]: e.target.value });
// };
// const writeDocument = (e) => {
//   e.preventDefault();
//   axios.put(
//     'http://localhost:3001/api/document/61bfb6ee631ad13ebdefabe5',
//     docDetails
//   );
//   console.log('This is where we make a put request');
// };

const SlateEditor = () => {
  return <SlateComponent />;
};
export default SlateEditor;
