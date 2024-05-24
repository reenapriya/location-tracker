// App.js
import { useEffect } from "react";
import Map from "./Map";
import axios from "axios";
import Form from "./Form"

export default function App() {
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:3666/api/locations`);
    //             console.log(response.data);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //             console.log("Server Response:", error.response); // Log the server response for debugging
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <div>
            <h1>App component</h1>
            <Form/>
            <Map/>
        </div>
    );
}
