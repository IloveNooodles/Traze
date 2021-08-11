import React, { useState } from "react";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";
import History from "./pages/History/History";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Searchbar from "./components/Searchbar/Searchbar";
import { WebcamCapture } from "./components/Camera/Camera";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </Router>
      {/* <Leaderboard></Leaderboard> */}
      {/* <History /> */}
      {/* <Profile /> */}
      {/* <Searchbar /> */}
      {/* <CameraFeed sendFile={uploadImage} />} */}
    </div>
  );
}

export default App;
