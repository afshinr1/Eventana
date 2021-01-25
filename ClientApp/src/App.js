import React from "react";
import { Route } from "react-router";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound";
import { makeStyles, Paper } from "@material-ui/core";
import { mainColors } from "./assets/Styles";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home.jsx";

const useStyles = makeStyles({
  root: {
    backgroundColor: mainColors.BACKGROUND_COLOR,
    height: "100vh",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/NotFound" component={NotFound} />
    </Paper>
  );
}

export default App;
