import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';
import dns from 'dns';

// Change DNS
dns.setServers(["1.1.1.1", "8.8.8.8"]);

//APP CONFIG
const app = express()
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//Middlewares
app.use(express.json())
app.use(cors())

//API Endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)

app.get('/',(req,res)=>{
    res.send('API is Working')
})

app.listen(port, ()=> console.log('Server stared on port: '+port));
