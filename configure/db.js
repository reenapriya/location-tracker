const mongoose=require("mongoose")


const configureDb=async(req,res)=>{
    try{
    const db= await mongoose.connect("mongodb://127.0.0.1:27017/server-server")
    console.log("successfully connected db")
}
catch(e){
    console.log(e.message)
}
}

module.exports=configureDb