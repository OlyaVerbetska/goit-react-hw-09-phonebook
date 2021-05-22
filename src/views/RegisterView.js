import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
// styles
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  // обработать еррор
  // написать switch

  const handleChangeName = (event) => setName(event.target.value);
  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);



  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authOperations.register({name, email, password }));
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <h1 className="title">Register Page</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={handleChangeName}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          autoComplete="off"
          autoFocus
        />

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
          Register
        </Button>
      </form>
    </div>
  );
}
