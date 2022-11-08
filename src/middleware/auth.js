const jwt = require("jsonwebtoken")

const loginCheck = function(req, res, next){
    let token = req.headers["x-auth-token"]
    if(!token){
        return res.send("Header is not avilable")
    }
    
    let decode = jwt.verify(token, "Hello i Am Ashish")
    if(!decode){
        return res.send("invalid Token")
    }
    next()
}


const autherisation = function(req, res, next){
    let token = req.headers["x-auth-token"]
    if(!token){
        return res.send("Header is not avilable")
    }
    
    let decode = jwt.verify(token, "Hello i Am Ashish")
    if(!decode){
        return res.send("invalid Token")
    }
    let usertobe = req.params.userId
    let userlogin = decode.userId
    if(usertobe != userlogin){
        res.send({msg: "Its Not your Id"})
    }
    next()
}
module.exports ={loginCheck, autherisation}