const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
        unique: true
    },
        author_id: {
        type: ObjectId,
        ref: "NewAuthor",
        required: true
    }, 
    price: Number,
    ratings: Number,
    publisher: {
        type : ObjectId,
        ref : "Publisher",
        required:true
    },
    HardCover: {
        type: Boolean,
        default: false
    }
    

}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema)
