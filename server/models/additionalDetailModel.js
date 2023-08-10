import mongoose from "mongoose";

const additionalSchema=  new mongoose.Schema({
   
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

export default mongoose.model('additional',additionalSchema)