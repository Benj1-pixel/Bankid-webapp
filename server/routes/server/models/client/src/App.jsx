import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import IDCard from './pages/IDCard';
import History from './pages/History';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/idkort" element={<IDCard />} />
        <Route path="/historik" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
