import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route} from 'react-router';
import Routes from './routes';

export default <div>hi</div>


// let rootRoute = {
//   childRoutes: [{
//     path: '/',
//     component: require('./app/appComponent'),
//     childRoutes: [
//       require('./home/homeRoute'),
//       require('./read/readRoute'),
//       require('./compose/composeRoute')
//     ]
//   }]
// }

try {
  if (window) {
    console.log('client', browserHistory)
    ReactDOM.render(
      <Router history={browserHistory} routes={Routes}>
      </Router>
    , document.getElementById('root'))
  }
}
catch(e) {

}