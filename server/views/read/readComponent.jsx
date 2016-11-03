import React from 'react';
import ReactDOM from 'react-dom';

console.log('rad')

export default class Read extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('read mounted')
  }
  clickHandler() {
    console.log('click read')
  }
  render() {
    return (
      <div>
        <div onClick={this.clickHandler}>Read component</div>
      </div>
    )
  }
}

// try {
//   if (window) {
//     console.log('read from app')
//     ReactDOM.render(<Read/>, document.getElementById('read'))
//   }
// }
// catch(e) {

// }