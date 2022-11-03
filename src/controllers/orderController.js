const productModel = require('../models/productModel')


const createorder = async function (req, res){
    data = req.boy
    let orderdata = await orderModel.create(data)
    res.send({massage: orderdata})
    }
    
    module.exports.createorder= createorder