import React, {useState} from 'react';
import './HelpAdmin.css';
import Helpimage from "../../img/help.png";
import { Link } from 'react-router-dom';

const satu = () => {
  return(
    <p>1. Tekan tombol camera yang terdapat di samping search bar<br></br> 2. tekan tombol merah ketika sudah berada di report page <br></br> 3. masukkan alamat dan juga keterangan tambahan (opsional) <br></br>
       4. tekan tombol panah di bawah kanan, laporan berhasil dikirim!
    </p>
  )
}

const dua = () => {
  return(
    <p>Poin didapat dari melakukan pelaporan sampah. Poin akan otomatis bertambah setelah laporan sudah diverifikasi oleh pihak kami. Laporan yang tidak valid tidak akan menambahkan poin.
    </p>
  )
}

const tiga = () => {
  return(
    <p>Poin didapat dari melakukan pelaporan sampah. Poin akan otomatis bertambah setelah laporan sudah diverifikasi oleh pihak kami. Laporan yang tidak valid tidak akan menambahkan poin.
    </p>
  )
}

function HelpAdmin() {
  const [helps, sethelps] = useState([
    {
      topic: 'Bagaimana cara melapor?',
      answer: satu(),
      open: false
    },
    {
      topic: 'Bagaimana cara mengedit profil?',
      answer: dua(),
      open: false
    },
    {
      topic: 'Bagaimana  cara melaporkan pengguna yang melakukan laporan palsu?',
      answer: tiga(),
      open: false
    }
  ]);

  const toggleHelp = index => {
    sethelps(helps.map((help, i) => {
      if (i === index) {
        help.open = !help.open
      } else {
        help.open = false;
      }

      return help;
    }))
  }

  return ( 
    <div className="helpadminpage">
      <div className="container-helpadmin-title">
        <img src={Helpimage} id="imageadmin"/>
        <h3>Help</h3>
      </div>

      <div className="container-helpadmin-body">
        {helps.map((help, i) => (
          <div className={"helpadmin " + (help.open ? 'open' : '')} key={i} onClick={() => toggleHelp(i)}>

          <div className="helpadmin-topic">
              {help.topic}
          </div>
          <div className="helpadmin-answer">
              {help.answer}
          </div>
          </div>
        ))}
      </div>
      <div className="container-helpadmin-back">
        <Link to="/profile">back</Link>
      </div>
    </div>
  )
}
 
export default HelpAdmin;