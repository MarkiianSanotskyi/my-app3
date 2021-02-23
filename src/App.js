import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { AddDataForm } from "./components/pages/AddDataForm/AddDataForm.js";
import { Gallery } from "./components/pages/Gallery/Gallery";
import { NoMatch } from "./components/pages/NoMatch/NoMatch";
import { Layout } from "./components/shared/Layout/Layout";

const App = () => (
  <React.Fragment>
    <Router>
      <Layout>
        <Switch>
          <Route path="/my-app3" component={Home} />
          <Route path="/add-data-form" component={AddDataForm} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/nomatch" component={NoMatch} />
        </Switch>
      </Layout>
    </Router>
  </React.Fragment>
);

export default App;
