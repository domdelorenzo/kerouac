import Home from './pages/Home';
import './styles/App.css';
import Login from './pages/Login';
import Editor from './pages/Editor';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';

export default function App() {
  return (
    <div>
      <div className="App">
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/editor" component={Editor} />
          </Switch>
        </main>
      </div>
    </div>
  );
}
