const jwt = require("jsonwebtoken")

const Authentication = function(req, res, next){
    try{
    let token = req.headers["x-auth-token"]
    if(!token){
        return res.ststus(401).send("Header is not avilable")
    }
    
    let decode = jwt.verify(token, "Hello")
    if(!decode){
        return res.ststus(403).send("invalid Token")
    }
    next()
}catch (error) {
    return res.status(500).send({ msg: "SERVER ISSUE" })

  }
}

const authorization = function(req, res, next){
    try{
    let token = req.headers["x-auth-token"]
    if(!token){
        return res.status(403).send("Header is not avilable")
    }
    
    let decode = jwt.verify(token, "Hello")
    if(!decode){
        return res.status(401).send("invalid Token")
    }
    let usertobe = req.params.userId
    let userlogin = decode.Id
    if(usertobe != userlogin){
        res.status(403).send({msg: "Its Not your Id"})
    }
    next()
}catch (error) {
    return res.status(500).send({ msg: "SERVER ISSUE" })

  }
}
module.exports ={Authentication, authorization}