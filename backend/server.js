const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config(); // This reads your .env file

const app = express();
const PORT = 5001;

app.use(cors());

// The API Route
app.get('/api/houses', async (req, res) => {
    try {
        // Asking Unsplash for "luxury house" photos
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: 'luxury house', per_page: 12 },
            headers: {
                Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
            }
        });
        res.json(response.data.results);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend is running on http://localhost:${PORT}`);
});