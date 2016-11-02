import React from 'react';
import { Route } from 'react-router';
import Layout from '../layout/layoutComponent';
import Read from '../read/readComponent';

export default (
  <Route to='/' component={Layout}>
    <Route to='read' component={Read}/>
  </Route>
)