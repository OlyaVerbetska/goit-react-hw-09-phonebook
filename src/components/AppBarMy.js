import { useSelector } from "react-redux";
import { authSelectors } from "../redux/auth";

import UserMenu from "./UserMenu";
import AuthMenu from "./AuthMenu";
import ExtraMenu from "./ExtraMenu";

import AppBar from "@material-ui/core/AppBar";


export default function AppBarMy() {
  const isAuth = useSelector(authSelectors.getIsAuthenticated);
  return (
    <header>
      <AppBar position="fixed">
        {isAuth ? <UserMenu /> : <AuthMenu />}
        {isAuth && <ExtraMenu />}
      </AppBar>
    </header>
  );
}
