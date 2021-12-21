import React, { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import EditorPage from './EditorPage';

import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [passValue, setPassValue] = useState('');
  const navigate = useNavigate();
  const initState = {
    username: '',
    password: '',
    authenticated: false,
    messageClass: '',
    displayedMessage: 'Enter a username and password to log in'
  };

  const authenticateLogin = async (e) => {
    e.preventDefault();
    await checkAuthentication();
    dispatch({ type: 'check_passwords' });
  };
  const goToEditor = () => {
    navigate('/editor');
  };
  const checkAuthentication = async () => {
    const userresp = await axios.get(
      `http://localhost:3001/api/users/${username}`
    );
    console.log(username + ' ', passValue);
    setPassValue(userresp.data.user[0].password);
    console.log(userresp.data.user[0].password);
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'username':
        return { ...state, username: action.payload };
      case 'password':
        return { ...state, password: action.payload };
      case 'check_passwords':
        // return state.password === state.confirm
        return state.password === `${passValue}`
          ? ({
              ...state,
              authenticated: true,
              messageClass: 'valid',
              displayedMessage: 'You are logged in'
            },
            goToEditor())
          : {
              ...state,
              messageClass: 'invalid',
              displayedMessage: 'Username and password do not match. Try again.'
            };
      case 'reset':
        return {
          ...state,
          username: '',
          password: '',
          messageClass: '',
          displayedMessage: ''
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div className="form">
      <h1>Log In</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={(e) => {
            setUsername(e.target.value);
            dispatch({ type: 'username', payload: e.target.value });
          }}
        />
        <label htmlFor="username">Username</label>

        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={(e) =>
            dispatch({ type: 'password', payload: e.target.value })
          }
        />
        <label htmlFor="password">Password</label>

        <button
          type="submit"
          onClick={authenticateLogin}
          // {() => dispatch({ type: 'submit' })}
        >
          LOG IN
        </button>
        <button
          type="reset"
          class="cancel"
          onClick={() => {
            dispatch({
              type: 'reset'
            });
          }}
        >
          Reset
        </button>
      </form>
      <p class={state.messageClass}>{state.displayedMessage}</p>
      <Link to="/newuser">New user? Register here.</Link>
    </div>
  );
};

export default Login;
