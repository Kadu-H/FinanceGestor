const mongoose = require("mongoose");

const AportsSchema = new mongoose.Schema({

    aport:{
        type: Number,
        required:true,
    },
    parentId:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Aports', AportsSchema);