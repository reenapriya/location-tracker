// //import axios from axios
// import {useState}from "react"
// import axios from "axios"
// import Map from "./Map"
// export default function Form(){
//     const[place,setPlace]=useState("")
//     const [position,setPosition]=useState(null)


//     const handleSubmit=async(e)=>{
//         e.preventDefault()
//         try{
//             const response=await axios.get(`http://localhost:3666/api/locations?q=${place}`)
//             console.log(response.data)
//             if(!response.data){
//                 console.log("invalid response",response)
//             }else{
//                 const [location]=response.data
//                 const {latitude:lat,longitude:lng}=location
//                 console.log("lat,lng",lat ,lng)
//                 setPosition({lat,lng})
//             }
//         }
//         catch(e){
//             console.log(e)
//         }
        

//     }

//     return(
//         <div>

//          <h1>Find A Way</h1>

//          <form onSubmit={handleSubmit}>
//             <label htmlFor="place">enter place </label>
//             <input type="text"
//              value={place}
//              id="place"
//              onChange={e=>setPlace(e.target.value)}/>
//              <br/>
//              <br/>
//              <input type="submit" name="search"/>
//          </form>
//          {position && <Map lat={position.latitude} lng={position.longitude}/> }
//         </div>
//     )
    
// }
import { useState } from "react";
import axios from "axios";
import Map from "./Map";

export default function Form() {
    const [place, setPlace] = useState("");
    const [position, setPosition] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3666/api/locations?q=${place}`);
            if (!response.data) {
                console.log("Invalid response", response);
            } else {
                const location = response.data;
                const { latitude: lat, longitude: lng } = location;
                console.log("lat, lng", lat, lng);
                setPosition({ lat, lng });
            }
        } catch (e) {
            console.error("Error fetching the location data", e);
        }
    };

    return (
        <div>
            <h1>Find A Way</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="place">Enter place </label>
                <input
                    type="text"
                    value={place}
                    id="place"
                    onChange={(e) => setPlace(e.target.value)}
                />
                <br />
                <br />
                <input type="submit" value="Search" />
            </form>
            {position && <Map lat={position.lat} lng={position.lng} />}
        </div>
    );
}
