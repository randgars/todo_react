import React, {
  Component
} from 'react';
import '../../../styles/notes/note/note.scss';

import { Paper } from 'react-md';
import { CirclePicker } from 'react-color';

import Toolbar from './toolbar';
import Note from './noteContent';

const colors = [
  '#EF9A9A', '#F48FB1', '#CE93D8',
  '#B39DDB', '#9FA8DA', '#90CAF9',
  '#81D4FA', '#80DEEA', '#80CBC4',
  '#A5D6A7', '#C5E1A5', '#E6EE9C',
  '#FFF59D', '#FFE082', '#FFCC80',
  '#FFAB91', '#B0BEC5', '#FFFFFF'
]

class NoteComponent extends Component {
  constructor(props) {
    super(props);
    this.changeNoteColor = this.changeNoteColor.bind(this);
    this.openColorPanel = this.openColorPanel.bind(this);
    this.noteResize = this.noteResize.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
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
    if (event.target.id !== 'noteToolbar' && event.target.id !== 'noteToolbar-title') {
      return;
    }
    this.setState({
      offsetX: event.offsetX,
      offsetY: event.offsetY
    })
    this.props.notesContainer.addEventListener('mousemove', this.mouseMove);
    document.addEventListener('mouseup', this.mouseUp);
    this.props.notesContainer.childNodes.forEach((item) => (item.style.zIndex = '1'));
    this.notePaper.style.zIndex = '999';
  }

  mouseMove() {
    const cursorX = event.clientX - this.props.notesContainer.offsetLeft;
    const cursorY = event.clientY - this.props.notesContainer.offsetTop;
    this.notePaper.style.position = 'absolute';
    this.notePaper.style.left = (cursorX - this.state.offsetX) + 'px';
    this.notePaper.style.top = (cursorY - this.state.offsetY) + 'px';
  }

  mouseUp() {
    this.props.notesContainer.removeEventListener('mousemove', this.mouseMove);
    document.removeEventListener('mouseup', this.mouseUp);
  }

  render() {
    const {
      uniqueKey,
      deleteNote,
      index,
      setNoteValue,
      setNoteTitle,
      item,
      isDraggableNotes
    } = this.props;
    return (
      <div ref={(ref) => (this.notePaper = ref)} className="note-component__wrapper">
        <Paper
          zDepth={2}
          className={`note-component note-component_${this.state.isRollUp ? 'min' : 'full'}`}
        >
          <Toolbar
            bgColor={item.color}
            uniqueKey={uniqueKey}
            deleteNote={deleteNote}
            openColorPanel={this.openColorPanel}
            noteIndex={index}
            setNoteTitle={setNoteTitle}
            noteTitle={item.noteTitle}
            noteResize={this.noteResize}
            mouseDown={this.mouseDown}
            mouseUp={this.mouseUp}
            isDraggableNotes={isDraggableNotes}
            />
          {
            !this.state.isRollUp &&
            <Note
              uniqueKey={uniqueKey}
              setNoteValue={setNoteValue}
              noteValue={item.noteValue}
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
