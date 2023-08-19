const mongoose = require('mongoose');

class Database {
    constructor(url){
        try {
            mongoose.connect(url).then(() => {
                console.log('mongoose connected successfully');
            });
        } catch (error) {
            console.log(`mongoose error ${error}`);
        }
    }
}

module.exports = Database