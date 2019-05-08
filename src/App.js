import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { NoMatch } from "./components/pages/NoMatch/NoMatch";
import { Layout } from "./components/shared/Layout/Layout";

const App = () => (
  <React.Fragment>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Home} />
        </Switch>
      </Layout>
    </Router>
  </React.Fragment>
);

export default App;
