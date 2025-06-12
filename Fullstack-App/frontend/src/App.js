import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // This fetch hits /api on NGINX, which reverse proxies to Node.js backend
    fetch('/api')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Error fetching from backend:', err));
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
