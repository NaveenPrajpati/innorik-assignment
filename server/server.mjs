// server.js
import express from 'express';
import dotenv from 'dotenv'
import router from './routes/userRoute.js';
import cors from 'cors'
import { dbConnect } from './config/dbconfig.js';
dotenv.config()


const app = express();
app.use(cors())

app.use(express.json());

dbConnect()

app.use('/api',router );



app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
