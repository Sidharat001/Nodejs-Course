const path = require('path');
const renderFile = (filePath) => {return path.join(process.cwd(), 'views', `${filePath}`)} 
class Root {
    Root (req, res) {
        res.sendFile(renderFile('index.html'));
    }
}

module.exports = Root;