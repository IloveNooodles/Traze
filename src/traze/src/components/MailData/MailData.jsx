import "./MailData.css";

const MailData = () => {
  const Jalan = "Jalan Merdeka";
  const Tanggal = "29 Juli 2021";
  const Jam = "03:35 PM";
  const user = "Ziella";

  return (
    <div className="text-history-container">
      <div className="text-info-history">
        <div className="haritanggal-info">
          <p>{Tanggal}</p>
          <p>{Jam}</p>
        </div>
        <p>
          <strong>{user}</strong> melaporkan tempat sampah di{" "}
          <strong>{Jalan}</strong>
        </p>
      </div>
    </div>
  );
};

export default MailData;
