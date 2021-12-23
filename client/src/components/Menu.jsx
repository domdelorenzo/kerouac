import React from 'react';
import LogoutButton from './LogoutButton';
import ThemeButton from './ThemeButton';

 const Menu=(props)=> {
    const[
    currentUser,
    setCurrentUser,
    authentication,
    setAuthentication,
    themeSwitcher
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
        <ThemeButton
        functions={themeSwitcher}
        />
    </header>
  );
}

export default Menu