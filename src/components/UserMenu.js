import '../../src/styles.css';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


const UserMenu = ({ userMail, onLogout }) => (
  <Toolbar
    style={{
      backgroundColor: 'Orchid',
      justifyContent: 'flex-end',
    }}
  >
    <p
           style={{
        marginRight: '30px',
      }}
    >
      {userMail}{' '}
    </p>
    <Button
      type="button"
      variant="contained"
      component="button"
      onClick={onLogout}
      style={{
        backgroundColor: 'SteelBlue',
        color: 'white',
      }}
    >
      Logout
    </Button>
  </Toolbar>
);

const mapStateToProps = state => ({
  userMail: authSelectors.getMail(state),
});

const mapDispatchToProps = dispatch => ({
  onLogout: data => dispatch(authOperations.logOut(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
