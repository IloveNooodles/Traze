import React, { useState } from 'react';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import { WebcamCapture } from './components/Camera/Camera';

function App() {
  // const [token, setToken] = useState();

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
