import { Switch, Route } from "react-router-dom";

import Login from "../Pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        Cadastro
      </Route>

      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
