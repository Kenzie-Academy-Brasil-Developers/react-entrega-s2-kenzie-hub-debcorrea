import { Switch, Route } from "react-router-dom";

import Login from "../Pages/Login";
import Register from "../Pages/Register";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Register />
      </Route>

      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
