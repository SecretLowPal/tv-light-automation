const express = require('express');
const axios = require('axios');
const app = express();

// זה הנתיב שהאפליקציה בטלוויזיה כנראה תנסה לגשת אליו
app.get('/api/bridge', async (req, res) => {
    try {
        // כאן אתה שולח את הפקודה ל-Vercel שלך
        const response = await axios.get('https://YOUR-VERCEL-URL.vercel.app/update-light');
        res.send('Command sent to Vercel');
    } catch (error) {
        res.status(500).send('Error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
