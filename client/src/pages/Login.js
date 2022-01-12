import React, { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import AppWelcome from '../components/AppWelcome';

import axios from 'axios';
import { BASE_URL } from '../globals';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [passValue, setPassValue] = useState('');
  const history = useHistory();
  const initState = {
    username: '',
    password: '',
    authenticated: false,
    messageClass: '',
    displayedMessage: 'Enter a username and password to log in'
  };

  const [currentUser, setCurrentUser, authentication, setAuthentication] =
    props.functions;
  const authenticateLogin = async (e) => {
    e.preventDefault();
    await checkAuthentication();
    dispatch({ type: 'check_passwords' });
  };

  const checkAuthentication = async () => {
    const userresp = await axios.get(`${BASE_URL}/users/${username}`);
    //   console.log(username + ' ', passValue);
    setCurrentUser(username);
    console.log(currentUser);
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
          ? // history.push('/editor'),
            {
              ...state,
              authenticated: true,
              messageClass: 'valid',
              displayedMessage: 'You are logged in'
            }
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
  const unhide = () => {
    console.log('click');
    let element = document.getElementById('hidden');
    let pulsing = document.querySelector('.pulse');
    // document.getElementByID('hidden');
    element.classList.remove('hidden');
    pulsing.classList.remove('pulse');
  };
  if (state.authenticated === true) {
    console.log('you are authenticated');
    setAuthentication(true);
    console.log(authentication);
    console.log(currentUser);
    // setUser(state.username);
  } else {
    console.log(state.authenticated);
  }
  return (
    <div className="login-container">
      <AppWelcome />
      <div onClick={unhide} className="form pulse">
        <h2>Log In</h2>
        <form id="hidden" className="hidden">
          <input
            type="text"
            placeholder="Username"
            id="username"
            onChange={(e) => {
              setUsername(e.target.value);
              dispatch({ type: 'username', payload: e.target.value });
            }}
          />

          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={(e) =>
              dispatch({ type: 'password', payload: e.target.value })
            }
          />
          <div className="button-container">
            <button type="submit" onClick={authenticateLogin}>
              Log In
            </button>
            <button
              type="reset"
              class="cancel"
              onClick={() => {
                dispatch({ type: 'reset' });
              }}
            >
              Reset
            </button>
          </div>
        </form>
        <Link to="/newuser">New user? Register here.</Link>
        <p class={state.messageClass}>{state.displayedMessage}</p>
      </div>
    </div>
  );
};

export default Login;
