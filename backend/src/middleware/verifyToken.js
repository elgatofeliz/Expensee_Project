const { ObjectID } = require("mongodb")
const jwt = require("jsonwebtoken")

const verifyToken = (token) => {
    const incomingToken = JSON.parse(token).token
    const verified = jwt.verify(incomingToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            throw new Error("Error")
        }
        if (decoded) {
            const id = new ObjectID(decoded.sub)
            return id
        }
    })
    return verified
}

module.exports = { verifyToken }