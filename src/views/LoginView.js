import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
// styles
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1 className="title">Login Page</h1>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <TextField
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
}
const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
