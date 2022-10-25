const UserModel= require("../models/userModel

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }



//Assignment code
const createbookdata = async function (req,res){
    let data=req.body
    let savedData = await UserModel.create(data)
    res.send({msg:savedData})
}
const getbookdata = async function (req,res){
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}



module.exports.bookcreateUser = createbookdata
module.exports.bookgetUser = getbookdata






// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData