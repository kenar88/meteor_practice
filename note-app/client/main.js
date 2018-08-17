import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { Tracker } from 'meteor/tracker';
// import { Session } from 'meteor/session';
import createHistory from 'history/createBrowserHistory';

import SignUp from '../imports/UI/SignUp';
import Dashboard from '../imports/UI/Dashboard';
import NotFound from '../imports/UI/NotFound';
import Login from '../imports/UI/Login';


const history = createHistory();
const unAuth = ['/signup', '/'];
const auth = ['/dashboard'];

const routes = (
  <Router history={history}>
      <Switch>
        <Route path="/" exact render={() => Meteor.userId() ? 
                                                            <Redirect to='/dashboard' />
                                                           :
                                                            <Login />} />
        <Route path="/signup" render={() => Meteor.userId() ? 
                                                            <Redirect to='/dashboard' />
                                                           :
                                                            <SignUp />} />
        <Route path="/dashboard" render={() => !Meteor.userId() ?
                                                             <Redirect to='/' />
                                                             :
                                                             <Dashboard />}/>
        <Route component={NotFound} />   
      </Switch>
  </Router>
);

Tracker.autorun(() => {
  const pathname = history.location.pathname;
  const isAutenticated = !!Meteor.userId();
  const isAuthPage= auth.includes(pathname);
  const isUnAuthPage = unAuth.includes(pathname);

  if ( isAutenticated === false && isAuthPage === true ) {
    history.push('/');
  }

  if (isAutenticated && isUnAuthPage) {
    history.push('/dashboard');
  }
  console.log('Is authenticated', isAutenticated);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});