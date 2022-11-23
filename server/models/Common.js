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

    constructor(collectionName) {
        // when call with new keyword extend classes...
        this.collectionName = collectionName;
    }

    static databaseConnection;

    static get Db(){
        return new Promise(async (resolve, reject) => {
            try {
                if (!Common.databaseConnection) {
                    Common.databaseConnection = await mongoConnect();
                }
                resolve(Common.databaseConnection);
            } catch (ex) {
                reject(ex);
            }
        });
    }


    static async find(){
      return new Promise(async (resolve, reject)=>{
        try {

        }catch (ex){

        }
      })
    }
}

export default Common;
