import React from 'react';
import './Deskripsimail.css';
import Mail from "../../../img/mail.png";
import picture from "../../../img/facebook.png";
import {Link} from'react-router-dom';
import back from "../../../img/backArrow.png";
import reportlogo from "../../../img/report.png";

function Deskripsimail() {
    const Jalan = "Jalan Merdeka";
    const Tanggal = "29 Juli 2021";
    const Jam = "03:35 PM";
    const user = "Ziella"; 
    const Status = "Sampah berserakan";

    return (
        <div className="desmailcontainer">
            <div className="desmailcontainer-header">
                <div className="separator1">
                    <Link to="/home">
                        <img src={back}/>
                    </Link>
                </div>
                <div id="circledesmailbig">
                    <div id="circledesmail">
                        <img src={Mail}/>
                    </div>
                </div>
                <div className="separator2">
                    <Link to="/reportuser">
                        <img src={reportlogo} id='reportlogo'/>
                    </Link>
                </div>
            </div>
            <div className="desmailcontainer-upperbody">
                <p>{user} melaporkan tempat sampah di <strong>{Jalan}</strong>
                </p>
            </div>
            <div className="desmailcontainer-tanggal">
                <pre>  {Tanggal}   {Jam}</pre>
            </div>
            <div className="desmailcontainer-middlebody">
                <img src={picture} />
                <p><strong>Status:</strong> {Status}</p>
            </div>
        </div>
    )
}

export default Deskripsimail;
