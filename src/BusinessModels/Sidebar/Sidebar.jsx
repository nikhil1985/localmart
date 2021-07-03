import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InputIcon from "@material-ui/icons/Input";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
  },
}));

export default function Sidebar({ onclick, state }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 style={{textAlign:"center", marginTop:"-2rem"}}>Dashboard</h3>
      <List component="nav">
        <ListItem
          button
          selected={state.activeLink === 1}
          onClick={(event) => onclick(event, 1)}
        >
          <ListItemIcon>
            <InputIcon />
          </ListItemIcon>
          <ListItemText primary="Submit Info" />
        </ListItem>
        <ListItem
          button
          selected={state.activeLink === 2}
          onClick={(event) => onclick(event, 2)}
        >
          <ListItemIcon>
            <InputIcon />
          </ListItemIcon>
          <ListItemText primary="On Board Item" />
        </ListItem>
        <ListItem
          button
          selected={state.activeLink === 3}
          onClick={(event) => onclick(event, 3)}
        >
          <ListItemIcon>
            <InputIcon />
          </ListItemIcon>
          <ListItemText primary="Review" />
        </ListItem>
        <ListItem
          button
          selected={state.activeLink === 4}
          onClick={(event) => onclick(event, 4)}
        >
          <ListItemIcon>
            <InputIcon />
          </ListItemIcon>
          <ListItemText primary="Submit and Publish" />
        </ListItem>
      </List>
    </div>
  );
}
