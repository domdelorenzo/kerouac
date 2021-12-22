import React from "react";

const LogoutButton = (props) => {
  const [currentUser,
  setCurrentUser,
  authentication,
  setAuthentication] = props.functions
  const logout = ()=>{
    setCurrentUser('');
    setAuthentication(false)
  }
  return <button onClick={logout}>Logout</button>
}

export default LogoutButton