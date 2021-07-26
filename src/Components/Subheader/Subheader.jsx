import { Divider } from "@material-ui/core";
import React from "react";
import Menu from "../Menu/Menu";
import "./Subheader.css";



const Subheader = ({ toggle }) => {

  var handleClick = () => {
    toggle();
  };

  return (
    <div className="modal">
      <div className="modal_content">
        <span onClick={handleClick}></span>
        <div className="multiple__menu">
          <Menu className="submenu"/>
          <Divider orientation="vertical" flexItem />
          <Menu className="submenu"/>
        </div>
      </div>
    </div>
  );
};

export default Subheader;
