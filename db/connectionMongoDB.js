require('dotenv').config();
const {MongoClient} = require('mongodb');
const uri = process.env.MONGO_DB_CONNECTION_FORMAT+process.env.MONGO_DB_HOST
const client = new MongoClient(uri);

async function conn(){
    console.log("*************************")
    console.log("* Connessione a MongoDB *")
    console.log("*************************")
    try {
        await client.connect()
        client.db().command({ping:1})
        console.log("*")
        console.log("* Connection Success");
        console.log("*")
        listDb = await client.db().admin().listDatabases();
        console.log("*")
        console.log("* DB presenti")
        console.log("*")
        listDb.databases.forEach(db => console.log("* DB name : " + db.name));
        console.log("*")
        console.log("* Informazioni per il db "+ process.env.DBINFO)
        stats =  await client.db().stats({dbName:process.env.DBINFO})
        console.log(stats)
    } catch (error) {   
        console.error("* Connection Failure : " + error);
    }
}


 client.connect(async function(err) {

    if(err)
        console.error("* Connection Failure : " + err);
    else{
        client.db().command({ping:1})
        console.log("*")
        console.log("* Connection Success");
        console.log("*")
        listDb = await client.db().admin().listDatabases();
        console.log("*")
        console.log("* DB presenti")
        console.log("*")
        listDb.databases.forEach(db => console.log("* DB name : " + db.name));
        console.log("*")
        console.log("* Informazioni per il db "+ process.env.DBINFO)
        stats =  await client.db().stats({dbName:process.env.DBINFO})
        console.log(stats)
    }
})

module.exports = client