import React, { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import axios from 'axios';
import { set } from 'mongoose';

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
  //OHHH this is it!
  const [currentUser, setCurrentUser, authentication, setAuthentication] =
    props.functions;
  const authenticateLogin = async (e) => {
    e.preventDefault();
    await checkAuthentication();
    dispatch({ type: 'check_passwords' });
  };
  const goToEditor = () => {
    // setCurrentUser(state.username);
    console.log(state.username);
    // history.push('/editor');
  };

  const checkAuthentication = async () => {
    const userresp = await axios.get(
      `http://localhost:3001/api/users/${username}`
    );
    //   console.log(username + ' ', passValue);
    setCurrentUser(username);
    console.log(currentUser);
    setPassValue(userresp.data.user[0].password);
    console.log(userresp.data.user[0].password);
    //   if (state.password === `${passValue}`) {
    //     return {
    //       ...state,
    //       authenticated: true,
    //       messageClass: 'valid',
    //       displayedMessage: 'You are logged in'
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       messageClass: 'invalid',
    //       displayedMessage: 'Username and password do not match. Try again.'
    //     };
    //   }

    //   if (state.authenticated === true) {
    //     console.log('you are authenticated');
    //   }
    //   console.log(state.authenticated);
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
