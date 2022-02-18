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

module.exports = { registerUser, getUserByEmail }