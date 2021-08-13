import "./Report.css";
import Layout from "../../Layout";
import Camera from "../../components/Camera/Camera";

const Report = () => {
  return (
    <Layout>
      <div className="Report">
        <strong>
          <h1>Report</h1>
        </strong>
        <div className="form-report">
          <form action="">
            <input type="text" placeholder="Input Location..." />
            <input type="text" placeholder="Keterangan tambahan (optional)" />
          </form>
        </div>
      </div>
      <Camera></Camera>
    </Layout>
  );
};

export default Report;
