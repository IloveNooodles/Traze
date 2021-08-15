import "./Home.css";
import Layout from "../../Layout";
import Searchbar from "../../components/Searchbar/Searchbar";
import ReactMapGL from "react-map-gl";
import { useState } from "react";

const Home = () => {
  const [viewport, setViewport] = useState({
    latitude: -6.905977,
    longitude: 107.613144,
    width: "100vw",
    height: "100vh",
    zoom: 12,
  });
  return (
    <Layout>
      <div className="Home">
        <Searchbar></Searchbar>
        <ReactMapGL
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          mapboxApiAccessToken="pk.eyJ1IjoiaWxvdmVub29kbGVzIiwiYSI6ImNrc2NtMDNhazBpNGMyd3FrcmducWkxZTIifQ.rO0c2UpYlVFjmOt8gkUdaQ"
        ></ReactMapGL>
      </div>
    </Layout>
  );
};

export default Home;
