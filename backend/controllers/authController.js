import User from '../models/userModel.js'
import bcrypt from 'bcrypt'

export const logout = (req,res) => {
    req.session.destroy((err)=>{
        if(err){
            return res.status(500).json({message: "Could not log out"});
        }
        res.clearCookie('connect.sid');
        res.json({message: "Logout successful"});
    });
}

export const login = async (req,res) =>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(401).json({message:"Invalid Credentials"});
        const isValidPass = await bcrypt.compare(password, user.password);
        if(!isValidPass) return res.status(401).json({message:"Invalid Credentials"});
        req.session.userId = user._id;
        req.session.username = user.username;
        res.json({message:"Login successful!",user:{id:user._id, username: user.username, name: user.name, email: user.email}});
    }catch(err){
        console.log(err.message);
        res.status(500).json({message: "Server error"});
    }
}

export const register = async (req,res) => {
    try{
        const {username,name,email,password} = req.body;
        const existingUser = await User.findOne({$or: [{email},{username}]});
        if(existingUser) return res.status(400).json({message: "User already exists"});
        const user = new User({name,username,email,password: await bcrypt.hash(password,10)});
        console.log(user);
        await user.save();
        req.session.userId = user._id;
        req.session.username = user.username;
        req.session.save((err) => {
            if(err) return res.status(500).json({message: err.message || "Could not save session"});
            return res.status(201).json({message:"User registered successfully", user: {id: user._id, username: user.username, name: user.name, email: user.email}});
        });
      
    }catch(err){
        console.log(err.data.message);
        res.status(500).json({message: "Server error"});
    }
}

export const me = async (req,res) => {
    try{
        const user = await User.findById(req.session.userId).select('-password');
        res.json({user});
    }catch(err){
        console.log(err.message);
        res.status(500).json({message: "Server error"});
    }
}