const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let url = req.url;
    let response = null;
    switch(url) {
        case "/" : {
            response = fileHandling();
            break;
        }
        case "/delete" : {
            fs.unlink('data.txt', (error) => {
                if (error) throw error;
            });
            response = "File deleted successfully";
            break;
        }
        default : {
            response = "File not found";
            break;
        }
    }
   res.end(response);
}).listen(8080);

const fileHandling = () => {
    /**
     * @fileHanding fs.writeFileSync(filename, data); // run as synchronous
     */
    fs.writeFileSync('data.txt', "This Is Node Js Series \n");  // create and add content in file
    fs.appendFileSync('data.txt', "In This module We cover all File Handling Data \n") // Append data in existing file 
    fs.appendFileSync('data.txt', "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, accusantium animi aspernatur voluptatibus pariatur expedita rem possimus consectetur saepe aperiam, nulla harum in, totam cupiditate! Nihil enim odio quas provident!");
    const data = fs.readFileSync("data.txt"); // Read data from existing file and return binary data 
    // Buffer in a special data type which contains the binary data
    return data.toString();
}