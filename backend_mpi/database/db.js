import mongoose from "mongoose";
// const env = require('./environment')

const Connection = async() => {
const url1 = `mongodb://mpiautocosmosdb:942iccbk2awz9rt38kVK9NikLgBCvcIlGBI8BgDutbLcEiPIr2CgUt1A0S7qfwDHFelidavrWazgACDb0fU4jg==@mpiautocosmosdb.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@mpiautocosmosdb@`
    try{
        await mongoose.connect(url1)
        console.log("Database connected successfully");
    }
    catch(error){
        console.log("Error while connecting with database ",error);
    }

}

export default Connection;