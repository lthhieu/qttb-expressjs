import mongoose from 'mongoose';

let formCategorySchema = new mongoose.Schema({
    name: {
        type: String
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("FormCategory", formCategorySchema);