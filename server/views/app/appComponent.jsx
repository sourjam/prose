import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('APP')
  }
  render() {
    return (
      <div>
        <h2>App Component</h2>
        <Link to="/"> Home </Link>
        <Link to="/read">Read</Link>
        <Link to="/compose">Compose</Link>
        { this.props.children }
      </div>
    )
  }
}

module.exports = App