import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <div className="App">
      {!loggedInUser ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Home username={loggedInUser} />
      )}
    </div>
  );
}

export default App;