import Layout from "../../../Layout";
import Historyimg from "../../../img/history.png";
import HistoryDataAdmin from "../../../components/HistoryDataAdmin/HistoryDataAdmin";

import "./HistoryAdmin.css";

const HistoryAdmin = () => {
  return (
    <Layout>
      <div className="History">
        <div className="container-history">
          <img src={Historyimg} alt="" />
          <h3>History</h3>
        </div>
        <HistoryDataAdmin />
        <HistoryDataAdmin />
        <HistoryDataAdmin />
        <HistoryDataAdmin />
        <HistoryDataAdmin />
      </div>
    </Layout>
  );
};

export default HistoryAdmin;
