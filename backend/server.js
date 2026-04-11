import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB  from './config/connection.js';
import sessionConfig  from './config/session.js';
import authRoutes from './routes/authRoute.js';
import { isAuthenticated } from './middleware/authMiddleware.js';

const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use(cors({origin:'http://localhost:5173',credentials: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(sessionConfig);
app.use('/api/auth', authRoutes);
app.use('/api/dashboard',isAuthenticated, (req,res)=>{
    res.json({message: `Welcome to your dashboard, ${req.session.username}!`});
});
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    console.log('session:', req.session);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})