
import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as parkDate from "./data/skateboard-parks.json";
import './MapPg.css';
import Geocoder from 'react-map-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import Demo from '../enablelocation';


//    latitude: 28.651790,
//    longitude: 77.235694,
export default function Gmap(props) {
  const [viewport, setViewport] = useState({
    latitude: props.la,
    longitude: props.lo,
    zoom: 12
  });
  const [selectedPark, setSelectedPark] = useState(null);

 // const geocoderContainerRef = useRef();
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );
  
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };
 
      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    []
  );


  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);
//pk.eyJ1IjoibW9obmlzaGxva2hhbmRlIiwiYSI6ImNraWdidHRmMzBzOXQydG54aG41dWhmN2YifQ.yTyJynC4EjpNfn-rIVhXEQ

  return ( 
    <div className="mainContainer">
      <div className="con">
        {/* <div
          ref={geocoderContainerRef}
          style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
        /> */}
      <ReactMapGL
        ref={mapRef}
        {...viewport}
        width="100vw"
        height="100vh"
        mapboxApiAccessToken="pk.eyJ1IjoibW9obmlzaGxva2hhbmRlIiwiYSI6ImNraWs4eHN3bjA1bHgyc2xiZXo1aDEwbWwifQ.5Aewi_ZHAZCBGnaljgyXtw"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {parkDate.features.map(park => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button
              className="marker-btn bti"
              onClick={e => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
              <img src="/car-parking.jpg" alt="Skate Park Icon" 
              //  height="15" width="15" 
                className="igb" />
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        ) : null}

        <Geocoder
    
          mapRef={mapRef}
        // containerRef={geocoderContainerRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken="pk.eyJ1IjoibW9obmlzaGxva2hhbmRlIiwiYSI6ImNraWs4eHN3bjA1bHgyc2xiZXo1aDEwbWwifQ.5Aewi_ZHAZCBGnaljgyXtw"
          position="top-left"
        />

      </ReactMapGL>
      </div>
    </div>
  );
}

// //import React, {Component} from 'react';

  
// import React, { useState, useEffect } from "react";
// import {
//   withGoogleMap,
//   withScriptjs,
//   GoogleMap,
//   Marker,
//   InfoWindow
// } from "react-google-maps";
// import * as parkData from "./data/skateboard-parks.json";
// import mapStyles from "./mapStyles";

// function Map() {
//   const [selectedPark, setSelectedPark] = useState(null);

//   useEffect(() => {
//     const listener = e => {
//       if (e.key === "Escape") {
//         setSelectedPark(null);
//       }
//     };
//     window.addEventListener("keydown", listener);

//     return () => {
//       window.removeEventListener("keydown", listener);
//     };
//   }, []);

//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 28.704060, lng: 77.102493 }}
//       defaultOptions={{ styles: mapStyles }}
//     >
//       {parkData.features.map(park => (
//         <Marker
//           key={park.properties.PARK_ID}
//           position={{
//             lat: park.geometry.coordinates[1],
//             lng: park.geometry.coordinates[0]
//           }}
//           onClick={() => {
//             setSelectedPark(park);
//           }}
//           icon={{
//             url: `/car-parking.jpg`,
//             scaledSize: new window.google.maps.Size(25, 25)
//           }}
//         />
//       ))}

//       {selectedPark && (
//         <InfoWindow
//           onCloseClick={() => {
//             setSelectedPark(null);
//           }}
//           position={{
//             lat: selectedPark.geometry.coordinates[1],
//             lng: selectedPark.geometry.coordinates[0]
//           }}
//         >
//           <div>
//             <h2>{selectedPark.properties.NAME}</h2>
//             <p>{selectedPark.properties.DESCRIPTIO}</p>
//           </div>
//         </InfoWindow>
//       )}
//     </GoogleMap>
//   );
// }

// const MapWrapped = withScriptjs(withGoogleMap(Map));

// export default function Gmap() {
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <p>
//       {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448181.1697902052!2d76.812386237501!3d28.64727852010107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1607450303052!5m2!1sen!2sin" 
//         style={{width:"800px", height:"600px", zoom: 5, frameborder:"0", border:0, allowfullscreen:"", tabindex:"0"}} ></iframe>  */}
//       </p>
//        <MapWrapped
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD93w2Cr-CrT622MQNSF3fvcfxv9l_TkOo`}
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `100%` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       /> 
//     </div>
//   );
// }