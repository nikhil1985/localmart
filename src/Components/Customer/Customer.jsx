import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import "./Customer.css";
import { CustomerData } from "../../Data/CustomerData";
import { OwnerData } from "../../Data/OwnerData";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  slide:{
    color:"black",
  }
}));

const AutoRotatingCarouselModal = ({
  handleOpen,
  setHandleOpen,
  isMobile,
  isCustomer,
}) => {
  const classes = useStyles();
  return (
    <div>
      <AutoRotatingCarousel
        containerHeight="100"
        label="Get started"
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        mobile={isMobile}
        style={{ position: "absolute" }}
      >
        {isCustomer
          ? CustomerData.map((data, key) => {
              return (
                <Slide
                  key={key}
                  media={<img src={data.imgpath} alt={data.title} />}
                  mediaBackgroundStyle={{ backgroundColor: "white" }}
                  title={data.title}
                  subtitle={data.subtitile}
                />
              );
            })
          : OwnerData.map((data, key) => {
              return (
                <Slide 
                  key={key}
                  media={<img src={data.imgpath} alt={data.title} />}
                  mediaBackgroundStyle={{ backgroundColor: "white" }}
                  title={data.title}
                  subtitle={data.subtitile}
                />
              );
            })}
      </AutoRotatingCarousel>
    </div>
  );
};

const Customer = ({ btn_name, isCustomer }) => {
  const [handleOpen, setHandleOpen] = useState({ open: false });
  const handleClick = () => {
    setHandleOpen({ open: true });
  };
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <div style={{ color: "black" }}>
      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        {btn_name}
      </Button>
      <AutoRotatingCarouselModal
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
        isCustomer={isCustomer}
      />
    </div>
  );
};

export default Customer;
