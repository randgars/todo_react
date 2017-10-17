import React, {
  Component
} from 'react';
import '../../../styles/notes/note/note-content.scss';

import { TextField } from 'react-md';

class NoteContentComponent extends Component {
  constructor(props) {
    super(props);
    this.handleChanged = this.handleChanged.bind(this);
  }

  handleChanged(value) {
    const {setNoteValue, uniqueKey} = this.props;
    setNoteValue(uniqueKey, value);
  }

  render() {
    return (
      <div className="note-content-component">
        <TextField
          id="note-text-field"
          placeholder="Type many letters"
          rows={17}
          maxRows={17}
          block
          onChange={this.handleChanged}
          value={this.props.noteValue}
        />
      </div>
    );
  }
}

NoteContentComponent.displayName = 'NoteContentComponent';
NoteContentComponent.propTypes = {};
NoteContentComponent.defaultProps = {};

export default NoteContentComponent;
