import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  About: {
    padding: 70,
  },

  Inner: {
    marginTop: 20,
    lineHeight: 1.8,
  },
  text: {
    color: "#e82d2a"
  }
});

function About() {
  const classes = useStyles();
  return (
    <Grid container className={classes.About}>
      <Grid item xs={12} md={12}>
        <Typography variant="h2" className={classes.text}>About Us</Typography>
        <Typography variant="body1" gutterBottom className={classes.Inner}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          commodo elit non neque molestie ultrices. Vestibulum gravida libero
          nunc, eu venenatis neque tempor bibendum. Suspendisse viverra arcu
          sapien, eu imperdiet nisl molestie id. Vivamus vestibulum sapien nisi,
          id commodo turpis tristique quis. Mauris sollicitudin eleifend mi. In
          sit amet mattis augue, in elementum turpis. Praesent tempor, mi vel
          eleifend sagittis, tellus nisl ullamcorper lacus, congue efficitur
          orci purus non tortor. Vivamus quis varius felis. Phasellus eu finibus
          ligula, vel imperdiet tellus. Ut justo odio, cursus a imperdiet at,
          consequat sed lectus. Quisque fermentum at risus efficitur mattis.
          Nullam tempus mauris a sem consectetur tristique. Suspendisse ut
          fermentum erat, eu pulvinar nulla.
        </Typography>
        <Typography variant="body1" className={classes.Inner}>
          Sed vel scelerisque ante. Etiam sollicitudin ullamcorper orci eu
          consequat. Suspendisse id nunc interdum, tristique erat nec, imperdiet
          metus. Pellentesque mollis orci felis, nec tempor mauris congue eu.
          Curabitur urna orci, dapibus sit amet est vel, consectetur faucibus
          nulla. Aenean aliquam augue in tincidunt rutrum. Nullam vehicula
          aliquam facilisis. Donec et felis convallis mauris consectetur
          maximus. Morbi eget cursus massa, sed commodo dui.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default About;
