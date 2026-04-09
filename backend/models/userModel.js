import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
    name: {type: String, required: true,trim: true},
    username: {type: String, required: true, unique: true,trim: true},
    email: {type: String, required: true, unique: true,trim: true,lowercase: true},
    password: {type: String, required: true},
});

userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
});

userSchema.methods.comparePassword = async function(candidatePassword){
    return await bcrypt.compare(candidatePassword,this.password);
}

const user = mongoose.model('User', userSchema);

export default user;