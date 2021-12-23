import React from 'react';
import LogoutButton from './LogoutButton';

 const Menu=(props)=> {
    const[
    currentUser,
    setCurrentUser,
    authentication,
    setAuthentication
  ]=props.functions

  // const handleChange = (e) => {
  //   console.log(e.target.value)
  //   console.log(currentUser)
  //   setNewdoc({...newdoc, "userID": currentUser, [e.target.name]: e.target.value });
  //   console.log({...newdoc, "userID": currentUser, [e.target.name]: e.target.value });
  // };
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
         {/* <form onSubmit={createNewDoc}>
        <input 
          type="text"
          placeholder="Title here"
          name="title"
          onChange={handleChange}
        />
        <button type="submit">New document</button>
        </form> */}

    </header>
  );
}

export default Menu