import mongoose from "mongoose";

 const ConnectDB=async()=>{
    try{
       const conn = await mongoose.connect(process.env.MongoDB_url)
    console.log("connected to mongoDB")
    }catch(error){
        console.log(`mongoDB error: ${error}`)

    }
}
export default ConnectDB