import "./Home.css";
import pinpointImg from "../../img/pinpoint.png";
import Layout from "../../Layout";
import Searchbar from "../../components/Searchbar/Searchbar";
import ReactMapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";
import { useState, useEffect } from "react";

import * as api from '../../api/index.js';
import * as dataSampah from "../../data/sampah.json";
import moment from 'moment';

const geolocateControlStyle={
  right: 20,
  top: 20,
};

const Home = ({coord}) => {
  const [viewport, setViewport] = useState({
    latitude: -6.905977,
    longitude: 107.613144,
    width: "100vw",
    height: "100vh",
    zoom: 12,
  });

  const [selectedLocation, setSelectedLocation] = useState({title: "", location: {coordinates: [0, 0], _id: 0}});
  const [data, setData] = useState([]);
  // const [report, setReport] = useState({title: "", location: {coordinates: [0, 0], _id: 0}});

  useEffect(() => {
    coord([viewport.longitude, viewport.latitude]);
  }, [viewport]);

  // useEffect(() => {
  //   api.getReport(selectedLocation._id)
  //     .then((res) => {
  //       console.log(res);
  //       setReport(res);
  //     })
  // }, [selectedLocation]);

  useEffect(() => {
    api.getLocations()
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
  }, [])

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
          {data.map((item) => (
            <Marker
              key={item._id}
              latitude={item.location.coordinates[1]}
              longitude={item.location.coordinates[0]}
            >
              <img
                src={pinpointImg}
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedLocation(item);
                }}
              />
            </Marker>
          ))}
          {selectedLocation ? (
            <Popup
              latitude={selectedLocation.location.coordinates[1]}
              longitude={selectedLocation.location.coordinates[0]}
              onClose={() =>{
                setSelectedLocation({location: {coordinates: [0, 0], _id: 0}})
              }}
            >
              <div className='popup-maps'>
                <h2>{selectedLocation.title}</h2>
                <p className='bottom-text-desc'>At: {selectedLocation.address?.split(",")[0]}</p>
                <p className='center-text-desc'>{selectedLocation.desc}</p>
                <p className='bottom-text-desc'>reported by: {selectedLocation.username}</p>
                <p className='bottom-text-desc'>reported {moment(selectedLocation.createdAt).fromNow()}</p>
              </div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
    </Layout>
  );
};

export default Home;
