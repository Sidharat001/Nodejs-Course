const mongoose = require('mongoose');

const databaseConfig = async (url) => {
    try{
        // create a new database || already existing database
        const dboptions = {
            database: 'NodejsProjects' 
        };
        // connect to the database
       await mongoose.connect(url);
       console.log('Connect mongoose successfully');
    }catch(err){
        console.log('Database configuration error: ' + err)
    }
};

module.exports = databaseConfig;