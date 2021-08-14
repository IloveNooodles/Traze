import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import RouteManager from "./route";

function App() {
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  const loggedIn = true;
  const isAdmin = false;

  return (
    <>
      <Router>
          {RouteManager(loggedIn, isAdmin)}
      </Router>
    </>
  );
}

export default App;
