import routes from '../routes';

import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';

const ExtraMenu = () => (
  <Toolbar style={{
    backgroundColor: 'transparent',

  }}>
    <NavLink
      exact to={routes.home}
      className="linkExtra"
      activeClassName="active-linkExtra"        >
      Home
        </NavLink>
    <NavLink

      to={routes.contacts}
      className="linkExtra"
      activeClassName="active-linkExtra"
    >
      Contacts
        </NavLink>

  </Toolbar>
);

export default ExtraMenu;