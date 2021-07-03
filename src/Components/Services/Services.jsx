import React from "react";
import ServiceCard from "../Card/ServiceCard";
import "./services.css";

const Services = () => {
  return (
    <>
      <h1 className="services-header">Services</h1>
      <div className="services_main">
        <div className="services_main-item">
          <ServiceCard
            title="Online Payment"
            text="Cash On Delivery, Credit Card, UPI Apps"
            index={1}
          />
        </div>
        <div className="services_main-item">
          <ServiceCard
            title="Good Dashboard"
            text="Get Insight about your store financial and get broader view on your Business"
            index={2}
          />
        </div>
        <div className="services_main-item">
          <ServiceCard
            title="Platform as a Service"
            text="LocalMart Provided PaaS concept on local business Owner"
            index={3}
          />
        </div>
        <div className="services_main-item">
          <ServiceCard
            title="Your shared app"
            text="One Mobile App will support multiple business to get online"
            index={4}
          />
        </div>
      </div>
    </>
  );
};

export default Services;
