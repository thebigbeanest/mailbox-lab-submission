import React from 'react';
import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find(mailbox => mailbox._id === Number(mailboxId));

  if (!selectedBox) {
    return <div>Mailbox Not Found!</div>;
  }

  return (
    <div>
      <h2>Mailbox Details</h2>
      <div className="mail-box">
        <p>ID: {selectedBox._id}</p>
        <p>Size: {selectedBox.boxSize}</p>
        <p>Boxholder: {selectedBox.boxholder}</p>
      </div>
    </div>
  );
};

export default MailboxDetails;