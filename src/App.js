import { Suspense, lazy, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { useDispatch } from "react-redux";

import Loader from "react-loader-spinner";

import routes from "./routes";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import { authOperations } from "./redux/auth";
import AppBarMy from "./components/AppBarMy";

import "./styles.css";

const HomeView = lazy(() =>
  import("./views/HomeView" /* webpackChunkName: "home-page" */)
);
const RegisterView = lazy(() =>
  import("./views/RegisterView" /* webpackChunkName: "register-page" */)
);
const LoginView = lazy(
  () => import("./views/LoginView") /* webpackChunkName: "login-page" */
);
const ContactsView = lazy(() =>
  import("./views/ContactsView" /* webpackChunkName: "contacts-page */)
);
const NotFoundView = lazy(() =>
  import("./views/NotFoundView" /* webpackChunkName: "not-found-page */)
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBarMy />
      <div className="container">
        <Suspense
          fallback={
            <Loader
              type="Rings"
              color="orchid"
              height={100}
              width={200}
              timeout={1000} //3 secs
            />
          }
        >
          <Switch>
            <Route exact path={routes.home}>
              <HomeView />{" "}
            </Route>

            <PublicRoute
              path={routes.register}
              redirectTo={routes.home}
              restricted
            >
              <RegisterView />{" "}
            </PublicRoute>

            <PublicRoute
              path={routes.login}
              redirectTo={routes.contacts}
              restricted
            >
              <LoginView />
            </PublicRoute>

            <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
              {" "}
              <ContactsView />
            </PrivateRoute>

            <Route>
              <NotFoundView />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}
