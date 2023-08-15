const mongoose = require('mongoose');

class Mongoose {
    constructor(configUr){
        try{
            let db = configUr;
            mongoose.connect(configUr).then(() => {
                console.log('mongodb connection established');
            });
        }catch(err){ return err}
    }
}

module.exports = Mongoose