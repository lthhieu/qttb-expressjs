import mongoose from 'mongoose';

let ruleSchema = new mongoose.Schema({
    bio: {
        type: String
    },
    signNumber: {
        type: String
    },
    issueDate: {
        type: Date
    },
    categoryRuleId: {
        type: mongoose.Schema.ObjectId,
        ref: "RuleCategory",
        require: true
    },
    file: {
        type: String
    },
    mimetype: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Rule", ruleSchema);