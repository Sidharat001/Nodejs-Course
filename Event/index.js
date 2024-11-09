const http = require('http');
const events = require('events');

// Create customized own event emitter
const emitter = new events.EventEmitter();

// Define the path event listener
emitter.on('path', (req, res) => {
    let responseText;
    switch (req.url) {
        case '/':
            responseText = 'HomePage';
            break;
        case '/about-us':
            responseText = 'About us';
            break;
        case '/contact-us':
            responseText = 'Contact us';
            break;
        case '/login':
            responseText = 'Login';
            break;
        default:
            responseText = '404 Not Found';
            break;
    }
    res.end(`Server running at http://localhost:8080 (${responseText})`);
});

const server = http.createServer((req, res) => {
    // Emit the 'path' event with req and res as arguments
    emitter.emit('path', req, res); // The .emit() method should return true or false based on whether the event had listeners
}).listen(8080, () => {
    console.log('Server running at http://localhost:8080');
});
