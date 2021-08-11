import React, { useState } from "react";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import History from "./components/History/History";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Searchbar from "./components/Searchbar/Searchbar";
import { WebcamCapture } from "./components/Camera/Camera";

function App() {
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <div className="App">
      <Leaderboard></Leaderboard>
      {/* <History /> */}
      {/* <Profile /> */}
      {/* <Navbar /> */}
      {/* <Searchbar />
      <CameraFeed sendFile={uploadImage} /> */}
    </div>
  );
}

export default App;
