const { getDb } = require("./get_db.js");

async function registerUser(user) {
    const db = await getDb()
    const response = await db.collection("user").insertOne(user)
    return response
}
async function getUserByEmail(email) {
    const db = await getDb();
    const foundUser = await db.collection('user').findOne({ email });
    return foundUser
}
async function authenticateUser(email) {
    const db = await getDb()
    const authenticate = await db.collection("user").updateOne({ email: email }, { $set: { isAuth: true } })
    return authenticate
}

module.exports = { registerUser, getUserByEmail, authenticateUser }