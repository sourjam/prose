import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, Link } from 'react-router';
import App from './appComponent';

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('hi home')
  }
  componentDidMount() {
    console.log('layout mounted')
  }
  render() {
    return <div>Home</div>
  }
}

class Read extends React.Component {
  constructor(props) {
    super(props)
    console.log('hi read')
  }
  componentDidMount() {
    console.log('layout mounted')
  }
  render() {
    return <div>Read</div>
  }
}

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

// try {
//   if (window) {
//     console.log('client')
//     ReactDOM.render(<App/>, document.getElementById('root'))
//   }
// }
// catch(e) {

// }