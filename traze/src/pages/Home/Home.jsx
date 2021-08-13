import './Home.css'
import Layout from "../../Layout";
import Searchbar from "../../components/Searchbar/Searchbar";

const Home = () => {
  return (
    <Layout>
      <div className="Home">
        <Searchbar></Searchbar>
      </div>
    </Layout>
  );
};

export default Home;
