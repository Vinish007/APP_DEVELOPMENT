import { Field } from "react-final-form";
import { TextField, makeStyles } from "@material-ui/core";

const theme = makeStyles({
  input: {
    margin: "10px",
    background: "#f7f7f7"
  }
});
export default function Input({ name, type, label, size, variant, minLength }) {
  const classes = theme();

  return (
    <Field name={name} minLength={minLength} required>
      {({ input, meta, ...rest }) => (
        <div>
          {meta.error && meta.touched && (
            <span className="error">* {meta.error}</span>
          )}
          <TextField
            required
            variant={variant}
            label={label}
            multiline
            size={size}
            type={type}
            {...input}
            {...rest}
            className={classes.input}
          />
        </div>
      )}
    </Field>
  );
}
