const mongoose = require('mongoose');

const DBconfig = async (url) => {
    mongoose.connect(url)
  .then(() => console.log('Connected!')).catch(err => console.log(err));
}

module.exports = { DBconfig }