import React, { useState } from "react";
import Webcam from "react-webcam";
import "./Camera.css";

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 370,
  height: 550,
  facingMode: "user",
};

const WebcamCapture = () => {
  const [image, setImage] = useState("");
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  });

  return (
    <div className="wrapper">
      <div className="video">
        {image == "" ? (
          <Webcam
            audio={false}
            width={370}
            height={550}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img className="resultVideo" src={image} />
        )}
      </div>
      <div className='takepicture'>
        {image != "" ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setImage("");
            }}
            className="btn"
          >
            <div className="green-circle"></div>
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
            className="btn"
          >
            <div className="red-circle"></div>
          </button>
        )}
      </div>
    </div>
  );
};

export default WebcamCapture;
