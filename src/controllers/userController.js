const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")


const createUser = async function (req, res) {
    try{
  let data = req.body
  let saveData = await userModel.create(data)
  res.status(201).send({ msg: saveData })
    }catch (error) {
        return res.status(500).send({ msg: "SERVER ISSUE", ErrorType: error.message })
    
      }
}


const loginUser = async function (req, res) {
    try {
  let data = req.body
  let { emailId, password } = data

  let user = await userModel.findOne({
    emailId: data.emailId, password: data.password
  })

  if (!user) {
    res.status(404).send({ msg: "username or the password is not corerct" })
  } else {
    let payload = { emailId, Id: user._id }
    let token = jwt.sign(payload, "Hello");

    res.header("x-auth-token", token)
    res.status(200).send({ status: "You have Successful LoggedIn", token: token })
  }
} catch (error) {
    return res.status(500).send({ msg: "SERVER ISSUE", ErrorType: error.message })

  }

} 


const getUserData = async function (req, res) {
    try{
  let userId = req.params.userId
  let data = await userModel.findById(userId)
  res.status(200).send({ Status: "The Token is Valid", UserData: data })
}catch (error) {
    return res.status(500).send({ msg: "SERVER ISSUE", ErrorType: error.message })

  }
}


const updatedata = async function (req, res) {
    try{
  let userId = req.params.userId
  let Data = req.body
  let update = await userModel.updateOne({ _id: userId },
    {
      $set: {
        firstName: Data.firstName,
        lastName: Data.lastName,
        mobile: Data.mobile, 
        emailId: Data.emailId, 
        password: Data.password,
        gender: Data.gender,
        age:Data.age,
        isDeleted:Data.isDeleted
      }
    }, { new: true });
  res.send(update)
}catch (error) {
    return res.status(500).send({ msg: "SERVER ISSUE", ErrorType: error.message })

  }
}




const deleteData = async function (req, res) {
    try{
  let userId = req.params.userId
  
  let update = await userModel.findByIdAndUpdate({ _id: userId }, {isDeleted:true}, { new: true })
  res.status(200).send({status: true, data: update})
}catch (error) {
    return res.status(500).send({ msg: "SERVER ISSUE", ErrorType: error.message})

  }
}




module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.getUserData = getUserData
module.exports.updatedata = updatedata
module.exports.deleteData = deleteData
