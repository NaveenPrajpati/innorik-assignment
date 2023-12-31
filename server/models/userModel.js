import mongoose from "mongoose";

const userSchema=  new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    interests: [{ type: String}],
    readLater: [{
        title: String,
        description: String,
        content: String,
        url: String,
        image: String,
        publishedAt: Date,
        source: {
            name: String,
            url: String
        }
    }],
    
})

export default mongoose.model('user',userSchema)