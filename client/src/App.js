import logo from './logo.svg';
import './style/App.css';

import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Editor from './pages/Editor';
import NavBar from './components/Navbar';
import Home from './pages/Home';
// import ReactProsemirror from './pages/ReactProsemirror';
// import ReactRichMD from './pages/React-Rich-Markdown';
import Remirror from './pages/Remirror';
import SlateEditor from './pages/Slate';
import PlateEditor from './pages/Plate';
import Prosemirror from './pages/Prosemirror.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editor" element={<Editor />} />
          {/* <Route path="/reactrichmd" element={<ReactRichMD />} />
          <Route path="/prosemirror" element={<ReactProsemirror />} /> */}
          <Route path="/prosemirror" element={<Prosemirror />} /> */}
          <Route path="/remirror" element={<Remirror />} />
          <Route path="/slate" element={<SlateEditor />} />
          <Route path="/Plate" element={<PlateEditor />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
