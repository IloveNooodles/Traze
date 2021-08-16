import React from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState, useEffect } from "react";
import * as api from '../../api/index.js';
import pinpointImg from "../../img/pinpoint.png";

const MapMarker = ({ lat, lon, onClick }) => {
    return (
        <Marker
            latitude={lat}
            longitude={lon}
            >
            <img
            src={pinpointImg}
            alt=""
              onClick={e => onClick(e)}
            />
      </Marker>
    )
}

export default MapMarker;
