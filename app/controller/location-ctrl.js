// // const Location=require("../models/location-models")
// // const axios=require("axios")

// // module.exports.location=async(req,res)=>{
// //     const apiKey="ace56ec247d44f7d99e65958674d9ac0"
// //     console.log(req.query)
   
// //     const {place}=req.query
// //    try{
// //     const location =await Location.findOne({place:place})
// //      if(!location){
// //         const response=await axios.get(`https://api.opencagedata.com/geocode/v1/json?${apiKey}&${place}`)
// //         console.log(response.body.results[0].geometry.lat)
// //      }
// //    }

   

// // catch(e){
// //     console.log(e.message)
// //     res.json("something went wrong")
// // }
// // }
// // const Location = require("../models/location-models");
// // const axios = require("axios");

// // module.exports.location = async (req, res) => {
// //     const apiKey = "ace56ec247d44f7d99e65958674d9ac0";
// //     console.log(req.query);
   
// //     const { place } = req.query;

// //     try {
        
// //         const locations = await Location.find()
// //         //res.json(locations)
// //         // const location = await Location.findOne({ place: place });
// //         if (!locations) {
// //             const location = await Location.findOne({ place: place });
// //             if(!location){
// //             const response = await axios.get(`https://api.opencagedata.com/geocde/v1/json`, {
// //                 params: {
// //                     key: apiKey,
// //                     q: place
// //                 }
// //             });
// //             console.log("lat",response.data.results[0].geometry.lat)
// //             console.log("lng",response.data.results[0].geometry.lng)
// //             const {lat,lng}=response.data.results[0].geometry
// //             const newGeo=await Location.create({place:place,latitude:lat,longitude:lng})
// //             console.log("newGeo",newGeo)
// //             return res.status(201).json(newGeo)
// //            // return res.status(201).json({
// //         }
            
// //             //const { lat, lng } = response.data.results[0].geometry;
// //             // // Assuming your Location model schema has fields `latitude` and `longitude`
// //             // location = await Location.create({ place: place, latitude: lat, longitude: lng });
// //         }
// //         res.json(locations); // Sending location back to the client
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ message: "Something went wrong" });
// //     }
// // };
// const Location = require("../models/location-models");
// const axios = require("axios");

// module.exports.location = async (req, res) => {
//     const apiKey = "ace56ec247d44f7d99e65958674d9ac0";
//     console.log(req.query);
   
//     const { place } = req.query;

//     try {
//         const locations = await Location.find({ place: place });
        
//         if (locations && locations.length > 0) {
//             res.json(locations);
//         } else {
//             const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${place}&key=${apiKey}`, {
//     params: {
//         key: apiKey,
//         q: place
//     }})

//             };

//             const { lat, lng } = response.data.results[0].geometry;

//             const newGeo = await Location.create({ place: place, latitude: lat, longitude: lng });
//             console.log("newGeo", newGeo);
            
//             res.status(201).json(newGeo);
//         }
//      catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Something went wrong" });
//     }
// };
// // const Location = require('../models/location-models')
// const axios = require('axios')


// module.exports.location= async(req,res)=>{
//     const Apikey="ace56ec247d44f7d99e65958674d9ac0"
//    /* console.log(req.query) */

//     const {address} = req.query

//     try{
//         const location = await Location.findOne({address:address})
//         if(!location) {
//             const response= await axios.get(`https://api.opencagedata.com/geocode/v1/json?`,{
//                 params : {
//                     key: Apikey,
//                     query:address
//                 }
//             })
//             console.log('lat',response.data.results[0].geometry.lat)
//             console.log('lng',response.data.results[0].geometry.lng)
//             const {lat,lng} = response.data.results[0].geometry
//             const newGeo = await Location.create({address:address , latitude:lat , longitude:lng})
//             console.log('newGeo',newGeo)
//             return res.status(201).json(newGeo)
//         }
//         res.json(location)
//     } catch(err) {
//         console.log(err)
//     }
// }