import "../../src/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../redux/auth";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";


export default function UserMenu() {
  const userMail = useSelector(authSelectors.getMail);
  const dispatch = useDispatch();

  return (
    <Toolbar
      style={{
        backgroundColor: "Orchid",
        justifyContent: "flex-end",
      }}
    >
      <p
        style={{
          marginRight: "30px",
        }}
      >
        {userMail}{" "}
      </p>
      <Button
        type="button"
        variant="contained"
        component="button"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
        style={{
          backgroundColor: "SteelBlue",
          color: "white",
        }}
      >
        Logout
      </Button>
    </Toolbar>
  );
}
