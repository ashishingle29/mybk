const mongoose = require('mongoose');


const pubSchema = new mongoose.Schema( {
    name: {
        type: String,
        unique : true,
        required : true },
    headQuarter: String
    
}, {timestamps: true})

module.exports = mongoose.model('Publisher', pubSchema)


