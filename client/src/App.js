import logo from './logo.svg';
import './style/App.css';

import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Editor from './pages/Editor';
import NavBar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </main>
    </div>
    //     <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
