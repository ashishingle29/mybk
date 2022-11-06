const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
    let token = req.headers['x-auth-token']
    
    if(!token){
        res.send({Status: false, Msg : "Please Provide Token"});
    }else{
        next()
    }
}


// const authorise = function(req, res, next) {
//     // comapre the logged in user's id and the id in request
//     next()
// }


module.exports.authenticate =authenticate 