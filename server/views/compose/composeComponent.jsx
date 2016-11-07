import React from 'react';
import ReactDOM from 'react-dom';
import RTE from 'react-rte';

console.log('compose')

let textareaStyle = {
  width: '50%',
  height: '300px'
}

export default class Compose extends React.Component {
  constructor(props){
    super(props);
    console.log('props', props)
  }

  state = {
    value: RTE.createEmptyValue()
  }

  static propTypes = {
    onChange: React.PropTypes.func
  }

  onChange = (value) => {
    this.setState({value})
    if (this.props.onChange) {
      this.props.onChange(
        value.toString('html')
      )
    }
    console.log(value.toString('markdown'))
  }

  componentDidMount() {
    console.log('compose mounted')
  }
  clickHandler() {
    console.log('keyup')
  }
  render() {
    return (
      <div>compose
        <RTE
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

ReactDOM.render(<Compose />, document.getElementById('compose'))
          // <textarea onKeyUp={this.clickHandler} style={textareaStyle}></textarea>