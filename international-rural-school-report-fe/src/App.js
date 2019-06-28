
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import SignIn from './forms/SignIn';
import NavTop from './components/NavTop';
import Dashboard from './components/Dashboard';
import { connect } from 'react-redux'


class App extends Component {
  render() {
    return (
      <div>
        <div> 
          <NavTop />
        </div>
        <div>

          {this.props.token ? 
          (
            <Route path='/dashboard' component={Dashboard} />
          ):(
            <Route path='/signin' component={SignIn} />
          )
          }
            
        </div>
      </div>
    );
  }
}

const mstp = state => {
  return ({
    token: state.token
  })
}

export default connect(
  mstp
)(App)
