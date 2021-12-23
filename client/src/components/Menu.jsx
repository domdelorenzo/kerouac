import React from 'react';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';

 const Menu=()=> {
  return (
    <header>
        <LogoutButton
          functions={[
            currentUser,
            setCurrentUser,
            authentication,
            setAuthentication
          ]}
        />
        
    </header>
  );
}

export default Menu