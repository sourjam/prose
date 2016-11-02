import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import Layout from './views/layout/layoutComponent';
import Home from './views/home/homeComponent';
import Read from './views/read/readComponent';

// class Home extends React.Component {
//   render() {
//     return <div>Home</div>
//   }
// }

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
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
    <Route path="/read" component={Read}/>
    <Route path="/read/:id" component={Read}/>
  </Route>
  </div>
);