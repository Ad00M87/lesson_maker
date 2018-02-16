import React, { Component } from 'react';
import NoMatch from './routing/NoMatch';
import NavBar from './routing/NavBar';
import Login from './auth/Login';
import Register from './auth/Register';
import Flash from './Flash';
import Home from './Home';
import CreateLesson from './CreateLesson';
import Ideas from './Ideas';
import ProtectedRoute from './routing/ProtectedRoute';
import AuthRoute from './routing/AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path='/createlesson' component={CreateLesson} />
            <Route exact path='/ideas' component={Ideas} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
