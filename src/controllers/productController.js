const productModel = require('../models/productModel')


const createproduct = async function (req, res){
    data = req.boy
    let productdata = await productModel.create(data)
    res.send({massage: productdata})
    }
    
    module.exports.createproduct= createproduct