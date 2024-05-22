import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Poster Generator</h1>
      <Link to="/generate">Generate a Poster</Link>
    </div>
  );
}

export default Home;
