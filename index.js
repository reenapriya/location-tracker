const express=require("express")
const {checkSchema}=require("express-validator")
const configureDb=require("./configure/db")
const {userSearchValidation}=require("./app/validation/user-validation")
const usersCtrl=require("./app/controller/user-ctrl")
const geoCtrl=require("./app/controller/geo-ctrl")
const cors=require("cors")
configureDb()
const app=express()
const port=3666
app.use(express.json())
app.use(cors())

app.get("/api/search",checkSchema(userSearchValidation),usersCtrl.search)
app.get("/api/locations",geoCtrl.location)

app.listen(port,()=>{
    console.log("successfully connected on portal")
})