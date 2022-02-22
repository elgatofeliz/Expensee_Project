const { getUserByEmail, authenticateUser } = require("../db_access/user-dao.js")

async function authenticateUserService(email, code) {
    const foundUser = await getUserByEmail(email)
    if (!foundUser) {
        throw new Error("Email nicht gefunden")
    }
    if (foundUser.authCode !== Number(code)) {
        console.log("Hallo")
        throw new Error("Falscher Code")
    }
    console.log("Hello")
    const response = await authenticateUser(email, code)
    return response
}

module.exports = { authenticateUserService }