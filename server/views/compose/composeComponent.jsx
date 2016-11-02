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

export default class Compose extends React.Component {
  componentDidMount() {
    console.log('layout mounted')
  }
  render() {
    return (
      <div>
        compose component
      </div>
    )
  }
}

try {
  if (window) {
    console.log('client from app')
    ReactDOM.render(<Compose/>, document.getElementById('content'))
  }
}
catch(e) {

}