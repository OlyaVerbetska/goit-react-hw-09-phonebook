import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../redux/auth";
// styles
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector(authSelectors.getError);

  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  // обработать еррор
  // написать switch

  return (
    <div>
      <h1 className="title">Login Page</h1>

      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChangeEmail}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          autoComplete="off"
          autoFocus
        />

        <TextField
          type="password"
          name="password"
          placeholder="Create password"
          value={password}
          onChange={handleChangePassword}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          id="password"
          autoComplete="off"
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="form-field"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
