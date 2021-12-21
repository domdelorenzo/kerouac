import React, { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const initState = {
    username: '',
    password: '',
    authenticated: false,
    messageClass: ''
    // displayedMessage: 'Passwords must match.'
  };

  const authenticateLogin = (e) => {
    e.preventDefault();
    dispatch({ type: 'check_passwords' });
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'username':
        return { ...state, username: action.payload };
      case 'password':
        return { ...state, password: action.payload };
      case 'check_passwords':
        return state.password === state.confirm
          ? {
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
  return (
    <div className="form">
      <h1>Log In</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={(e) =>
            dispatch({ type: 'username', payload: e.target.value })
          }
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
      <Link to="/newuser">New user? Register here.</Link>
    </div>
  );
};

export default Login;
