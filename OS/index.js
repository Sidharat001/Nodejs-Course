// Import required modules
const http = require('http');
const os = require('os');

// Create HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});

    // Gather system information
    const systemInfo = {
        hostname: os.hostname(),    // Get the hostname
        arch: os.arch(),    // Get the CPU architecture
        cpus: os.cpus(),    // Get information about each CPU/core
        freemem: os.freemem(),    // Get the amount of free system memory in bytes
        homedir: os.homedir(),    // Get the path to the current user's home directory
        endianness: os.endianness(),    // Get the endianness of the CPU
        loadavg: os.loadavg(),    // Get the load average values
        platform: os.platform(),    // Get the operating system platform
        release: os.release(),    // Get the operating system release version
        tmpdir: os.tmpdir(),    // Get the path of the default directory for temporary files
        totalmem: os.totalmem(),    // Get the total amount of system memory in bytes
        type: os.type(),    // Get the operating system name
        uptime: os.uptime(),    // Get the system uptime in seconds
        networks: os.networkInterfaces(),    // Get a list of network interfaces
    };

    // Send the system information as JSON response
    res.end(JSON.stringify(systemInfo, null, 2));
});

// Start the server and listen on port 8080
server.listen(8080, () => {
    console.log('Server is listening on port 8080');
});
