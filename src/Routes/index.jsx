import { Switch, Route } from "react-router-dom";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
