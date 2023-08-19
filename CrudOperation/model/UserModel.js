const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create a new Schema for Usercollection
const UserSchema = new Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, min: 18, max: 60, required: true, },
    email: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    phone: { type: Number },
    status: { type: Boolean },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

// Compile the usermodel
const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;