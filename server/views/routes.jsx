import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app/appComponent';
import Home from './home/homeComponent';
import Read from './read/readComponent';
import Compose from './compose/composeComponent';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='/read' component={Read}/>
    <Route path='/compose' component={Compose}/>
  </Route>
)