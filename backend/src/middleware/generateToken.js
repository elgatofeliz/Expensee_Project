const jwt = require('jsonwebtoken');

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

module.exports = { generateToken }