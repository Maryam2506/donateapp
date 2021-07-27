import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import drop from "../Images/drop.jpg";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      justifyContent: "center",
    },
    text: {
      color: "#ef0405",
    },

    img: {
      width: "70%",
      marginLeft: "15%",
    },
    Mtext: {
      padding: "4rem",
      marginTop: 30
    },
  };
});

function HomeComponent() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item sm={12} md={5} className={classes.Mtext}>
        <Typography className={classes.text} variant="h2">
          Donate Blood
        </Typography>
        <Typography variant="h3">Save Life!</Typography>
      </Grid>
      <Grid item sm={12} md={5}>
        <img src={drop} alt="" className={classes.img} />
      </Grid>
    </Grid>
  );
}

export default HomeComponent;
