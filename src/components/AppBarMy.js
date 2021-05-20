import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';

import UserMenu from './UserMenu';
import AuthMenu from './AuthMenu';
import ExtraMenu from './ExtraMenu';

import AppBar from '@material-ui/core/AppBar';


const AppBarMy = ({ isAuth }) => (
  <header>
    <AppBar position="fixed" >
      {isAuth ? <UserMenu /> : <AuthMenu />}
      {isAuth && <ExtraMenu />}
    </AppBar>
  
  </header>
);

const mapStateToProps = state => ({
  isAuth: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBarMy);
