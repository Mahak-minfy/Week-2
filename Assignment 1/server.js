import express from 'express';
import authRoutes from './routes/auth.js'
import vibeRoutes from './routes/vibes.js'

const app = express();
const PORT = 5000;

// Sample data
const sampleVibes = [
  { id: 1, mood: "happy", message: "Feeling great today!" },
  { id: 2, mood: "chill", message: "Just taking it easy." },
  { id: 3, mood: "excited", message: "Can't wait for the weekend!" }
];

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the VibeCheck API! ');
});

// Get all vibes
app.get('/api/v1/vibes', (req, res) => {
  res.status(200).json(sampleVibes);
});

// Get single vibe by ID
app.get('/api/v1/vibes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const vibe = sampleVibes.find(v => v.id === id);

  if (vibe) {
    res.status(200).json(vibe);
  } else {
    res.status(404).json({
      success: false,
      message: "That vibe is off the grid, not found."
    });
  }
});

app.use('/api/v1/auth', authRoutes)
app.use('api/v1/vibes', vibeRoutes)

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server blasting off on port ${PORT}`);
});
