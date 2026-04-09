import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {type: String, required: true,trim: true},
    username: {type: String, required: true, unique: true,trim: true},
    email: {type: String, required: true, unique: true,trim: true,lowercase: true},
    password: {type: String, required: true},
});

const user = mongoose.model('User', userSchema);

export default user;