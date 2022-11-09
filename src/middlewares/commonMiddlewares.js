const mid1= function ( req, res, next) {
    let headers = req.headers.isfreeappuser
    if(!headers)
    return res.send("header is missing provide it")
    next()
}


module.exports.mid1=mid1