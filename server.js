const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

// Request Logger Middleware
const requestLogger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const ip = req.ip;
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] ${method} ${url} - IP: ${ip}`);
    next();
};

// Use Morgan for advanced logging
app.use(morgan('combined'));

// Use custom requestLogger middleware
app.use(requestLogger);

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
} else {
    module.exports = app;
}
