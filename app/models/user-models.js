const mongoose=require("mongoose")
const {Schema,model}=mongoose

const userSchema=new Schema({
    uid:Number,
    username:String,
    email:String,
    address:{
        city:String,
        zipcode:String
    }
})

const User=model("User",userSchema)

module.exports=User