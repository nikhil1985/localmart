import { Box } from "@material-ui/core";
import React from "react";
import Customer from "../Customer/Customer";
import "./Howitworks.css";

const Howitworks = () => {
  return (
    <div className="how_main">
      <div>
        <h2>How It Works</h2>
        <h3 className="how_main_header">You Are</h3>
      </div>
      <div className="how_main_btn_grp">
        <div>
          <Customer btn_name="Customer" isCustomer></Customer>
        </div>
        <Box m={5}></Box>
        <div>
          <Customer btn_name="Business Owner" isCustomer={false}></Customer>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
