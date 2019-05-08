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
          <Route  component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </Layout>
    </Router>
  </React.Fragment>
);

export default App;
