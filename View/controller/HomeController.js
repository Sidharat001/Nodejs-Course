const path = require('path');
const filePath = (fileURLToPath) => { return path.join(process.cwd(), 'views', `${fileURLToPath}`)};
class RootController {
    Root (req, res) {
        // res.send(`Welcome to HomePage Controller`);
        res.sendFile(filePath(`index.html`));
    };

    About (req, res) {
        res.sendFile(filePath(`about.html`));
    };
}

module.exports = RootController