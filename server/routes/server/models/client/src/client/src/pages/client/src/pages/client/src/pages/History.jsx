import React, { useEffect, useState } from 'react';
import axios from 'axios';

const History = () => {
  const [history, setHistory] = useState([]);
  const username = 'Benj1';

  useEffect(() => {
    axios.get(`http://localhost:5000/api/user/${username}`).then(res => {
      setHistory(res.data.history || []);
    });
  }, []);

  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>🕓 Historik</h2>
      <ul>
        {history.map((item, idx) => (
          <li key={idx}>📍 {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
