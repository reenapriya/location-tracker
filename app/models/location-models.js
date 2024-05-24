// const mongoose=require("mongoose")
// const {Schema,model}=mongoose



// const locationSchema=new Schema({
//     input:String
// })

// const Location=model("Location",locationSchema)

// module.exports=Location
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    q: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
