import { Box, Button, fade, InputBase, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Subheader from "../Subheader/Subheader";
import "./Dropdown.css";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "50%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "12ch",
      },
    },
  },
}));

const Dropdown = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  var togglePop = () => {
    setOpen(!open);
  };

  return (
    <Box pt={0.2} ml={0.5}>
      <div className="submenu__flex">
        <div className="dropdown-button" onClick={togglePop}>
          <Button color="primary" variant="outlined">
            SUB MENU
          </Button>
        </div>

        <div className="search__field">
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </div>
      </div>
      {open ? <Subheader toggle={togglePop} /> : null}
    </Box>
  );
};

export default Dropdown;
