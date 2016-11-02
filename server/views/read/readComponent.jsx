import React from 'react';
import ReactDOM from 'react-dom';

export default class Read extends React.Component {
  constructor(props) {
    super(props)
    console.log('hi read')
  }
  componentDidMount() {
    console.log('read mounted')
  }
  clickHandler() {
    console.log('click read')
  }
  render() {
    return <div onClick={this.clickHandler}>Read</div>
  }
}

try {
  if (window) {
    ReactDOM.render(<Read/>, document.getElementById('content'))
  }
}
catch(e) {

}