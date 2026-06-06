import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files including favicon
app.use(express.static(path.join(__dirname, 'public')));

// Favicon endpoint
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'favicon.ico'));
});

// Mock logo analysis (replace with real analysis when logo is available)
async function analyzeLogo() {
  // Placeholder for color/typography extraction from codex_logo
  return {
    primaryColor: '#2C3E50',
    accentColor: '#E67E22',
    fontFamily: '"Source Sans Pro", sans-serif'
  };
}

// Apply styling analysis (simulated)
analyzeLogo().then((styles) => {
  console.log('Styling insights applied:', styles);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
