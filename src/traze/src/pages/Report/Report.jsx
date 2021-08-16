import "./Report.css";
import Layout from "../../Layout";
import Camera from "../../components/Camera/Camera";
import { useState, useEffect } from "react";
import axios from "axios";
import * as api from "../../api/index.js";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const API_TOKEN =
  "pk.eyJ1IjoiaWxvdmVub29kbGVzIiwiYSI6ImNrc2NtMDNhazBpNGMyd3FrcmducWkxZTIifQ.rO0c2UpYlVFjmOt8gkUdaQ";

const Report = ({ coord }) => {
  const [formData, setFormData] = useState({
    username: "",
    title: "",
    desc: "",
    location: {
      type: "Point",
      coordinates: [],
    },
    address: "",
    image: "",
  });

  const [image, setImage] = useState("");

  History = useHistory();

  useEffect(() => {
    const { result } = JSON.parse(localStorage.getItem("profile"));

    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${coord[0]},${coord[1]}.json?access_token=${API_TOKEN}`
      )
      .then((res) => {
        setFormData({
          ...formData,
          address: res.data.features[0].place_name,
          username: result.username,
          location: {
            type: "Point",
            coordinates: coord,
          },
        });
      })
      .catch((error) => console.log(error));
  }, [coord]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      api.createReport({ ...formData, image: image });
      History.push("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Layout>
      <div className="Report">
        <strong>
          <h1>Report</h1>
        </strong>
        <Camera image={image} setImage={setImage} />
        <div className="form-report">
          <form onSubmit={handleSubmit}>
            <input
              name="Title"
              type="text"
              placeholder="Title"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            <input
              name="desc"
              type="text"
              placeholder="Keterangan tambahan (optional)"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  desc: e.target.value,
                })
              }
            />
            <div className="submit-report-container">
              <button type="submit" className="submit" id="submit-report">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Report;
