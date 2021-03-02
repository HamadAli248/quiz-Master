import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { UserContext } from "../Services/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const { authenticated, setAuthenticated } = useContext(UserContext);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="relative" className={styles.headerColor}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={handleClick} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link className={styles.menuLinks} to="/">
                <MenuItem onClick={handleClose}>Home</MenuItem>
              </Link>
              {authenticated ? (
                <>
                  <Link className={styles.menuLinks} to="/quiz">
                    <MenuItem onClick={handleClose}>Quiz</MenuItem>
                  </Link>
                  <Link
                    className={styles.menuLinks}
                    onClick={() => {
                      window.location.href = "/login";
                    }}
                  >
                    <MenuItem onClick={handleClose}>Log Out</MenuItem>
                  </Link>
                </>
              ) : (
                <>
                  <Link className={styles.menuLinks} to="/login">
                    <MenuItem onClick={handleClose}>Log In</MenuItem>
                  </Link>
                </>
              )}
            </Menu>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Quiz Manager
            </Link>
          </Typography>
          <div className={styles.navButtons}>
            <Button color="inherit">
              <Link className={styles.navlinks} to="/">
                Home
              </Link>
            </Button>
            {authenticated ? (
              <>
                <Button color="inherit">
                  <Link className={styles.navlinks} to="/quiz">
                    Quiz
                  </Link>
                </Button>
                <Button color="inherit">
                  <Link
                    className={styles.navlinks}
                    onClick={() => {
                      window.location.href = "/login";
                    }}
                  >
                    Log Out
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit">
                  <Link className={styles.navlinks} to="/login">
                    Log In
                  </Link>
                </Button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
