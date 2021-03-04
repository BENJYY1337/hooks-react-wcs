import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, email);
    setName('')
    setEmail('')
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Mary"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="text"
          placeholder="mary.poppins@disney.fr"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          value={email}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}