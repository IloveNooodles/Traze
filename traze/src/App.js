import React, { useState } from 'react';
import Login from './components/Login/Login';
import { CameraFeed } from './components/Camera/Camera';

// Ngesave pict dari camera
const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
};

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <h1>Image capture test</h1>
      <CameraFeed sendFile={uploadImage} />
    </div>
  );
}

export default App;
