const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")


const resisterApi = async function(req, res){
    let bodyData = req.body;
    let results = await userModel.create(bodyData)
    res.send(results)
}

const loginApi = async function(req, res){
    let email = req.body.emailId
    let pass = req.body.password
    let user = await userModel.findOne({emailId:email, password: pass})
    if(!user){res.send("Login Failed")}
   
        let token = jwt.sign({emailId:user.emailId, password:user.password, userId:user.userId }, "Hello i Am Ashish")
        res.setHeader('x-auth-token', token)
        res.send({status: true, token:token})
    
}


const fetchUser = async function(req, res){
    let userId = req.params.userId
    let userData = await userModel.findById(userId)
    res.send(userData)
}

const updateUser = async function(req, res){
    let data = req.body;
    let userId = req.params.userId
    let result1 = await userModel.findByIdAndUpdate(userId, data, {new:true})
    res.send(result1)
}

const deleteUser = async function(req, res){
    let userId = req.params.userId
    let result = await userModel.findByIdAndUpdate(userId, {$set:{isDeleted:true}}, {new:true})
    res.send(result)
}


module.exports = {resisterApi, loginApi, deleteUser}
module.exports.updateUser = updateUser
module.exports.fetchUser = fetchUser