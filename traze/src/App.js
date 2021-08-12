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
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/history" component={History} />
          <Route path="/scoreboard" component={Leaderboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
      {/* <Leaderboard></Leaderboard> */}
      {/* <History /> */}
      {/* <Profile /> */}
      {/* <Searchbar /> */}
      {/* <CameraFeed sendFile={uploadImage} />} */}
    </>
  );
}

export default App;
