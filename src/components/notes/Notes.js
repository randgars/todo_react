import React, {
  Component
} from 'react';
import '../../styles/notes/notes.scss';

import Note from './note/Note';
import { Button } from 'react-md';

class NotesComponent extends Component {
  render() {
    const {notesArray, addNote, actions} = this.props;

    return (
      <div className="notes-component">
        <div className="notes-component__cpanel">
          <Button
            onClick={addNote}
            flat
            primary
            swapTheming
            iconChildren="add"
          >
            Add note
          </Button>
        </div>
        <div ref={(ref) => (this.notesContainer = ref)} className="notes-component__container">
          {
            notesArray &&
            notesArray.map((item, index) => (
              <Note
                ref={(ref) => (this.notePaper = ref)}
                key={index}
                index={index}
                uniqueKey={item.noteKey}
                deleteNote={actions.deleteNote}
                setNoteValue={actions.setNoteValue}
                setNoteColor={actions.setNoteColor}
                setNoteTitle={actions.setNoteTitle}
                noteTitle={item.noteTitle}
                noteValue={item.noteValue}
                bgColor={item.color}
                notesContainer={this.notesContainer}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

NotesComponent.displayName = 'NotesComponent';
NotesComponent.propTypes = {};
NotesComponent.defaultProps = {};

export default NotesComponent;
