import React, { useState } from 'react';

function PosterGenerator() {
  const [text, setText] = useState('');
  const [posterUrl, setPosterUrl] = useState('');

  const handleGenerate = async () => {
    const response = await fetch('YOUR_BACKEND_API_URL/generate-poster', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    setPosterUrl(data.posterUrl);
  };

  return (
    <div>
      <h1>Generate Poster</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate</button>
      {posterUrl && <img src={posterUrl} alt="Generated Poster" />}
    </div>
  );
}

export default PosterGenerator;
