const { MongoClient } = require("mongodb");

let _db; // Design Pattern = Singleton

async function getDb() {
    // "resolve",   "reject"
    if (_db) {
        // hier ist die datenbank verbindung schon aufrecht
        // ich kann direkt die Promise von oben resolven...
        // ich muss keine weitere verbindung aufbauen...
        return _db;
    } else {
        const url = process.env.DB_URL;
        const client = new MongoClient(url);

        const connected_client = await client.connect();
        _db = connected_client.db("expensee");

        return _db;
    }
}

module.exports = { getDb }