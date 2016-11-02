import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class Home extends React.Component {
  componentDidMount() {
    console.log('home mounted')
  }
  render() {
    return (
      <div>
        home component
      </div>
    )
  }
}

try {
  if (window) {
    console.log('client from app')
    ReactDOM.render(<Home/>, document.getElementById('content'))
  }
}
catch(e) {

}