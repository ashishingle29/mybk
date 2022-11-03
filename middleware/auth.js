const jwt = require("jsonwebtoken");


const verifytoken = async function (req, res, next) {
    let header = req.headers["x-auth-token"]

    if (!header) {
        res.send({
            status: false,
            msg: "Token is not Available",
        })
    } else {

        let verifyingToken = jwt.verify(header, "Hello i Am Ashish")
        if (!verifyingToken) {
            res.send({ status: false, msg: "Token is invalid", })
        } else {
            next()
        }
    }
}

module.exports.verifytoken = verifytoken;