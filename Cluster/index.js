// step 1: import all required packages
const cluster = require('cluster');
const express = require('express');
const os = require('os');

// step 2: get length of cpu
let totalCpu = os.availableParallelism();

// step 3: create workloader instance
if(cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);
    for(let i = 0; i < totalCpu; i++) {
        cluster.fork();
    }
}else {
    // step 4: create connection
    const app = express();

    // step 5: run express server
    app.get('/', (req, res) => {
        res.write('Cluster Series ' + process.pid);
        res.send();
    })

    app.get('/api/', (req, res) => {
        res.write('Cluster Series ' + process.pid);
        res.send();
    });

    // step 6: listen on port
    app.listen(8000, () => console.log('listening on http://localhost:8000'));
}