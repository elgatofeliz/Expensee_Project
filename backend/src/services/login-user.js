const jwt = require('jsonwebtoken');
const { getUserByEmail } = require("../db_access/user-dao.js")
const { passwordHash } = require("../middleware/passwordHash.js")

const generateToken = (user) => {
    const NOW = Date.now() / 1000
    const ONE_DAY = 24 * 60 * 60
    const NOW_IN_ONE_DAY = NOW + ONE_DAY

    const token = jwt.sign({
        sub: user._id,      // wer ist es
        iat: NOW, // dividieren durch 1000 um von millisekunden auf sekunden zu kommen...
        exp: NOW_IN_ONE_DAY, // wann er abläuft
        type: "access_token",
    }, process.env.JWT_SECRET)
    return token
}


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
    const token = generateToken(foundUser)
    return token
}



module.exports = { loginUserService }