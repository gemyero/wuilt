import React, { Component } from 'react';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/about" component={AboutPage} exact={true} />
            <Route path="/users" component={UsersPage} />
            <Route path="**" component={ErrorPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;