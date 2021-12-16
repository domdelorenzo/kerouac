import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link
          to="/"
          // component={Home}
        >
          Home
        </Link>
        <Link
          to="/login"
          // component={About}
        >
          Login
        </Link>
        <Link 
        to="/editor"
        >
          Editor
          </Link>
      </nav>
    </header>
  );
}
