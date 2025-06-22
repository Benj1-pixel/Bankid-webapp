const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Initiera testanvändare om den inte finns
router.get('/init', async (req, res) => {
  const exists = await User.findOne({ username: 'Benj1' });
  if (!exists) {
    await User.create({
      username: 'Benj1',
      password: 'test123',
      firstName: 'Benjamin',
      middleName: '',
      lastName: 'Swhan',
      age: 18,
      personalNumber: '200702264055',
      profileImage: '/default-profile.png',
      history: []
    });
  }
  res.send('✅ Testanvändare klar');
});

// Hämta profil
router.get('/:username', async (req, res) => {
  const user = await User.findOne({ username: req.params.username });
  res.json(user);
});

// Uppdatera profil
router.put('/:username', async (req, res) => {
  const { firstName, middleName, lastName, age, personalNumber } = req.body;
  const updated = await User.findOneAndUpdate(
    { username: req.params.username },
    { firstName, middleName, lastName, age, personalNumber },
    { new: true }
  );
  res.json(updated);
});

module.exports = router;
