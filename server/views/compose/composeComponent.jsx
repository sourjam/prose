import React from 'react';
import ReactDOM from 'react-dom';
import RTE from 'react-rte';
import Read from './readComponent'
// import {Editor, EditorState, RichUtils} from 'draft-js';

console.log('compose')


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
    // this.setState({editWell: index})
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

ReactDOM.render(<Editor />, document.getElementById('compose'));