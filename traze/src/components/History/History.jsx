import "./History.css";

import Arrow from "../../img/backArrow-png";
import Historyimg from "../../img/history.png";

const History = () => {
  const Jalan = "Jalan Merdeka";
  const Tanggal = "29 Juli 2021";
  const Jam = "03:35 PM";

  return (
    <div className="History">
      <img src={Arrow} alt="" id="backbutton" />
      <div className="container-history">
        <img src={Historyimg} alt="" />
        <h3>History</h3>
      </div>
      <div className="container-text-history">
        <div className="text-info-history">
          <p className="text-top">{Jalan}</p>
          <div className="haritanggal-info">
            <p>{Tanggal}</p>
            <p>{Jam}</p>
          </div>
          <p>Berhasil Melaporkan!</p>
          <hr />
        </div>
        <div className="text-info-history">
          <p className="text-top">{Jalan}</p>
          <div className="haritanggal-info">
            <p>{Tanggal}</p>
            <p>{Jam}</p>
          </div>
          <p>Berhasil Melaporkan!</p>
          <hr />
        </div>
        <div className="text-info-history">
          <p className="text-top">{Jalan}</p>
          <div className="haritanggal-info">
            <p>{Tanggal}</p>
            <p>{Jam}</p>
          </div>
          <p>Berhasil Melaporkan!</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default History;
