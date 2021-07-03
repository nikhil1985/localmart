import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
  },
  item: {
    padding: 1
  }
}));

const Menu = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemText primary="Fruits &amp; Vegetables" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText secondary="Drafts"  />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText secondary="Drafts" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText secondary="Drafts" />
        </ListItem>

        <Divider />
        <ListItem button>
          <ListItemText secondary="Drafts" />
        </ListItem>

        <Divider />
        <ListItem button>
          <ListItemText secondary="Drafts" />
        </ListItem>
      </List>
    </div>
  );
};

export default Menu;
