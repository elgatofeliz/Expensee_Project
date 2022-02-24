const { getDb } = require('../db_access/get_db')
const { ObjectId } = require('mongodb')


const addNewTransaction = async (id, transactionObject) => {

    const db = await getDb()     // Datenbank verbindung aufrechnen
    // schmeißen neue Transaktion Object in selected User
    const dbResponse = await db.collection('user').updateOne({ _id: ObjectId(id) }, { $push: { transactions: transactionObject } })

    // console.log(dbResponse)

    const unchangedAmount = Number(transactionObject.amount)
    await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { sumEASS: unchangedAmount } })

    // neue EASS Stand berechnen
    let responseAusgebenDB;
    let responseSumEASS_DB;
    const positiveAmount = Math.abs(unchangedAmount)
    switch (transactionObject.category) {
        case "Einkommen":
            await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { "EASS.Einkommen": positiveAmount } })
            break;
        case "Lebensmittel":
            responseAusgebenDB = await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { "EASS.Ausgeben": positiveAmount } })
            break;
        case "Shopping":
            responseAusgebenDB = await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { "EASS.Ausgeben": positiveAmount } })
            break;
        case "Wohnung":
            responseAusgebenDB = await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { "EASS.Ausgeben": positiveAmount } })
            break;
        case "Restaurant":
            responseAusgebenDB = await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { "EASS.Ausgeben": positiveAmount } })
            break;
        case "Sparen":
            responseAusgebenDB = await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { "EASS.Sparen": positiveAmount } })
            break;
        case "Sontiges":
            responseAusgebenDB = await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { "EASS.Sontiges": positiveAmount } })
            break;

        default:
            throw new Error('add new transaction failed')
            break;
    }
    // console.log(dbResponse,responseAusgebenDB,responseSumEASS_DB)
    return { dbResponse, responseAusgebenDB, responseSumEASS_DB }
    // Pushen gegebene transaktion Objekt in gegebene user id
}

module.exports = { addNewTransaction }
