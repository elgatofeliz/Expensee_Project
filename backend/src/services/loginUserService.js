const dotenv = require("dotenv")

const { getUserByEmail } = require("../db_access/user-dao.js")
const { passwordHash } = require("../middleware/passwordHash.js")
const { generateToken } = require("../middleware/generateToken.js")

dotenv.config()

async function loginUserService({ email, password }) {
    const foundUser = await getUserByEmail(email)
    if (!foundUser) {
        throw new Error("Nutzer wurde nicht gefunden")
    }
    const hashedPassword = passwordHash(password)
    const passwordIsCorrect = foundUser.passwordHash === hashedPassword
    if (!passwordIsCorrect) {
        throw new Error("Email and password do not match.")
    }
    console.log(foundUser)
    if (!foundUser.isAuth) {
        console.log("user aint authenticated")
        return false
    }
    console.log("user is Authenticated")

    const token = generateToken(foundUser)
    return { token: token }
}

module.exports = { loginUserService }