import React from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ newBox, handleChange, addBox }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    addBox(e);
    navigate('/MailboxList');
  };

  return (
    <div>
      <h2>Add New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Boxholder Name:</label>
          <input
            type="text"
            name="boxholder"
            value={newBox.boxholder}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Box Size:</label>
          <select
            name="boxSize"
            value={newBox.boxSize}
            onChange={handleChange}
            required
          >
            <option value="">Select size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <button type="submit">Add Mailbox</button>
      </form>
    </div>
  );
};

export default MailboxForm;