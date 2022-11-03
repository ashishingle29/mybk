const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const documentSchema = new mongoose.Schema( {
    userId: {
        type: ObjectId,
        ref : 'UserList2'
        },
	productId: {
        type: ObjectId,
        ref : 'productList2'
        },
	amount: Number,
	isFreeAppUser: Boolean, 
	date: now.Date(),

}, { timestamps: true });


module.exports = mongoose.model('OrderdocumentList2', documentSchema) //users