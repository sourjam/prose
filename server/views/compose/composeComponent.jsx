import React from 'react';
import ReactDOM from 'react-dom';
// import RTE from 'react-rte';
import {Editor, EditorState, RichUtils} from 'draft-js';

console.log('compose')

export class Draft extends React.Component {
  constructor(props){
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    console.log('props', props)
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  componentDidMount() {
    console.log('compose mounted')
  }
  clickHandler() {
    console.log(this.state.editorState.getCurrentContent())
  }
  render() {
    const {editorState} = this.state;
    return (
      <div>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <button onClick={this.clickHandler.bind(this)}>EditorState</button>
        <Editor
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default class Compose extends React.Component {
  constructor() {
    super();
    this.state = {content: [
      {text: 'Text'}, {text: 'goes'}, {text: '<b>here</b>'}
    ]}
  }

  _onChange(e) {
    let w = '';
    let p = document.getElementById('prose').childNodes
    p.forEach((node) => {
      w += node.innerHTML + ' '
    });

    console.log('p', p, w)

  }

  render() {
    let p = this.state.content.reduce((memo, val) => {
      if (typeof memo === 'object') {
        memo = memo.text
      }
      return memo = memo + ' ' + val.text;
    })
    console.log('memo', p)
    return (
      <div id="prose">
        <span contentEditable="true" dangerouslySetInnerHTML={{__html: p}}></span>
      </div>
    )
  }
}

ReactDOM.render(<Compose />, document.getElementById('compose'));