const Logger = require('./logger.js');
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "ecommerce";

async function connect() {
    try {
        const client = new MongoClient(url);
        await client.connect();
        const db = client.db(dbName);
        return { db, client };
    } catch (error) {
        console.log("Erro ao conectar ao BD.");
        Logger.log(error);
    }
}

module.exports = { connect };