// // const Location =require("../models/location-models")
// // const axios=require("axios")
// // module.exports.location=async(req,res)=>{
// //     const {place}=req.query
// //     const Apikey="ace56ec247d44f7d99e65958674d9ac0 "

// //  console.log(req.query)
 
// //     try{
// //       const location=await Location.find({
// //         place:place
// //       })

// //       if(!location){
// //         const response=await axios.get(`https://api.opencagedata.com/geocode/v1/json?`,{
// //             params:{
// //                 key:Apikey,
// //                 q:place
// //            }
// //         })
// //         console.log("lat",response.data.results[0].geometry.lat)
// //         console.log("lon",response.data.results[0].geometry.lng)

// //       }
// //       res.json(location)
// //     }
// //     catch(e){
// //         console.log(e.message)
// //         return res.status(500).json("internal error")
// //     }

// // }
// // const Location = require("../models/location-models");
// //  const axios = require("axios");

// // module.exports.location = async (req, res) => {
// //     const apiKey = "ace56ec247d44f7d99e65958674d9ac0";
// //     console.log(req.query);
   
// //     const { q } = req.query;

// //     try
// // {       const locations = await Location.find({q:q});
        
// //         if (!locations) {
// //             const location=new Location({
// //                 q:q,
// //                 lat:
// //             })
            
// // } else {
// //               const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
// //       params: {
// //           key: apiKey,
// //           q: q
// //       }})
// //       console.log(response.data.results[0].geometry.lat)
// //       console.log("lat",response.data.results[0].geometry.lat)
// //       console.log("lng",response.data.results[0].geometry.lng)
// //       console.log("lat",response.data.results[0].geometry.lat)
// //       console.log("lng",response.data.results[0].geometry.lng)

// //       const { lat, lng } = response.data.results[0].geometry;

// //       const newGeo = await Location.create({ q:q, latitude: lat, longitude: lng });
// //       console.log("newGeo", newGeo);
      
// //       res.status(201).json(newGeo);
// //               };
             
// //           }
// //        catch (error) {
// //           console.error(error);
// //           res.status(500).json({ message: "Something went wrong" });
// //       }
// //     };


// const Location=require("../models/location-models")
// const axios=require("axios")

// module.exports.location=async(req,res)=>{ 
//     const q =req.query.q
//     const apiKey = "ace56ec247d44f7d99e65958674d9ac0"
//     console.log(q)

//     const locations=await Location.findOne({q:q})
//     if(!locations){
//         try{
//             const response=await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
//                        params: {
//                           key: apiKey,
//                            q: q
//                       }})
//                       if(response){
//                         console.log("lat",response.data.results[0].geometry.lat)
//                         console.log("lng",response.data.results[0].geometry.lng)
//                         const {lat,lng}=response.data.results[0].geometry
//                         const newGeo = await Location.create({ q:q, latitude: lat, longitude: lng });
//                              console.log("newGeo", newGeo);
//                               await newGeo.save()
//                             return res.status(201).json(newGeo);
                        
//                         }
                       
                        
                      
//                       return res.json("location object is not present")
//         }
//         catch(e){
//             console.log(e.message)
//             return res.status(500).json("internal error")
//         }
//     }
//     res.status(200).json(locations)

// }

const Location = require("../models/location-models");
const axios = require("axios");

module.exports.location = async (req, res) => {
    const q = req.query.q;
    const apiKey = "ace56ec247d44f7d99e65958674d9ac0";
    console.log(q);

    try {
        let location = await Location.findOne({ place: q });
        if (!location) {
            const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
                params: {
                    key: apiKey,
                    q: q
                }
            });
            if (response.data.results.length > 0) {
                const { lat, lng } = response.data.results[0].geometry;
                location = new Location({
                q: q,
                    latitude: lat,
                    longitude: lng
                });
                await location.save();
                console.log("New location saved:", location);
                return res.status(201).json(location);
            } else {
                return res.status(404).json({ message: "Location not found in external API" });
            }
        }
        console.log("Location found in database:", location);
        return res.status(200).json(location);
    } catch (e) {
        console.error("Error:", e.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};
