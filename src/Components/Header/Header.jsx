import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./Header.css";
import Modal from "../Model/Modal";
import UserContext from "../Services/UserContext";
import Constants from "../../Constants/Constants";
import { Link } from "react-router-dom";
import history from "../../History";

const useStyles = makeStyles((theme) => ({
  offset: {
    ...theme.mixins.toolbar,
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    textAlign: "center",
  },
  title: {
    flexGrow: 1,
    color: "#737373",
  },
  appbar_background: {
    background: "#ffffff",
  },
  appbar_typography_style: {
    color: "#737373",
  },
  customizeToolbar: {
    minHeight: 100,
  },
}));

const Header = () => {
  const classes = useStyles();
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
    <div className={classes.root}>
      <AppBar
        className={classes.appbar_background}
        elevation={0}
        position="fixed"
      >
        <Toolbar className={classes.customizeToolbar}>
          <Typography variant="h6" className={classes.title}>
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
                className="header_image"
                src="assets/images/logo.png"
                alt="Open Store"
              />
            </Link>
          </Typography>
          <h5 className={classes.appbar_typography_style}>
            Welcome {userProfile.name}
          </h5>
          <div className="header-menu-button">
            {userProfile.loggedIn ? (
              <Button
                color="primary"
                variant="text"
                size="large"
                onClick={() =>
                  dispatch({
                    type: Constants.LOGIN_FAILURE,
                    payload: {
                      ...userProfile,
                      name: "Guest",
                      loggedIn: false,
                    },
                  })
                }
              >
                Sign Out
              </Button>
            ) : (
              <Button
                color="primary"
                variant="text"
                size="large"
                onClick={() =>
                  {
                    setPath(Constants.ON_BOARD);
                    dispatch({
                    type: Constants.MODEL_TOGGLE,
                    payload: {
                      ...userProfile,
                      modelOpen: true,
                    },
                  })}
                  
                }
              >
                Sign In
              </Button>
            )}

            <Modal
              title="Login"
              path={path}  
              onClose={() =>
                dispatch({
                  type: Constants.MODEL_TOGGLE,
                  payload: {
                    ...userProfile,
                    modelOpen: false,
                    path:Constants.ON_BOARD
                  },
                })
              }
              show={userProfile.modelOpen}
            >
              <p>This is modal body</p>
            </Modal>
            <Button
              color="primary"
              variant="contained"
              size="large"
              onClick={() => getstarted()}
            >
              Get Started
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <AppBarOffset />
    </div>
  );
};

function AppBarOffset() {
  const classes = useStyles();
  return <div className={classes.offset} />;
}

export default Header;
