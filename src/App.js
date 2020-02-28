import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div id="welcome">Welcome {username}</div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" id="username" placeholder="username" onChange={(e) => { setUsername(e.target.value) }} value={username} />
      <input type="password" name="password" id="password" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
