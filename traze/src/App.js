import React, { useState } from "react";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import History from "./pages/History/History";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import page404 from "../src/pages/404page/404page";
import Help from "./pages/Help/Help";
import Settings from "./pages/Settings/Settings";
import EditProfile from "./pages/EditProfile/EditProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Report from "./pages/Report/Report";
import HistoryAdmin from "./pages/Admin/History/HistoryAdmin";
import Mail from "./pages/Admin/Mail/Mail";
import ProfileAdmin from "./pages/Admin/Profile/Profile";

function App() {
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  const isAdmin = true;

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/history" component={isAdmin ? HistoryAdmin : History} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/profile" component={isAdmin ? ProfileAdmin : Profile} />
          <Route path="/mail" component={Mail} />
          <Route path="/home" component={Home} />
          <Route path="/help" component={Help} />
          <Route path="/report" component={Report} />
          <Route path="/editprofile" component={EditProfile} />
          <Route path="/settings" component={Settings} />
          <Route path="*" component={page404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
