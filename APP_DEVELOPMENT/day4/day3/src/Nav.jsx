import { AppBar } from "@material-ui/core";
import { Box, Button } from "@material-ui/core";
import { Toolbar } from "@material-ui/core/";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./styles.css";
import { useHistory } from "react-router";

const useStyle = makeStyles({
  p10: {
    padding: 10
  },
  mb: {
    marginBottom: 10
  },
  m: {
    margin: 10
  },
  mla: {
    marginLeft: "auto"
  },
  tab: {
    minWidth: 10
  }
});

function Nav() {
  const history = useHistory();
  const classes = useStyle();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/"> Authenticate</Link>
          </Typography>
          <Box className={classes.mla}>
            <Link to="/login">
              <Typography className={classes.m} variant="button">
                {" "}
                Login
              </Typography>
            </Link>
            <Link to="/register">
              <Typography className={classes.m} variant="button">
                register
              </Typography>
            </Link>
            <Button
              variant="contained"
              onClick={() => {
                localStorage.setItem("isLoggedInUser", undefined);
                localStorage.setItem("isLoggedIn", false);
                history.push("/login");
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Nav;
