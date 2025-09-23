import mongoose from 'mongoose';

let postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    thumbnail: {
        type: String
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true
    },
    mimetype: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Post", postSchema);