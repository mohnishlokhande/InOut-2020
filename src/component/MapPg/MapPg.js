
import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as parkDate from "./data/skateboard-parks.json";
import './MapPg.css';
import Geocoder from 'react-map-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import Demo from '../enablelocation';
import NavMap from "./Navbar";


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
    <>
    <NavMap/>
    <div className="mainContainer">
      <div className="con">
         <div 
          style={{ position: "absolute", top: 20, right: 20, zIndex: 12 }}>
            <img src="/gps2.webp" alt="Skate Park Icon" 
              className="igb"  onClick={() => window.location.reload(false)}/> 
        </div> 
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
          <Marker
            latitude={props.la}
            longitude={props.lo}>
            <img src="/myloc.png" alt="My location" 
              className="igb" />
          </Marker>

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
    </>
  );
}
