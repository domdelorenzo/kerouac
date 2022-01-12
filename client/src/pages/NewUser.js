import React, { useState, useReducer } from 'react';
import AppWelcome from '../components/AppWelcome';
import axios from 'axios';
import { useHistory } from 'react-router';
import { BASE_URL } from '../globals';

const NewUser = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [passValue, setPassValue] = useState('');

  const initState = {
    username: '',
    password: '',
    passwordConfirm: '',
    valid: false,
    messageClass: '',
    displayedMessage: 'Passwords must match.'
  };
  const validatePasswords = (e) => {
    e.preventDefault();
    dispatch({ type: 'check_passwords' });
  };
  const addNewUser = () => {
    axios.post(`${BASE_URL}/users`, {
      username: username,
      password: passValue
    });
    history.push(`/`);
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'username':
        return { ...state, username: action.payload };
      case 'password':
        return { ...state, password: action.payload };
      case 'confirm':
        return { ...state, confirm: action.payload };
      case 'check_passwords':
        return state.password === state.confirm
          ? (console.log('good to go'),
            addNewUser(),
            {
              ...state,
              valid: true,
              messageClass: 'valid',
              displayedMessage: 'Passwords are a match'
            })
          : {
              ...state,
              messageClass: 'invalid',
              displayedMessage: 'Passwords do not match'
            };
      case 'reset':
        return {
          ...state,
          username: '',
          password: '',
          messageClass: '',
          displayedMessage: 'Passwords must match'
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div className="login-container">
      <AppWelcome />
      <div className="form">
        <h2>Sign Up</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            id="username"
            onChange={(e) => {
              dispatch({ type: 'username', payload: e.target.value });
              setUsername(e.target.value);
            }}
          />

          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={(e) => {
              dispatch({ type: 'password', payload: e.target.value });
              setPassValue(e.target.value);
            }}
          />

          <input
            //should this type be "password" or something to make it unique?
            type="password"
            // type="confirm"
            placeholder="Confirm password"
            id="passwordConfirm"
            onChange={(e) =>
              dispatch({ type: 'confirm', payload: e.target.value })
            }
          />
          <div className="button-container">
            <button
              type="submit"
              onClick={validatePasswords}
              // {() => dispatch({ type: 'submit' })}
            >
              Sign Up
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
          </div>
          <p class={state.messageClass}>{state.displayedMessage}</p>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
