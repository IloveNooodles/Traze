import Layout from "../../../Layout";
import Historyimg from "../../../img/history.png";
import Mailimg from "../../../img/mail.png"
import MailData from "../../../components/MailData/MailData";
import "./Mail.css";

const Mail = () => {
  return (
    <Layout>
      <div className="History">
        <div className="container-history">
          <img src={Mailimg} alt="" />
          <h3>Mail</h3>
        </div>
        <MailData />
        <MailData />
        <MailData />
        <MailData />
        <MailData />
      </div>
    </Layout>
  );
};

export default Mail;
