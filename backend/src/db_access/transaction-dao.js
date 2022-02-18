const { getDb } = require('../db_access/get_db')


const addNewTransaction = async (id, transactionObject) => {

    // try {
    const db = await getDb()     // Datenbank verbindung aufrechnen
    // }
    // catch {
    //     (error) => {
    //         console.log('error by accesing database', error)
    //     }
    // }

    return await
        // Pushen gegebene transaktion Objekt in gegebene user id
        db.collection('user').updateOne({ _id: id }, { $push: { transactions: transactionObject } })

}

module.exports = { addNewTransaction }