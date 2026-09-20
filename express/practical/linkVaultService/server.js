const express = require('express');

const app = express();
const PORT = 8000;

app.use(express.json());

// In-memory storage
const urls = [];

// Generate unique short code
function generateCode() {
    return Math.random().toString(36).substring(2, 8);
}


// 1. POST /api/shorten
// Create a short URL
app.post('/api/shorten', (req, res) => {

    const { username, originalUrl } = req.body;

    // Check required fields
    if (!username || !originalUrl) {
        return res.status(400).json({
            message: "username and originalUrl are required"
        });
    }

    // Validate URL
    try {
        new URL(originalUrl);
    } catch (error) {
        return res.status(400).json({
            message: "Invalid URL"
        });
    }

    // Generate unique code
    let code = generateCode();

    // Make sure code is unique
    while (urls.find(u => u.code === code)) {
        code = generateCode();
    }

    // Store link
    const newUrl = {
        code: code,
        username: username,
        originalUrl: originalUrl
    };

    urls.push(newUrl);

    // Return generated code
    res.status(201).json({
        code: code
    });
});


// 2. GET /api/url/:code
// Get original URL using short code
app.get('/api/url/:code', (req, res) => {

    const code = req.params.code;

    const url = urls.find(u => u.code === code);

    if (!url) {
        return res.status(404).json({
            message: "URL not found"
        });
    }

    res.status(200).json({
        originalUrl: url.originalUrl,
        username: url.username
    });
});


// 3. GET /api/users/:username/urls
// Get all URLs created by a user
app.get('/api/users/:username/urls', (req, res) => {

    const username = req.params.username;

    const userUrls = urls.filter(u => u.username === username);

    res.status(200).json(userUrls);
});


// 4. DELETE /api/url/:code
// Delete a stored URL
app.delete('/api/url/:code', (req, res) => {

    const code = req.params.code;

    const index = urls.findIndex(u => u.code === code);

    if (index === -1) {
        return res.status(404).json({
            message: "URL not found"
        });
    }

    urls.splice(index, 1);

    res.status(200).json({
        message: "URL deleted successfully"
    });
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});