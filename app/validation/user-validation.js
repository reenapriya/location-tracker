const User=require("../models/user-models")

const userSearchValidation=({
    uid:{
        in:["query"],
        exists:{
            errorMessage:"uid is required"
                
            },
     notEmpty:{
        errorMessage:"uid is not empty"
     }
    }
})

module.exports={userSearchValidation}