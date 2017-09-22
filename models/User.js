const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    empty: String
});

mongoose.model('users', userSchema);
