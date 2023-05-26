import mongoose from "mongoose";

const Connnection = () => {
    
    console.log("IN");
    const DB_URI = `mongodb://dimbersanket:naruto@ac-igeujhd-shard-00-00.vnafzi2.mongodb.net:27017,ac-igeujhd-shard-00-01.vnafzi2.mongodb.net:27017,ac-igeujhd-shard-00-02.vnafzi2.mongodb.net:27017/?ssl=true&replicaSet=atlas-n5wb52-shard-0&authSource=admin&retryWrites=true&w=majority`;
    
    try{
        mongoose.connect(DB_URI,{useNewUrlParser:true});
        console.log("DATABASE CONNECTED SUCESSFULLY");
    }catch(error){
        console.log("Error while connecting to server",error.message);
    }
}

export default Connnection;