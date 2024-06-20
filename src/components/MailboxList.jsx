import React from 'react';
import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h2>Mailbox List</h2>
      {mailboxes.map(mailbox => (
        <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
          <div className="mail-box">
            <p>Mailbox ID: {mailbox._id}</p>
            <p>Box Size: {mailbox.boxSize}</p>
            <p>Boxholder: {mailbox.boxholder}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MailboxList;