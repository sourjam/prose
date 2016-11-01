import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import App from './views/appComponent';
import Read from './views/readComponent';

class Home extends React.Component {
  render() {
    return <div>Home</div>
  }
}

// class Read extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log('hi')
//   }
//   render() {
//     return <div>Read</div>
//   }
// }

export default (
  <div>
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
  </Route>
  <Route path="/home" component={Home}/>
  <Route path="/read" component={Read}/>
  <Route path="/read/:id" component={Read}/>
  </div>
);