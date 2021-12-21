// import logo from './logo.svg';
import './style/App.css';

import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import EditorPage from './pages/EditorPage';
import NavBar from './components/Navbar';
import Home from './pages/Home';
// import ReactRichMD from './pages/React-Rich-Markdown';
// import Remirror from './pages/Remirror';
import SlateEditor from './pages/Slate';
// import PlateEditor from './pages/Plate';
// import TipEditor from './pages/TipEditor';

// import '@remirror/styles/all.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editor" element={<EditorPage />} />
          {/* <Route path="/reactrichmd" element={<ReactRichMD />} /> */}
          {/* <Route path="/remirror" element={<Remirror />} /> */}
          <Route path="/slate" element={<SlateEditor />} />
          {/* <Route path="/Plate" element={<PlateEditor />} /> */}
          {/* <Route path="/tiptap" element={<TipEditor />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
