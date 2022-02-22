const { getDb } = require('../db_access/get_db')
const { ObjectId } = require('mongodb')


const addNewTransaction = async (id, transactionObject) => {

    // try {
    const db = await getDb()     // Datenbank verbindung aufrechnen
    // }
    // catch {
    //     (error) => {
    //         console.log('error by accesing database', error)
    //     }
    // }
    // schmeißen neue Transaktion Object in selected User
    const dbResponse = await db.collection('user').updateOne({ _id: ObjectId(id) }, { $push: { transactions: transactionObject } })

    // console.log(dbResponse)

    const amount = transactionObject.amount
    await db.collection('user').updateOne({ _id: id }, { $inc: { sumEASS: amount } })
    // neue EASS und sumEASSS Stand berechnen
    let responseAusgebenDB;
    let responseSumEASS_DB;
    console.log(transactionObject.category)
    switch (transactionObject.category) {
        case "Einkommen":
            await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { "EASS.Einkommen": amount } })
            await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { sumEASS: amount } })
            break;
        case "Lebensmittel":
            responseAusgebenDB = await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { "EASS.Ausgeben": amount } })
            responseSumEASS_DB = await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { sumEASS: amount } })
            break;
        case "Shopping":
            responseAusgebenDB = await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { "EASS.Ausgeben": amount } })
            responseSumEASS_DB = await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { sumEASS: amount } })
            break;
        case "Wohnung":
            responseAusgebenDB = await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { "EASS.Wohnung": amount } })
            responseSumEASS_DB = await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { sumEASS: amount } })
            break;
        case "Restaurant":
            responseAusgebenDB = await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { "EASS.Restaurant": amount } })
            responseSumEASS_DB = await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { sumEASS: amount } })
            break;
        case "Shopping":
            responseAusgebenDB = await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { "EASS.Ausgeben": amount } })
            responseSumEASS_DB = await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { sumEASS: amount } })
            break;
        case "Sontiges":
            responseAusgebenDB = await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { "EASS.Sontiges": amount } })
            responseAusgebenDB = await db.collection('user').updateOne({ _id: ObjectId(id) }, { $inc: { sumEASS: amount } })
            break;

        default:
            throw new Error('add new transation failed')
            break;
    }
    // console.log(dbResponse,responseAusgebenDB,responseSumEASS_DB)
    return { dbResponse, responseAusgebenDB, responseSumEASS_DB }
    // Pushen gegebene transaktion Objekt in gegebene user id
}

module.exports = { addNewTransaction }
