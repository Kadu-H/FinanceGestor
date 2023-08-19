const mongoose = require('mongoose');

const CostSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim: true,
        maxlength:30,
    }, 
    cost:{
        type: Number,
        required:true,
    },
    type:{
        type: String,
        required:true,
        trim: true,
        maxlength:15,
        default: "Gastos gerais",
    },
});

module.exports = mongoose.model('Costs', CostSchema);