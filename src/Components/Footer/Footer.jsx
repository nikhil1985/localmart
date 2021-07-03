import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";

import "./Footer.css";
const useStyles = makeStyles((theme) => ({
  clickableIcon: {
    color: "blue",
    height: "30px",
    width: "30px",
    fontWeight:"lighter",
    

    "&:hover": {
      color: "grey",
      borderBottom:"1px soild black"
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getLinks = () => {
    return (
      <>
        <Button className="footer-main__button" color="inherit">
          Help Center
        </Button>
        <Button className="footer-main__button" color="inherit">
          Blog
        </Button>
        <Button className="footer-main__button" color="inherit">
          Find a store
        </Button>
      </>
    );
  };

  const getLinks2 = () => {
    return (
      <>
        <Button className="footer-main__button" color="inherit">
          About Us
        </Button>
        <Button className="footer-main__button" color="inherit">
          Privacy
        </Button>
        <Button className="footer-main__button" color="inherit">
          Terms &amp; Conditions
        </Button>
        <Button className="footer-main__button" color="inherit">
          Contact Us
        </Button>
        <Button className="footer-main__button" color="inherit">
          FAQ's
        </Button>
      </>
    );
  };

  const getSocialMedia = () => {
    return (
      <>
        <FacebookIcon className={classes.clickableIcon} />
        <TwitterIcon className={classes.clickableIcon} />
        <YouTubeIcon className={classes.clickableIcon} />
        <GitHubIcon className={classes.clickableIcon} />
      </>
    );
  };

  return (
    <div className="footer-main">
      <div className="footer-main--logo">
        <Link
          to="/"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <img
            className="footer-main--logo_img"
            src="assets/images/logo.png"
            alt="Open Store"
          />
        </Link>
      </div>
      <div className="footer-main--links">
        <div className="footer-main--links--sub">{getLinks()}</div>
        <div className="footer-main--links--sub2">{getLinks2()}</div>

        <div className="footer-main--links--social">{getSocialMedia()}</div>
      </div>
    </div>
  );
};

export default Footer;
