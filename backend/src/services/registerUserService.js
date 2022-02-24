const { registerUser } = require("../db_access/user-dao.js")
const { getUserByEmail } = require("../db_access/user-dao.js")
const { sendMail } = require("../middleware/nodemailer.js")

const registerUserService = async (userData) => {
    const userExists = await getUserByEmail(userData.email)
    if (userExists) {
        throw new Error("emailExists")
    }
    const dbResponse = await registerUser(userData)
    if (!dbResponse.acknowledged) {
        throw new Error("Es ist ein Fehler in der Datenbank aufgetreten. Bitte versuche es erneut.")
    }
    sendMail(userData.authCode, userData.email)
    return dbResponse
}

module.exports = {
    registerUserService
}