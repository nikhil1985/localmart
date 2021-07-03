import React from "react";
import SimpleSlider from "../Corosoul/SimpleSlider";
import GetStarted from "../GetStarted/GetStarted";
import Hero from "../Hero/Hero";
import Howitworks from "../HowItWorks/Howitworks";
import Onboarding from "../Onboarding/Onboarding";
import Services from "../Services/Services";

import "./Home.css";

const Home = () => {
  return (
    <div className="main__home">
      {/*<Dropdown/>*/}
        <Hero></Hero>
        <Howitworks />
        <Onboarding></Onboarding>
        <SimpleSlider></SimpleSlider>
        <Services></Services>
        <GetStarted></GetStarted>
    </div>
  );
};

export default Home;
