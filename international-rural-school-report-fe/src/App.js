
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import SignIn from './forms/SignIn';
import SignUp from './forms/SignUp';
import NavTop from './components/NavTop';

import Dashboard from './components/Dashboard'

class App extends Component {
  render() {
    return (
      <div>
        <div> 
          <NavTop />
        </div>
        <div>
          <Switch>
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;