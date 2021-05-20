import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
// styles
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1 className="title">Register Page</h1>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <TextField
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
            Register
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};
//eslint-disable-next-line
export default connect(null, mapDispatchToProps)(RegisterView);
