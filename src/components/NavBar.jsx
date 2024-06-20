import React from 'react';
import { Link } from 'react-router-dom';
import MailboxList from './MailboxList'

const NavBar = () => {
  return (
    <nav className="navbar">
      <h4>Mailbox</h4>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/MailboxList">Mailbox List</Link></li>
          <li><Link to="/new-mailbox">New Mailbox</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;