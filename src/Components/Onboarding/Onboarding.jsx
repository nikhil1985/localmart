import { Card, CardMedia, makeStyles } from "@material-ui/core";
import React from "react";
import "./Onboarding.css";

const useStyles = makeStyles({
  root: {
    minWidth: "50%",
  },
  Card: {
    width: 300,
    margin: "auto",
    textAlign:"center"
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30",
    boxShadow: "none",
    border: "none",
    width:"50%",
    margin:"0 25%",
  },
});

const Onboarding = () => {
  const classes = useStyles();
  return (
    <div className="onboarding_parent">
      <div className="onboarding_main">
        <h2 className="onboarding_header">
          Your Onboarding is just few steps away
        </h2>
      </div>
      <div className="onboarding_main_steps">
        <Card className={classes.root} elevation={0}>
          <CardMedia
            className={classes.media}
            image="assets/images/customer/registration.jpg"
            title="Registration"
            height="140"
          />
        </Card>
        <div className="onboarding_explain">
          <div className="onboarding_explain_item">
            <h2 className="onboarding_explain_item_header">Step 1</h2>
          </div>
          <div className="onboarding_explain_item_tag">
            <p>Register with us.</p>
          </div>
          <div className="onboarding_explain_item">
            <p>
              Register with us using Google, Facebook account or we have
              customized login with OTP verification.
              <br />
              <br />
              Simply click on Login Page and fill your information.
            </p>
            <p></p>
          </div>
        </div>
      </div>

      <div className="onboarding_main_steps onboarding_explain_reverse">
        <Card className={classes.root} elevation={0}>
          <CardMedia
            className={classes.media}
            image="assets/images/customer/shop.jpg"
            title="Paella dish"
          />
        </Card>
        <div className="onboarding_explain">
          <div className="onboarding_explain_item">
            <h2 className="onboarding_explain_item_header">Step 2</h2>
          </div>
          <div className="onboarding_explain_item_tag">
            <p>Upload your store item</p>
          </div>
          <div className="onboarding_explain_item">
            <p>List your shop and start selling online</p>
            <br />
            <p>
              This step help you store your selling item and can be display to
              customer on mobile application
            </p>
          </div>
        </div>
      </div>

      <div className="onboarding_main_steps">
        <Card className={classes.root} elevation={0}>
          <CardMedia
            className={classes.media}
            image="assets/images/customer/onboarding.jpg"
            title="Paella dish"
          />
        </Card>
        <div className="onboarding_explain">
          <div className="onboarding_explain_item">
            <h2 className="onboarding_explain_item_header">Step 3</h2>
          </div>
          <div className="onboarding_explain_item_tag">
            <p>Give name to your online store</p>
          </div>
          <div className="onboarding_explain_item">
            <p>Give a decent name to your online store</p>
            <br />
            <p>
              Verify your store and make sure what you have uploaded is correct
              before publishing.
            </p>
          </div>
        </div>
      </div>

      <div className="onboarding_main_steps onboarding_explain_reverse">
        <Card className={classes.root} elevation={0}>
          <CardMedia
            className={classes.media}
            image="assets/images/customer/order.jpg"
            title="Paella dish"
          />
        </Card>
        <div className="onboarding_explain">
          <div className="onboarding_explain_item">
            <h2 className="onboarding_explain_item_header">Step 4</h2>
          </div>
          <div className="onboarding_explain_item_tag">
            <p>Publish Store Online</p>
          </div>
          <div className="onboarding_explain_item">
            <p>Verified... you are good to go and publish your shop online.</p>
            <br/>
            <p>Visit your store and check your Dashboard</p>
          </div>
        </div>
      </div>

      <div className="onboarding_main_steps">
        <Card className={classes.root} elevation={0}>
          <CardMedia
            className={classes.media}
            image="assets/images/customer/delivery.jpg"
            title="Paella dish"
          />
        </Card>
        <div className="onboarding_explain">
          <div className="onboarding_explain_item">
            <h2 className="onboarding_explain_item_header">Step 5</h2>
          </div>
          <div className="onboarding_explain_item_tag">
            <p>Start Accepting order</p>
          </div>
          <div className="onboarding_explain_item">
            <p>Give prompt service to customer and grow your business. </p>
            <p>Onboard your existing customer to get more insight about selling pattern</p>
            <p>and provide good experience to Local Customers</p>
            <br/>
            <p>Get insight about monthly turnover</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
