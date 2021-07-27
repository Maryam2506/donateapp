import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Donate from "./Pages/Donate";
import FDoner from "./Pages/FindDoner";
import AboutUs from "./Pages/AboutUs";
import { createMuiTheme, ThemeProvider } from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e82d2a'
    },
    secondary: {
      main: "#000000"
    }
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
     <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/Donate" component={Donate} />
      <Route exact path="/FindDoner" component={FDoner} />
      <Route exact path="/AboutUs" component={AboutUs} />
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
