const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
});

//

import mongoose from 'mongoose';

let postSchema = new mongoose.Schema({

})

module.exports = mongoose.model("Post", postSchema);