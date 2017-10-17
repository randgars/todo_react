import React, {
  Component
} from 'react';
import '../../../styles/notes/note/note.scss';

import { Paper } from 'react-md';
import { CirclePicker } from 'react-color';

import Toolbar from './toolbar';
import Note from './noteContent';

const colors = [
  '#F44336', '#E91E63', '#9C27B0',
  '#673AB7', '#3F51B5', '#2196F3',
  '#03A9F4', '#00BCD4', '#009688',
  '#4CAF50', '#8BC34A', '#CDDC39',
  '#FFEB3B', '#FFC107', '#FF9800',
  '#FF5722', '#607D8B', '#FFFFFF'
]

class NoteComponent extends Component {
  constructor(props) {
    super(props);
    this.changeNoteColor = this.changeNoteColor.bind(this);
    this.openColorPanel = this.openColorPanel.bind(this);
    this.noteResize = this.noteResize.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.state = {
      displayColorPanel: false,
      isRollUp: false
    };
  }

  openColorPanel() {
    if (this.state.isRollUp === true) {
      this.setState({
        isRollUp: !this.state.isRollUp,
      });
    }
    this.setState({
      displayColorPanel: true
    });
  }

  changeNoteColor(qwe) {
    const rgba = qwe.rgb;
    this.props.setNoteColor(this.props.uniqueKey, {r: rgba.r, g: rgba.g, b: rgba.b, a: rgba.a});
    this.setState({
      displayColorPanel: false
    });
  }

  noteResize() {
    this.setState({
      isRollUp: !this.state.isRollUp
    });
  }

  mouseDown() {
    debugger
    this.notePaper.style.left = '50px';
    this.notePaper.style.top = '50px';
  }

  render() {
    const {
      uniqueKey,
      deleteNote,
      index,
      setNoteValue,
      noteValue,
      bgColor,
      setNoteTitle,
      noteTitle
    } = this.props;
    return (
      <div ref={(ref) => (this.notePaper = ref)} className="note-component__wrapper">
        <Paper
          zDepth={2}
          className={`note-component note-component_${this.state.isRollUp ? 'min' : 'full'}`}
        >
          <Toolbar
            bgColor={bgColor}
            uniqueKey={uniqueKey}
            deleteNote={deleteNote}
            openColorPanel={this.openColorPanel}
            noteIndex={index}
            setNoteTitle={setNoteTitle}
            noteTitle={noteTitle}
            noteResize={this.noteResize}
            mouseDown={this.mouseDown}
            />
          {
            !this.state.isRollUp &&
            <Note
              uniqueKey={uniqueKey}
              setNoteValue={setNoteValue}
              noteValue={noteValue}
            />
          }
          {
            this.state.displayColorPanel &&
            <div className="note-component__color-picker">
              <CirclePicker
                onChange={this.changeNoteColor}
                className="note-component__circle-picker"
                colors={colors}
              />
            </div>
          }
        </Paper>
      </div>
    );
  }
}

NoteComponent.displayName = 'NoteComponent';
NoteComponent.propTypes = {};
NoteComponent.defaultProps = {};

export default NoteComponent;
