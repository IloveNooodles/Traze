import "./Home.css";
import pinpointImg from "../../img/pinpoint.png";
import Layout from "../../Layout";
import Searchbar from "../../components/Searchbar/Searchbar";
import ReactMapGL, { Marker, Popup, GeolocateControl} from "react-map-gl";
import { useState } from "react";

import * as dataSampah from "../../data/sampah.json";


const geolocateControlStyle={
  right: 10,
  top: 10
};

const Home = () => {
  const [viewport, setViewport] = useState({
    latitude: -6.905977,
    longitude: 107.613144,
    width: "100vw",
    height: "100vh",
    zoom: 12,
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <Layout>
      <div className="Home">
        <Searchbar></Searchbar>
        <ReactMapGL
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          mapStyle="mapbox://styles/ilovenoodles/ckscxwr801t9417uqn500n3t2"
          mapboxApiAccessToken="pk.eyJ1IjoiaWxvdmVub29kbGVzIiwiYSI6ImNrc2NtMDNhazBpNGMyd3FrcmducWkxZTIifQ.rO0c2UpYlVFjmOt8gkUdaQ"
        >
          <GeolocateControl 
            style={geolocateControlStyle}
            positionOptions={{enableHighAccuracy: true}}
            trackUserLocation={true}
            auto
          />
          {dataSampah.listSampah.map((item, index) => (
            <Marker
              key={index}
              latitude={item.location.coordinates[1]}
              longitude={item.location.coordinates[0]}
            >
              <img
                src={pinpointImg}
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedLocation(item);
                  console.log("GARE");
                }}
              />
            </Marker>
          ))}
          {selectedLocation ? (
            <Popup
              latitude={selectedLocation.location.coordinates[1]}
              longitude={selectedLocation.location.coordinates[0]}
              onClose={() =>{
                setSelectedLocation(null)
              }}
            >
              <div className='popup-maps'>
                <h2>{selectedLocation.title}</h2>
                <p className='center-text-desc'>{selectedLocation.desc}</p>
                <p className='bottom-text-desc'>reported by: {selectedLocation.username}</p>
              </div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
    </Layout>
  );
};

export default Home;
