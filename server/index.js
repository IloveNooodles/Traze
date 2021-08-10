const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    return res.send("Connected!");
})

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))