const path = require('path');
const fetchFile = (fileName) => { return path.join(process.cwd(), 'views', fileName) }

class HomeController {
    index (req, res) {
        res.sendFile(fetchFile('index.html'));
    }
}

module.exports = HomeController;