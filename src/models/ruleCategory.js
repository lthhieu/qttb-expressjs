import mongoose from 'mongoose';

let ruleCategorySchema = new mongoose.Schema({
    name: {
        type: String
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("RuleCategory", ruleCategorySchema);