import Layout from "../../Layout";
import Historyimg from "../../img/history.png";
import HistoryData from "../../components/HistoryData/HistoryData";

import "./History.css";

const History = () => {
  return (
    <Layout>
      <div className="History">
        <div className="container-history">
          <img src={Historyimg} alt="" />
          <h3>History</h3>
        </div>
        <HistoryData />
        <HistoryData />
        <HistoryData />
        <HistoryData />
        <HistoryData />
      </div>
    </Layout>
  );
};

export default History;
