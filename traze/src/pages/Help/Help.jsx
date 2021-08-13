import React, { useState } from 'react';
import './Help.css';
import Helpimage from '../../img/help.png';
import { Link } from 'react-router-dom';

const satu = () => {
  return (
    <p>
      1. Tekan tombol camera yang terdapat di samping search bar<br></br> 2.aku
      sayang kamu <br></br> 3. aku sayang banget sama kamu :*
    </p>
  );
};

const dua = () => {
  return (
    <p>
      Poin didapat dari melakukan pelaporan sampah. Poin akan otomatis bertambah
      setelah laporan sudah diverifikasi oleh pihak kami. Laporan yang tidak
      valid tidak akan menambahkan poin.
    </p>
  );
};

function Help() {
  const [helps, sethelps] = useState([
    {
      topic: 'Bagaimana cara melapor?',
      answer: satu(),
      open: false,
    },
    {
      topic: 'Bagaimana cara mendapatkan poin?',
      answer: dua(),
      open: false,
    },
    {
      topic: 'Apa keuntungan mendapatkan poin?',
      answer: satu(),
      open: false,
    },
  ]);

  const toggleHelp = (index) => {
    sethelps(
      helps.map((help, i) => {
        if (i === index) {
          help.open = !help.open;
        } else {
          help.open = false;
        }

        return help;
      })
    );
  };

  return (
    <div className="helppage">
      <div className="container-help-title">
        <img src={Helpimage} id="image" />
        <h3>Help</h3>
      </div>

      <div className="container-help-body">
        {helps.map((help, i) => (
          <div
            className={'help ' + (help.open ? 'open' : '')}
            key={i}
            onClick={() => toggleHelp(i)}
          >
            <div className="help-topic">{help.topic}</div>
            <div className="help-answer">{help.answer}</div>
          </div>
        ))}
      </div>
      <div className="container-help-back">
        <Link to="/profile">back</Link>
      </div>
    </div>
  );
}

export default Help;
