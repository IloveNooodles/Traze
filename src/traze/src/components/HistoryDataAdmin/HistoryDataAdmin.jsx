import "./HistoryDataAdmin.css";

const HistoryDataAdmin = () => {
  const Jalan = "Jalan Merdeka";
  const Tanggal = "29 Juli 2021";
  const Jam = "03:35 PM";

  return (
    <div className="text-history-container">
      <div className="text-info-history">
        <div className="haritanggal-info">
          <p>{Tanggal}</p>
          <p>{Jam}</p>
        </div>
        <p>
          Tempat sampah di <strong>{Jalan}</strong> telah dibersihkan
        </p>
      </div>
    </div>
  );
};

export default HistoryDataAdmin;
