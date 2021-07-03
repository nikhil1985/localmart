import { Button } from "@material-ui/core";
import React, { useContext, useState } from "react";
import "./Hero.css";
import Modal from "../Model/Modal";
import UserContext from "../Services/UserContext";
import Constants from "../../Constants/Constants";
import history from "../../History";

const Hero = () => {
  const { userProfile, dispatch } = useContext(UserContext);
  const [path, setPath] = useState();

  const getstarted = () => {
    setPath(Constants.STORE_VIEW);
    if (userProfile.loggedIn === true) {
      history.push('/storeView');
    } else {
      dispatch({
        type: Constants.MODEL_TOGGLE,
        payload: {
          ...userProfile,
          modelOpen: true,
          path: path
        },
      });
    }
  };

  return (
    <div className="hero__main">
      <div className="hero_image_parent">
        <img
          className="hero_img"
          src="assets/images/store.jpg"
          alt="Open Store"
        />
        <h2 className="image__text">Open store with us</h2>
      </div>
      <div className="hero__explanation">
        <div className="hero__explanation_text">
          Serve Your Customer Online.
        </div>
        <div>
          <p className="hero__explanation_para">
            LocalMart is the easiest way to start and serve local community
          </p>
        </div>
        <div>
          <p className="hero__explanation_para">
            You are just click away from Onboarding your shop.
          </p>
        </div>
        <div className="hero__explanation_button">
          <Button color="primary" variant="contained" size="large" onClick={() => getstarted()}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
