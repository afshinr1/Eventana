import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound";
import { makeStyles, Paper } from "@material-ui/core";
import { mainColors } from "./assets/Styles";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { CssBaseline } from "@material-ui/core";

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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
      <ToastContainer />
      <CssBaseline />
    </Paper>
  );
}

export default App;
