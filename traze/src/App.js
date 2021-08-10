import React, { useState } from "react";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import { CameraFeed } from "./components/Camera/Camera";

// Ngesave pict dari camera
const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
};

function App() {
  const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <div className="App">
      <Navbar />
      {/* <Searchbar />
      <CameraFeed sendFile={uploadImage} /> */}
    </div>
  );
}

export default App;
