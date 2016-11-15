import React from 'react';
import ReactDOM from 'react-dom';
import RTE from 'react-rte';
// import {Editor, EditorState, RichUtils} from 'draft-js';

console.log('compose')

export class Editor extends React.Component {
  static propTypes = {
    onChange: React.PropTypes.func
  };

  state = {
    value: RTE.createEmptyValue(),
    prose: true
  }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      this.props.onChange(
        value.toString('html')
      )
    }
  }

  swapMode() {
    this.setState({prose: !this.state.prose})
  }

  render() {
    return (
      <div>
        <button onClick={this.swapMode.bind(this)}>Swap Mode</button>
        { this.state.prose === true ?
          <RTE
            value={this.state.value}
            onChange={this.onChange}
          />
          :
          null
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