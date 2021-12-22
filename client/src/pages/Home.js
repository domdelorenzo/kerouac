import React, { useState, useEffect } from 'react';
import EditorPanel from '../components/EditorPanel';
import EditorPage from './EditorPage';
import Login from './Login';
import LogoutButton from '../components/LogoutButton';

export default function Home() {
  const [currentUser, setCurrentUser] = useState('');
  const [authentication, setAuthentication] = useState(false);
  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);
  //if authenticated = false, render login. If true render Editorpage
  if (authentication) {
    return (
      <div>
        <LogoutButton
          functions={[
            currentUser,
            setCurrentUser,
            authentication,
            setAuthentication
          ]}
        />
        <EditorPage functions={[currentUser, setCurrentUser]} />
      </div>
    );
  } else {
    return (
      <Login
        functions={[
          currentUser,
          setCurrentUser,
          authentication,
          setAuthentication
        ]}
      />
    );
  }
}
