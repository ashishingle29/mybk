const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     tags: [String],
    
//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10}
// }, { timestamps: true });


const bookSchema1 = new mongoose.Schema({
    bookName : {
        type : String,
        require : true
    },
    prices : {
        indianPrice : String,
        europePrice : String
    },
    year : {
        type : Number,
        default : 2021
    },
    tags : {
        type : String,
        enum : ["100INR", "200INR", "500INR"]
    },
    authorName : String,
    totalPages : Number,
    StockAvailable : Boolean

}, { timestamps : true})



// module.exports = mongoose.model('Book', bookSchema) //users
module.exports = mongoose.model('Book', bookSchema1)

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
