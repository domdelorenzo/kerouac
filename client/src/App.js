// import logo from './logo.svg';
import './style/App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import NewUser from './pages/NewUser';
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
  // const [currentUser, setCurrentUser] = useState('');
  // const handleUserState = (e) => {
  //   setCurrentUser(e);
  // };
  // useEffect(() => {
  //   console.log(currentUser);
  // }, [currentUser]);
  return (
    <div className="App">
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            // currentUser={currentUser}
            // handleUserState={handleUserState}
            // functions={[currentUser, setCurrentUser]}
            path="/login"
            component={Login}
          />
          <Route
            // currentUser={currentUser}
            path="/editor"
            component={EditorPage}
          />
          <Route path="/newuser" component={NewUser} />
          {/* <Route path="/reactrichmd" element={<ReactRichMD />} /> */}
          {/* <Route path="/remirror" element={<Remirror />} /> */}
          <Route path="/slate" component={SlateEditor} />
          {/* <Route path="/Plate" element={<PlateEditor />} /> */}
          {/* <Route path="/tiptap" element={<TipEditor />} /> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
