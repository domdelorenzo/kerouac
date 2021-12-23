import './style/App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import NewUser from './pages/NewUser';
import EditorPage from './pages/EditorPage';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/editor" component={EditorPage} />
          <Route path="/newuser" component={NewUser} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
