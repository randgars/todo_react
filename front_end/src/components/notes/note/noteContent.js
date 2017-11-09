import React from 'react';
import '../../../styles/notes/note/note.scss';

import { TextField } from 'react-md';

const noteContent = (props) => {
  const handleChanged = (value) => {
    const {setNoteValue, uniqueKey} = props;
    setNoteValue(uniqueKey, value);
  };

  return (
    <div className="note-content-component">
      <TextField
        id="note-text-field"
        placeholder="Type many letters"
        rows={17}
        maxRows={17}
        block
        onChange={handleChanged}
        value={props.noteValue}
      />
    </div>
  );
}

export default noteContent;
