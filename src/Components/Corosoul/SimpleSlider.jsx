import React from "react";
import Carousel from "react-multi-carousel";
import "../../../node_modules/react-multi-carousel/lib/styles.css";
import CustomCard from "../Card/CustomCard";
import "./SimpleSlider.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SimpleSlider = () => {
  return (
    <div className="SimpleSlider">
      <div className="SimpleSlider_main">
        <h2 className="SimpleSlider_main_header">Various Shops one stop</h2>
      </div>
      <p className="SimpleSlider_main_text">
        <b style={{fontWeight:"500"}}>LocalMart</b> is the easiest way to start and serve local community From
        grocery to fashion, <b style={{fontWeight:"500"}}>LocalMart</b> provide you much needed platform.<br/>
        <b style={{fontWeight:"500"}}>LocalMart</b> is for everyone , who wanted to grow business. <br/>Create powerful
        ecommerce stores, across any category, effortlessly. <br/>Hopefully you will
        love <b style={{fontWeight:"500"}}>LocalMart</b>.
      </p>
      <div className="SimpleSlider_main">
        <Carousel
          swipeable={false}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all 3s linear"
          transitionDuration={3000}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <CustomCard
            img="assets/images/Carosil/cake.jpg"
            title="Cake Shop"
          ></CustomCard>
          <CustomCard
            img="assets/images/Carosil/fish.png"
            title="Fish Shop"
          ></CustomCard>
          <CustomCard
            img="assets/images/Carosil/grocery.png"
            title="Grocery Shop"
          ></CustomCard>
          <CustomCard
            img="assets/images/Carosil/medicine.png"
            title="Medicine Shop"
          ></CustomCard>
          <CustomCard
            img="assets/images/Carosil/Vegetable.jpg"
            title="Vegetable Shop"
          ></CustomCard>
        </Carousel>
      </div>
    </div>
  );
};

export default SimpleSlider;
