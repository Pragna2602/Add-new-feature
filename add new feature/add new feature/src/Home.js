import React from 'react';

const Home = ({ username }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>Start shopping and enjoy music.</p>
    </div>
  );
};

export default Home;