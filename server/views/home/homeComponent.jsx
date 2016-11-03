import React from 'react';
import ReactDOM from 'react-dom';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('got props', props)
  }
  componentDidMount() {
    console.log('home mounted')
  }

  componentDidUpdate(prevProps) {
    console.log('updated', prevProps)
  }

  componentWillUnmount() {
    console.log('unmounting?')
  }

  componentWillReceiveProps(nextProps) {
    console.log('next', nextProps)
  }
  render() {
    return (
      <div>
        home component
      </div>
    )
  }
}

// try {
//   if (window) {
//     console.log('home from app')
//     ReactDOM.render(<Home/>, document.getElementById('home'))
//   }
// }
// catch(e) {

// }