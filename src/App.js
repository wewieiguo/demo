import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Root from "./page/root";
function App() {
  return (
    <Router>
      <Switch>
        <Route path={`/`} exact render={() => <Redirect to="/root" />} />
        <Route path="/root" component={Root} />
      </Switch>
    </Router>
  );
}

export default App;
