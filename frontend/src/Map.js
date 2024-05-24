

import React from 'react';
import "./style.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

export default function Map({ lat, lng }) {
    if (!lat || !lng) {
        return null; // Prevent rendering if lat or lng is undefined
    }

    const position = [lat, lng];
    const markers = [
        {
            geocode: [lat, lng],
            popUp: "Hello",
            id: 1
        }
    ];

    const customIcon = new Icon({
        iconUrl: require("./Marker-Icon.png.png"), // Ensure this file path is correct
        iconSize: [38, 38],
        iconAnchor: [12, 41]
        

    });

    return (
        <div style={{ height: '50vh', width: '50%', margin: 'auto' }}> 
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "400px", width: "100%" ,margin: 'auto'}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                language="en"
                
            />
            {markers.map((marker) => (
                <Marker key={marker.id} position={marker.geocode} icon={customIcon}>
                    <Popup>{marker.popUp}</Popup>
                </Marker>
            ))}
        </MapContainer>
        </div>
    );
}
