import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useStyles } from "./Navbar.styles";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import CreateEvent from "../CreateEvent/CreateEvent";
import { toast } from "react-toastify";
import Notifications from "../Notifications/Notifications";

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openNotifications, setOpenNotifications] = useState(false);

  const history = useHistory();
  const isMenuOpen = Boolean(anchorEl);
  const token = sessionStorage.getItem("token");
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleCloseNotifications = () => {
    setOpenNotifications(false);
  };

  const handleLogout = async () => {
    sessionStorage.clear();
    const response = await fetch("/api/authentication/logout");
    if (response.ok) {
      handleMenuClose();
      toast.success("Logout successful");
      history.push("/login");
    }
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={(e) => setOpenNotifications(true)}>
        notifications
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>manage events</MenuItem>
      <MenuItem onClick={handleLogout}>logout</MenuItem>
    </Menu>
  );

  const authMenu = !token ? (
    <>
      <Button onClick={(e) => history.push("/login")}>Login</Button>
      <Button onClick={(e) => history.push("/register")}>Register</Button>
    </>
  ) : (
    <IconButton
      edge="end"
      aria-label="account of current user"
      aria-controls={menuId}
      aria-haspopup="true"
      onClick={handleProfileMenuOpen}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={(e) => history.push("/")}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            EVENTANA
          </Typography>
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
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {token && <CreateEvent />}
            {authMenu}
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {token && (
        <Notifications
          open={openNotifications}
          handleClose={handleCloseNotifications}
        />
      )}
    </div>
  );
}
