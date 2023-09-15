import "./styles.css";
import { useState, useEffect } from "react";
// import { useHistory } from "react-router";
import { Container } from "@material-ui/core";
import { Typography, Box } from "@material-ui/core";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const initialState = {
    firstName: "s",
    lastName: "s",
    email: "s",
    number: "s",
    gender: "s"
  };
  const [data, setData] = useState(initialState);
  useEffect(() => {
    checkLog();
  }, []);

  function checkLog() {
    if (localStorage.getItem("isLoggedIn")) {
      setIsLoggedIn(true);
    }
    if (localStorage.getItem("data") !== undefined) {
      const data = JSON.parse(localStorage.getItem("data"));
      // console.log(
      //   "data",
      //   data[JSON.parse(localStorage.getItem("isLoggedInUser"))]
      // );
      setData(data[JSON.parse(localStorage.getItem("isLoggedInUser"))]);
    }
  }

  return (
    <div className="App">
      {isLoggedIn && (
        <Container className="box">
          <Typography variant="h4" align="center">
            Welcome {data.firstName}
            {data.lastName}
          </Typography>
          <Box className="box" color="primary">
            <Typography variant="subtitle2">Number: {data.number}</Typography>
            <Typography variant="subtitle2">E-mail: {data.email}</Typography>
            <Typography variant="subtitle2">Gender: {data.gender}</Typography>
          </Box>
        </Container>
      )}
    </div>
  );
}
