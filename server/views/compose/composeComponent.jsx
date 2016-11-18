import React from 'react';
import ReactDOM from 'react-dom';
import RTE from 'react-rte';
// import {Editor, EditorState, RichUtils} from 'draft-js';

console.log('compose')

export class Well extends React.Component {
  constructor(props) {
    super(props)
    let reg = /\<.>|<\/.>|\s/g
    let wellArr = props.content.split(reg);
    this.state = {
      content: wellArr
    }
    console.log('well props', this.state)
  }

  makeWell(index) {
    console.log(index, this.state.content[index])
  }

  render() {
    return (
      <div>
        <button onClick={this.props.saveWell}>Save Well</button>
        {this.state.content.map((val, index, arr) => {
          return (
            <span>
              {val !== '' ?
                <button onClick={this.makeWell.bind(this, index)}>{val}</button>
                : null}
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
    prose: true
  }

  onChange = (value) => {
    this.setState({value});
    console.log('hi', this.state.value)
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

  swapMode() {
    this.setState({prose: !this.state.prose})
    // create/convert prose to well


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
        <button onClick={this.swapMode.bind(this)}>Swap Mode</button>
        { this.state.prose === true ?
          <RTE
            value={this.state.value}
            onChange={this.onChange.bind(this)}
          />
          :
          <div>
            <Well saveWell={this.saveWell.bind(this)} content={this.state.value.toString('html')} />
          </div>
        }
      </div>
    )
  }
}



export class Compose extends React.Component {
  constructor() {
    super();
    this.state = {
      content: [
        {text: 'Text'}, {text: 'goes'}, {text: '<b>here</b>'}
      ],
      prose: '',
      layers: [

      ]
    }
  }

  componentDidMount() {
    let p = this.state.content.reduce((memo, val) => {
      if (typeof memo === 'object') {
        memo = memo.text
      }
      return memo = memo + ' ' + val.text;
    })
    console.log('memo', p)
    this.setState({prose: p})
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('update', nextProps, nextState)
  }


  render() {
    return (
      <div id="prose">

      </div>
    )
  }
}

ReactDOM.render(<Editor />, document.getElementById('compose'));

// export class Draft extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {editorState: EditorState.createEmpty()};
//     this.onChange = (editorState) => this.setState({editorState});
//     this.handleKeyCommand = this.handleKeyCommand.bind(this);
//     console.log('props', props)
//   }

//   handleKeyCommand(command) {
//     const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
//     if (newState) {
//       this.onChange(newState);
//       return 'handled';
//     }
//     return 'not-handled';
//   }

//   _onBoldClick() {
//     this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
//   }

//   componentDidMount() {
//     console.log('compose mounted')
//   }
//   clickHandler() {
//     console.log(this.state.editorState.getCurrentContent())
//   }
//   render() {
//     const {editorState} = this.state;
//     return (
//       <div>
//         <button onClick={this._onBoldClick.bind(this)}>Bold</button>
//         <button onClick={this.clickHandler.bind(this)}>EditorState</button>
//         <Editor
//           editorState={editorState}
//           handleKeyCommand={this.handleKeyCommand}
//           onChange={this.onChange}
//         />
//       </div>
//     )
//   }
// }