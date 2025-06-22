import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [data, setData] = useState({});
  const username = 'Benj1'; // fast användare

  useEffect(() => {
    axios.get(`http://localhost:5000/api/user/${username}`).then(res => {
      setData(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const save = () => {
    axios.put(`http://localhost:5000/api/user/${username}`, data)
      .then(() => alert('✅ Uppdaterad'));
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>🧑 Profil</h2>
      <input name="firstName" value={data.firstName || ''} onChange={handleChange} placeholder="Förnamn" /><br />
      <input name="middleName" value={data.middleName || ''} onChange={handleChange} placeholder="Mellannamn" /><br />
      <input name="lastName" value={data.lastName || ''} onChange={handleChange} placeholder="Efternamn" /><br />
      <input name="age" type="number" value={data.age || ''} onChange={handleChange} placeholder="Ålder" /><br />
      <input name="personalNumber" value={data.personalNumber || ''} onChange={handleChange} placeholder="Personnummer" /><br />
      <button onClick={save}>💾 Spara</button>
    </div>
  );
};

export default Profile;
