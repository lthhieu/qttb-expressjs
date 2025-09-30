import mongoose from 'mongoose';

let formSchema = new mongoose.Schema({
    name: {
        type: String
    },
    issueDate: {
        type: Date
    },
    file: {
        type: String
    },
    categoryFormId: {
        type: mongoose.Schema.ObjectId,
        ref: "FormCategory",
        require: true
    },
    mimetype: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Form", formSchema);