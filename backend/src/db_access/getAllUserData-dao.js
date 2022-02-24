const { getDb } = require('../db_access/get_db')

async function allUserDataDB(id) {
    const db = await getDb()
    const userData = await db.collection('user').findOne({ _id: id })
    return userData
}

module.exports = { allUserDataDB }