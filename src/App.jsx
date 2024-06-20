import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';
import './App.css';

const App = () => {
  const [mailboxes, setMailboxes] = useState([
    { _id: 1, boxSize: 'Small', boxholder: 'Alex' },
    { _id: 2, boxSize: 'Medium', boxholder: 'Chris' },
    { _id: 3, boxSize: 'Large', boxholder: 'Taylor' }
  ]);

  const [newBox, setNewBox] = useState({ boxSize: '', boxholder: '' });

  const addBox = (e) => {
    e.preventDefault();
    const newMailbox = {
      _id: mailboxes.length + 1,
      boxSize: newBox.boxSize,
      boxholder: newBox.boxholder,
    };
    setMailboxes([...mailboxes, newMailbox]);
    setNewBox({ boxSize: '', boxholder: '' });
  };

  const handleChange = (e) => {
    setNewBox({ ...newBox, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/MailboxList" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm newBox={newBox} handleChange={handleChange} addBox={addBox} />} />
        <Route path="/MailboxDetails/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </div>
  );
};

export default App;
