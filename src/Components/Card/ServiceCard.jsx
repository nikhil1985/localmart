import React from "react";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CodeIcon from "@material-ui/icons/Code";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import "./ServiceCard.css";

const getService = (title, text, index) => {
  if (index === 1) {
    return (
      <div className="card">
        <div className="card-image">
          <AttachMoneyRoundedIcon
            style={{
              color: "rgba(44, 112, 240, 0.5)",
              height: "50px",
              width: "50px",
            }}
          />
        </div>

        <h1 className="card-header">{title}</h1>
        <p className="card-text">{text}</p>
      </div>
    );
  }
  if (index === 2) {
    return (
      <div className="card">
        <div className="card-image">
          <DashboardIcon
            style={{
              color: "rgba(44, 112, 240, 0.5)",
              height: "50px",
              width: "50px",
            }}
          />
        </div>

        <h1 className="card-header">{title}</h1>
        <p className="card-text">{text}</p>
      </div>
    );
  }
  if (index === 3) {
    return (
      <div className="card">
        <div className="card-image">
          <CodeIcon
            style={{
              color: "rgba(44, 112, 240, 0.5)",
              height: "50px",
              width: "50px",
            }}
          />
        </div>

        <h1 className="card-header">{title}</h1>
        <p className="card-text">{text}</p>
      </div>
    );
  }
  if (index === 4) {
    return (
      <div className="card">
        <div className="card-image">
          <PhoneIphoneIcon
            style={{
              color: "rgba(44, 112, 240, 0.5)",
              height: "50px",
              width: "50px",
              textAlign:"center"
            }}
          />
        </div>

        <h1 className="card-header">{title}</h1>
        <p className="card-text">{text}</p>
      </div>
    );
  }
};

const ServiceCard = ({ title, text, index }) => {
  return getService(title, text, index);
};

export default ServiceCard;
