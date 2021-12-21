import React, { useState, useReducer } from 'react';

const NewUser = () => {
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
          ? {
              ...state,
              valid: true,
              messageClass: 'valid',
              displayedMessage: 'Passwords are a match'
            }
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
    <div className="form">
      <h1>Sign Up</h1>
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
        <label htmlFor="passwordConfirm">Confirm password</label>

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

        <p class={state.messageClass}>{state.displayedMessage}</p>
      </form>
    </div>
  );
};

export default NewUser;
