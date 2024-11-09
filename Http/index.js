const http = require('http'); // Import the http module

const port = 8080; // Define the port

const server = http.createServer(function(req, res) {
    // Add an HTTP Header
    res.writeHead(200, {'Content-Type': 'application/json'});
    // Convert the JavaScript object to a JSON string
    res.write(JSON.stringify({"url": 'http://localhost:8080', "status": '200'}));
    res.enduenu();
}).listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
