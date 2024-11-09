const { mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    gander: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isactive: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        Enumerator: ['user', 'admin'],
        default: 'user'
    },
    created_at: { type: Date, default: Date.now },
});

// Create Entity In Database
const UserEntity = mongoose.model('users', UserSchema);

module.exports = UserEntity