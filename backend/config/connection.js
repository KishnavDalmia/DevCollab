import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
    try{
      mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
      });
      mongoose.connection.on('error', (err) => {
        console.log('Error connecting to MongoDB:', err);
      });
      await mongoose.connect(process.env.MONGODB_URI);
    }catch(e){
      console.log(e);
    }
}

export default connectDB;