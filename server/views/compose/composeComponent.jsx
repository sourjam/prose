import React from 'react';
import ReactDOM from 'react-dom';
import RTE from 'react-rte';
import Read from './readComponent'

export class Compose extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blank: true,
      PW: [],
      value: null
    }
  }

  checkState() {
    console.log(this.state)
  }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      this.props.onChange(
        value.toString('html')
      )
    }
  }

  componentWillMount() {
    let path = window.location.pathname.split('/');
    console.log(path)
    if (path[path.length - 1] !== '') {
      this.getPW()
    } else {
      let blankRTE = RTE.createEmptyValue();
      this.setState({value: blankRTE})
      console.log('loading blank')
    }
  }

  getPW() {
    // grabs PW from backend
    console.log('grab existing')
    let testPW = [
      {html: '<p>Hello'},
      {html: 'New'},
      {html: 'York!</p>'}
    ]
    this.setState({PW: testPW}, this.setState({blank: false}))
    let html = this.htmlFromPW(testPW);
    html = RTE.createValueFromString(html, 'html');
    this.setState({value: html})
  }

  savePW() {
    // stores PW in backend
  }

  htmlFromPW(array) {
    let string = '';

    array.forEach((val,i) => {
      string += val.html + ' '
    })

    return string;
  }

    render() {
      return (
        <div>
          <button onClick={this.checkState.bind(this)}>Check State</button>
          <br></br>
          { this.state.blank ?
            <RTE
              value={this.state.value}
              onChange={this.onChange.bind(this)}
            /> :
            <RTE
              value={this.state.value}
              onChange={this.onChange.bind(this)}
            />
          }
        </div>
      )
    }
}

export class Well extends React.Component {
  constructor(props) {
    super(props)
    let reg = /\<.>|<\/.>|\s/g
    let wellArr = props.content.split(reg);
    this.state = {
      content: wellArr,
      editWell: null
    }
    console.log('well props', this.state)
  }

  editWell(index) {
    console.log(index, this.state.content[index])
    this.setState({editWell: index})
  }

  render() {
    return (
      <div>
        {this.state.content.map((val, index, arr) => {
          return (
            <span key={index}>
              {val !== '' && val !== '<br>' ?
                <button onClick={this.editWell.bind(this, index)}>{val}</button> : null}
              { this.state.editWell === index ?
                <Editor/> : null}
            </span>
          )
        })}
      </div>
    )
  }
}

export default class Editor extends React.Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    onChange: React.PropTypes.func
  };

  state = {
    well: null,
    testInit: [{html: '<p>Hello'}, {html: 'my'}, {html: 'baby,</p>'}, {html: '<p>hello'}, {html: 'my'}, {html: 'honey!</p?'}],
    value: RTE.createEmptyValue(),
    testValue: RTE.createValueFromString('<p>hello there again</p><p>guess whos been</p>', 'html'),
    mode: 'prose',
  }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      this.props.onChange(
        value.toString('html')
      )
    }
  }

  convertProse(html) {
    console.log('convert this', this.state.value.toString('html'))
    let text = this.state.value.toString('html');
    let well = [];
    text = text.replace(/>/g, '>,').replace(/\s/g, ',');
    console.log('replaced', text)
    text = text.split(',');
    console.log('new array', text)
    text.forEach((val)=>{
      well.push({html: val})
    })
    return well;
  }

  swapMode(mode) {
    this.setState({mode: mode})
    // create/convert prose to well
    this.saveProse();
  }

  checkState() {
    console.log(this.state)
  }

  saveProse() {
    console.log(this.state.value.toString('html'))
    //convert existing prose to well => replace previous well.
    let well = this.convertProse();
    console.log('converted', well)
    this.setState({well: well})
    console.log('new well', this.state)
  }

  saveWell() {
    console.log('parent', this.state)
  }

  render() {
    return (
      <div>
        <button onClick={this.checkState.bind(this)}>Check State</button>
        <button onClick={this.saveProse.bind(this)}>Save</button>
        <button onClick={this.swapMode.bind(this, 'prose')}>Prose Mode</button>
        <button onClick={this.swapMode.bind(this, 'well')}>Well Mode</button>
        <button onClick={this.swapMode.bind(this, 'read')}>Read Mode</button>
        { this.state.mode === 'prose' ?
          <RTE
            value={this.state.value}
            onChange={this.onChange.bind(this)}
          />
          :
          null
        }
        { this.state.mode === 'well' ?
          <div>
            <Well saveWell={this.saveWell.bind(this)} content={this.state.value.toString('html')} />
          </div>
          :
          null
        }
        { this.state.mode === 'read' ?
          <Read></Read>
          :
          null
        }
      </div>
    )
  }
}
ReactDOM.render(<Compose />, document.getElementById('precompose'))
ReactDOM.render(<Editor />, document.getElementById('compose'));