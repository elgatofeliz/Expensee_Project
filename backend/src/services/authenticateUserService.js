const { getUserByEmail, authenticateUser } = require('../db_access/user-dao.js')

async function authenticateUserService(email, code) {
    const foundUser = await getUserByEmail(email)
    if (!foundUser) {
        throw new Error("userDoesntExist")
    }
    if (foundUser.authCode !== Number(code)) {
        throw new Error("Der eingegebene Code war Falsch")
    }
    const authenticated = authenticateUser(email)
    return authenticated
}

module.exports = { authenticateUserService }