import mongoose from "mongoose";

export const dbConnect=()=>{
    mongoose.connect(process.env.BASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      
      }).then(() => {
        console.log('Connected to the database');
      }).catch((error) => {
        console.error('Database connection error:', error);
      });
}