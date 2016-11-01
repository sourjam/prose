import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class Content extends React.Component {
  componentDidMount() {
    console.log('content mounted')
  }
  clickHandler() {
    console.log('content click')
  }
  render() {
    return <div onClick={this.clickHandler}> content </div>
  }
}

export default class Layout extends React.Component {
  componentDidMount() {
    console.log('layout mounted')
  }
  render() {
    return (
      <div>
        <h1 onClick={this.clickHandler}>Layout</h1>
        <ul>
          <li><Link to="home">Home</Link></li>
          <li><Link to="read">Read</Link></li>
          <li><Link to="read/1">Read 1</Link></li>
        </ul>
      </div>
    )
  }
}

try {
  if (window) {
    console.log('client from app')
    ReactDOM.render(<Content/>, document.getElementById('content'))
  }
}
catch(e) {

}