import React from 'react';
import LogoutButton from './LogoutButton';

 const Menu=(props)=> {
    const[
    currentUser,
    setCurrentUser,
    authentication,
    setAuthentication
  ]=props.functions

  return (
    <header>
      <div className="menu-container">
      <button className="menu-switch">
        </button>
        </div>
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