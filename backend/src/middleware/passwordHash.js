const crypto = require('crypto')
const dotenv = require("dotenv")

dotenv.config()

function passwordHash(password) {
    const passwordHash = crypto.createHash('sha256', process.env.PW_SECRET).update(password).digest('hex')
    return passwordHash
}

module.exports = { passwordHash }