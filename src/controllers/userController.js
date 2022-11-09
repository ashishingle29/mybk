const userModel= require("../models/userModel")

const createUser= async function (req,res) {

 const {name, address, balance, gender, age} = req.body

 const isAppFreeUser = req.isAppFreeUser

//required fields validation
if(!name|| !address || !balance || !gender || !age){
    return res.send({msg:"All field is mandatory"})
}

const userDetails = await userModel.create({name, address, balance, gender, age})

 return res.send({msg: userDetails})
}


module.exports.createUser= createUser
