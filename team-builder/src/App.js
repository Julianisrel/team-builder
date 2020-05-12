import React, { useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form";

function App() {
  const [member, setMember] = useState([]);

  const addNewMember = (mem) => {
    const newMember = {
      id: Date.now(),
      name: mem.name,
      email: mem.email,
      role: mem.role,
    };
    setMember([...member, newMember]);
  };
  return (
    <div className="container">
      <h1 className="header">Build Your Team</h1>
      <Form addNewMember={addNewMember} />
      <MemberCard member={member} />
    </div>
  );
}



export default App;
