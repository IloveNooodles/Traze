import Navbar from "./components/Navbar/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar></Navbar>
      {props.children}
    </>
  );
};

export default Layout;
