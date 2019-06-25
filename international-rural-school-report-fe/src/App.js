import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/dashboard' component={Dashboard} />
      </div>
    </BrowserRouter>
  );
}

export default App;
