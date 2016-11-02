import React from 'react';
import { Router, browserHistory, Route } from 'react-router';

let rootRoute = {
  path: '/',
  name: 'root',
  component: require('../layout/layoutComponent'),
  indexRoute: {
    getComponent: (location, cb) => {
      return require.ensure([], (require) => {
        cb(null, require('../home/homeComponent'))
      })
    }
  }
}

export default (
  <Router routes={rootRoute} history={browserHistory}></Router>
)