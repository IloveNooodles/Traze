import Layout from "../../../Layout";
import Historyimg from "../../../img/history.png";
import Mailimg from "../../../img/mail.png";
import MailData from "../../../components/MailData/MailData";
import "./Mail.css";
import { Link } from "react-router-dom";

const Mail = () => {
  return (
    <Layout>
      <div className="History">
        <div className="container-history">
          <img src={Mailimg} alt="" />
          <h3>Mail</h3>
        </div>
        <Link to="/maildesc">
          <MailData />
        </Link>
        <MailData />
        <MailData />
        <MailData />
        <MailData />
      </div>
    </Layout>
  );
};

export default Mail;
