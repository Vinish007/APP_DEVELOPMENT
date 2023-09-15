import {
  Container,
  Typography,
  OutlinedInput,
  InputLabel,
  FormControl
} from "@material-ui/core";
import { Field, Form as FinalForm } from "react-final-form";
import Input from "../UI/Input";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Login({ checkLog }) {
  var errorOccur = {
    error: "",
    occur: false
  };

  const history = useHistory();
  if (JSON.parse(localStorage.getItem("isLoggedIn")) === true) {
    history.push("");
  }

  const onSubmit = async (values) => {
    await sleep(300);
    errorOccur = {
      error: "",
      occur: false
    };
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("isLoggedInUser", undefined);

    const value = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      number: values.number,
      password: values.password
    };
    const users = JSON.parse(localStorage.getItem("data")) || [];
    users.map((user) => {
      if (user.email === value.email) {
        if (user.password === value.password) {
          errorOccur = {
            error: "",
            occur: false
          };
          localStorage.setItem("isLoggedInUser", user.id);
          localStorage.setItem("isLoggedIn", true);
          history.push("");
          return true;
        }
      } else {
        errorOccur.error = "Incorrect login credintials";
        errorOccur.occur = true;
      }
      return true;
    });
  };

  return (
    <Container maxWidth="sm">
      <FinalForm
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};

          //Email validation
          if (!values.email) errors.email = "Email required.";
          const regX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!regX.test(values.email)) errors.email = "Invalid email address.";

          //Password validation
          if (!values.password) errors.password = "Incorret Password.";

          return errors;
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            {errorOccur.occur && (
              <div className="error">{errorOccur.error}</div>
            )}
            <Typography variant="h4">Login form</Typography>
            <Input
              name="email"
              type="email"
              size="small"
              label="Email"
              variant="outlined"
              minLength={0}
            />
            <Field name="password" required>
              {({ input }) => (
                <FormControl size="small" variant="filled">
                  <InputLabel htmlFor="filled-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="filled-adornment-password"
                    type="password"
                    {...input}
                    required
                  />
                </FormControl>
              )}
            </Field>
            {props.hasValidationErrors ? (
              <Button
                disabled
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            ) : (
              <Button
                // onClick={form.reset}
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            )}
          </form>
        )}
      </FinalForm>
    </Container>
  );
}
export default Login;
