const jwt = require("jsonwebtoken")

const Authentication = function(req, res, next){
    let token = req.headers["x-auth-token"]
    if(!token){
        return res.send("Header is not avilable")
    }
    
    let decode = jwt.verify(token, "Hello")
    if(!decode){
        return res.send("invalid Token")
    }
    next()
}

const authorization = function(req, res, next){
    let token = req.headers["x-auth-token"]
    if(!token){
        return res.send("Header is not avilable")
    }
    
    let decode = jwt.verify(token, "Hello")
    if(!decode){
        return res.send("invalid Token")
    }
    let usertobe = req.params.userId
    let userlogin = decode.Id
    if(usertobe != userlogin){
        res.send({msg: "Its Not your Id"})
    }
    next()
}
module.exports ={Authentication, authorization}