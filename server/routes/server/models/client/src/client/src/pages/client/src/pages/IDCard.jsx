import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';

const IDCard = () => {
  const [data, setData] = useState({});
  const username = 'Benj1';

  useEffect(() => {
    axios.get(`http://localhost:5000/api/user/${username}`).then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', textAlign: 'center' }}>
      <h2>🪪 ID-kort</h2>
      <img
        src={data.profileImage || '/default-profile.png'}
        alt="Profilbild"
        style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover' }}
      />
      <h3>{data.firstName} {data.middleName} {data.lastName}</h3>
      <p>Personnummer: {data.personalNumber}</p>
      <QRCode value={`${data.firstName} ${data.lastName} - ${data.personalNumber}`} size={128} />
    </div>
  );
};

export default IDCard;
