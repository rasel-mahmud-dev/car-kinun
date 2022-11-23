require("dotenv").config()

const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient(process.env.MONGODB_URL);

let database;
function mongoConnect() {
    return new Promise(async (resolve, reject) => {
        const clientPromise = client.connect();
        try {
            // we use mongodb client caching
            if(!database) {
                database = (await clientPromise).db("car-kinun");
            }
            resolve(database)
            console.log("database connected...")
        } catch (ex){
            reject(ex)
        }
    })
}



class Common {
    collectionName = "";
    static collectionName = "";

    constructor(collectionName) {
        // when call with new keyword extend classes...
        // this.collectionName = collectionName;
        Common.collectionName = collectionName;
    }

    static databaseConnection;

    static Db(collection){
        return new Promise(async (resolve, reject) => {
            try {
                if (!Common.databaseConnection) {
                    Common.databaseConnection = await mongoConnect();
                }
                resolve(Common.databaseConnection.collection(collection));
            } catch (ex) {
                reject(ex);
            }
        });
    }

    static get collection(){
        return Common.Db(this.collectionName)
    }

    static deleteOne(filter){
        // Common.Db(this.collectionName).deleteOne(filter)
        // return
    }
}

export default Common;
