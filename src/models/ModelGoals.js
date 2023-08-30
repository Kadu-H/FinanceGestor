const mongoose = require("mongoose");

const GoalsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        maxlength:30,
    },
    category:{
        type: String,
        required: true,
        trim: true,
        maxlength:30,
    },
    goal:{
        type: Number,
        required:true,
    }
});

module.exports = mongoose.model('Goals', GoalsSchema);