import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import RouteManager from './route.js';

function App() {
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <>
      <Router>
          <RouteManager/>
      </Router>
    </>
  );
}

export default App;
