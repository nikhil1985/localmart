import { Box, Button } from "@material-ui/core";
import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <div className="getstarted-main">
      <div></div>
      <div className="getstarted-main--header">
        <h2>Chase your dreams. Start your online store.</h2>
      </div>
      <div className="getstarted-main--explain">
        <h6>
          Take your business online with Us. Get your free online store in 30
          seconds.
        </h6>
      </div>
      <div className="getstarted--button">
        <Button size="large" variant="contained" color="primary">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default GetStarted;
