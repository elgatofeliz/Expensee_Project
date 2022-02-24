const { getUserByEmail, authenticateUser } = require('../db_access/user-dao.js')
const { generateToken } = require("../middleware/generateToken.js")

async function authenticateUserService(email, code) {
    const foundUser = await getUserByEmail(email)
    if (!foundUser) {
        throw new Error("userDoesntExist")
    }
    if (foundUser.authCode !== Number(code)) {
        throw new Error("Der eingegebene Code war Falsch")
    }
    const authenticated = await authenticateUser(email)
    if (!authenticated.acknowledged) {
        return authenticated
    }
    const token = generateToken(foundUser)
    console.log(token)
    return token
}

module.exports = { authenticateUserService }