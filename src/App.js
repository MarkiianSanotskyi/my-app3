import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { HeaderBar } from './components/HeaderBar';
import { Jumbotron } from './components/Jumbotron';
import { FooterBar } from './components/FooterBar';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <HeaderBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        <FooterBar />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;