import {
  Container,
  Typography,
  OutlinedInput,
  InputLabel,
  FormControl,
  RadioGroup,
  FormLabel,
  Radio,
  FormControlLabel
} from "@material-ui/core";
import { Form as FinalForm, Field } from "react-final-form";
import Input from "../UI/Input";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

export default function Register({ checkLog }) {
  const history = useHistory();
  if (JSON.parse(localStorage.getItem("isLoggedIn")) === true) {
    history.push("");
  }

  const onSubmit = (values) => {
    const value = {
      id: "",
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      number: values.number,
      password: values.password,
      gender: values.gender
    };
    const users = JSON.parse(localStorage.getItem("data")) || [];
    value.id = users.length;
    users.push(value);
    localStorage.setItem("data", JSON.stringify(users));
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("isLoggedInUser", value.id);
    history.push("");
    checkLog();
  };

  return (
    <Container maxWidth="sm">
      <FinalForm
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};
          //First name validation
          if (!values.firstName) errors.firstName = "First name required.";
          // if (len < 4) errors.firstName = "First name required.";

          //Last name validation
          if (!values.lastName) errors.lastName = "Last name required.";

          //Email validation
          if (!values.email) errors.email = "Email required.";
          const regX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!regX.test(values.email)) errors.email = "Invalid email address.";

          //Number validation
          if (!values.number) errors.number = "Phone number required.";
          if (isNaN(values.number)) errors.number = "Only numbers allowed.";

          return errors;
        }}
      >
        {({ handleSubmit, hasValidationErrors, values, errors }) => (
          <form onSubmit={handleSubmit}>
            {/* {console.log(errors)} */}
            <Typography variant="h4">Register form</Typography>
            <Input
              name="firstName"
              type="text"
              size="small"
              label="First Name"
              variant="outlined"
              minLength={4}
            />
            <Input
              name="lastName"
              type="text"
              size="small"
              label="Last Name"
              variant="outlined"
              minLength={4}
            />
            <Input
              name="email"
              type="email"
              size="small"
              label="Email"
              variant="outlined"
              minLength={0}
            />
            <Input
              name="number"
              type="number"
              size="small"
              label="Number"
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
                    type={values.showPassword ? "text" : "password"}
                    {...input}
                    required
                  />
                </FormControl>
              )}
            </Field>
            <div>
              <Field required name="gender" className="gender">
                {({ input }) => (
                  <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      defaultValue="male"
                      name="radio-buttons-group"
                      {...input}
                      className="genderR"
                    >
                      <FormControlLabel
                        color="primary"
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />

                      <FormControlLabel
                        value="female"
                        color="primary"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        color="primary"
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                )}
              </Field>
            </div>
            {hasValidationErrors ? (
              <Button
                disabled
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            ) : (
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            )}
          </form>
        )}
      </FinalForm>
    </Container>
  );
}
