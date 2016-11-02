import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
// import Layout from './layout/layoutComponent';
// import Read from './read/readComponent';
// import Home from './home/homeComponent';
// import Compose from './compose/composeComponent';

// import Router from './router/routerComponent';

// export default Router;

export default <div>hi</div>
// export default (
//   <div>
//     <Route path="/" component={Layout}>
//       <IndexRoute component={Home}/>
//       <Route path="/read" component={Read}/>
//       <Route path="/read/:id" component={Read}/>
//       <Route path="/compose" component={Compose}/>
//     </Route>
//   </div>
// );

let rootRoute = {
  path: '/',
  name: 'root',
  component: require('./layout/layoutComponent'),
  indexRoute: {
    getComponent: (location, cb) => {
      return require.ensure([], (require) => {
        cb(null, require('./home/homeComponent'))
      })
    }
  }
}

try {
  if (window) {
    console.log('client')
    ReactDOM.render(
      <Router routes={rootRoute}
              path='/' history={browserHistory}>
      </Router>
    , document.getElementById('content'))
  }
}
catch(e) {

}