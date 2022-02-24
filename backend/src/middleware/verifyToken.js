const { ObjectID } = require("mongodb")
const jwt = require("jsonwebtoken")

let incomingToken;
const verifyToken = (token) => {

    if (token.includes("{")) {
        incomingToken = JSON.parse(token).token
        console.log("NOT STRING:", token)
    }
    if (!token.includes("{")) {
        incomingToken = token
        console.log("IS A STRING:", token)
    }

    const verified = jwt.verify(incomingToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            throw new Error(err)
        }
        if (decoded) {
            const id = new ObjectID(decoded.sub)
            return id
        }
    })
    return verified
}

module.exports = { verifyToken }