
const express = require('express');
const statusMonitor = require('express-status-monitor');
const fs = require('fs');

// step 1: create http server
const app = express();

// step 2: use express middleware to check monitoring status
app.use(statusMonitor());

// step 3: implement bad way to download big files 
app.get('/', (req, res) => {
    // this way to consume more memory to check go https://localhost:3000/status
    const data = fs.readFileSync('data.txt', 'utf8');
    res.send(data);
});

// step 4: implement to good ways to download big file by using streaming
app.get('/stream', (req, res) => {
    // createReadStream() method used to allow open up a file/stream and read the data present in it.
    const streamData = fs.createReadStream('data.txt');
    /**
     * @pipe method is used to connect a readable stream to a writable stream, 
     * enabling data to flow automatically from the source to the destination.
     */
    streamData.pipe(res);
});

// step 5: Copy big files using bad ways
app.get('/copy-files', (req, res) => {
    const data = fs.readFileSync('data.txt');
    fs.appendFileSync('copied-data.txt', data);
    res.send('File copied successfully');
})

// step 6: Copy big files to using stream in good ways
app.get('/stream/copy-files', (req, res) => {
    const readStream = fs.createReadStream('data.txt');
    const writeStream = fs.createWriteStream('copied-data.txt'); 

    // using event emitter for display chunk data
    readStream.on('data', (chunk) => {
        writeStream.write(chunk);
    })

    // using event emiter for error handling
    writeStream.on('error', (error) => {
        if(error) throw error;
    });
    res.send('File copied successfully');
})



app.listen(3000, () => console.log('listening on http://localhost:3000'));