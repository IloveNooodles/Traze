import React, { useState } from "react";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";
import History from "./pages/History/History";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import page404 from '../src/pages/404page/404page';
import Help from "./pages/Help/Help";
import Settings from "./pages/Settings/Settings";
import EditProfile from "./pages/EditProfile/EditProfile";
import Searchbar from "./components/Searchbar/Searchbar";
import { WebcamCapture } from "./components/Camera/Camera";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Webcam from "react-webcam";

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
          <Route path="/help" component={Help} />
          <Route path="/editprofile" component={EditProfile} />
          <Route path="/settings" component={Settings} />
          <Route path="*" component={page404} />
        </Switch>
      </Router>
      {/* <Searchbar /> */}
      {/* <Webcam /> */}
    </>
  );
}

export default App;
