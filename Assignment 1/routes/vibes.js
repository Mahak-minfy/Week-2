const express = require('express');
const auth = require('../middleware/auth');
const Vibe = require('../models/Vibe');
const router = express.Router();

// POST a vibe (protected)
router.post('/', auth, async (req, res) => {
  const vibe = new Vibe({ user: req.user, vibeText: req.body.vibeText });
  await vibe.save();
  res.status(201).json(vibe);
});

// GET all vibes (populated)
router.get('/', async (req, res) => {
  const vibes = await Vibe.find().populate('user', 'username');
  res.json(vibes);
});

module.exports = router;
