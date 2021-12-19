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
        <Link to="/prosemirror" >
        Prosemirror
        </Link>
        <Link to="/reactrichmd">RichMD</Link>
        <Link to="/slate">Slate</Link>
        <Link to="/tiptap">TipTap</Link>
        <Link to="/remirror">Remirror</Link>

      </nav>
    </header>
  );
}
