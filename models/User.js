const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    // lastName: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,//for unique email addresses
    },
   
    phone: { type: Number, required: true },
    profession: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
// const video = mongoose.model('user', userSchema)
// module.exports = video
