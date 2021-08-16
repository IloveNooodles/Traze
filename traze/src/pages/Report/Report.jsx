import "./Report.css";
import Layout from "../../Layout";
import Camera from "../../components/Camera/Camera";
import { useState, useEffect } from "react";

const Report = ({ coord }) => {
  const [formData, setFormData] = useState({
    username: "",
    title: "",
    desc: "",
    location: {
      type: "Point",
      coordinates: [],
    },
    streetAddress: "",
    image: "",
  });

  const [coordinates, setCoordinates] = useState([]);
  const [image, setImage] = useState("");

  useEffect(() => {
    setCoordinates(coord);
    console.log(coord);
  }, [coord])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const res = await api
    } catch (error) {
      console.log(error.response);
      window.alert("Teliti kembali data form Anda.");
    }
  };

  return (
    <Layout>
      <div className="Report">
        <strong>
          <h1>Report</h1>
        </strong>
        <Camera image={image} setImage={setImage}/>
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
            <div className='submit-report-container'>
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
