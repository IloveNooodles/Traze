import { Route, Redirect, Switch } from "react-router-dom";
import { useState, useEffect } from 'react';

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import History from "./pages/History/History";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import page404 from "../src/pages/404page/404page";
import Help from "./pages/Help/Help";
import Settings from "./pages/Settings/Settings";
import EditProfile from "./pages/EditProfile/EditProfile";
import Home from "./pages/Home/Home";
import Report from "./pages/Report/Report";
import HistoryAdmin from "./pages/Admin/History/HistoryAdmin";
import Mail from "./pages/Admin/Mail/Mail";
import ProfileAdmin from "./pages/Admin/Profile/Profile";
import HelpAdmin from "./pages/Admin/HelpAdmin/HelpAdmin";
import DeskripsiMail from "./pages/Admin/Deskripsimail/Deskripsimail";
import ReportUser from "./pages/Admin/ReportUser/ReportUser";

const RouteManager = () => {
    const [coordinates, setCoordinates] = useState([]);

    const user = JSON.parse(localStorage.getItem('profile'));
    const isAdmin = user?.result?.role === "officer";

    // useEffect(() => {
    //   console.log(coordinates);
    // }, [coordinates]);

    const handleCoordinates = (c) => {
      setCoordinates(c);
    }
    
    if (!user?.result) {
     return (
       <Switch>
         <Route path="/" exact > 
          <Login />
         </Route>
         <Route path="/register" component={Register} />
         <Route path="*">
           <Redirect to="/" />
         </Route>
       </Switch>
      )
    } else {
     return (
       <Switch>
         <Route exact path="/">
           <Redirect to="/home" />
         </Route>
         <Route path="/register">
           <Redirect to="/home" />
         </Route>
         <Route path="/history" component={isAdmin ? HistoryAdmin : History} />
         <Route path="/leaderboard" component={Leaderboard} />
         <Route path="/profile" component={isAdmin ? ProfileAdmin : Profile} />
         <Route path="/mail" component={Mail} />
         <Route path="/home" > 
            <Home coord={handleCoordinates} />
         </Route>
         <Route path="/help" component={isAdmin ? HelpAdmin : Help} />
         <Route path="/report" component={Report} />
         <Route path="/editprofile" component={EditProfile} />
         <Route path="/settings" component={Settings} />
         <Route path="/maildesc" component={DeskripsiMail} />
         <Route path="/reportuser" component={ReportUser} />
         <Route path="*" component={page404} />
        </Switch>
     )
}
}

export default RouteManager;