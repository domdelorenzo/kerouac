import './style/App.css';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import NewUser from './pages/NewUser';
import EditorPage from './pages/EditorPage';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import { KerouacStyle } from './components/KerouacStyle';
import { lightTheme, darkTheme } from './components/KerouacTheme';

function App() {
  const [theme, setTheme] = useState('light');
  const themeSwitcher = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    console.log('theme switched');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <KerouacStyle />
      <div className="App">
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} functions={themeSwitcher} />}
              // component={Home}
            />
            <Route path="/login" component={Login} />
            <Route path="/editor" component={EditorPage} />
            <Route path="/newuser" component={NewUser} />
          </Switch>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
