// server.js
import express from 'express';
import dotenv from 'dotenv'
import router from './routes/userRoute';
import cors from 'cors'
dotenv.config()


const app = express();
app.use(cors)

app.use(express.json());



app.use('/api',router );



app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
