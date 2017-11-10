import React from 'react';
import '../../../styles/notes/note/note.scss';

import { TextField } from 'react-md';

const noteContent = (props) => {
  let noteValue;

  const handleChanged = (value) => {
    noteValue = value
  };
  const onChange = () => {
    if (!noteValue || props.noteValue === noteValue) {
      return;
    }
    const {setNoteValue, uniqueKey} = props;
    setNoteValue(uniqueKey, noteValue);
  }

  return (
    <div className="note-content-component">
      <TextField
        id="note-text-field"
        placeholder="Type many letters"
        rows={17}
        maxRows={17}
        block
        onChange={handleChanged}
        defaultValue={props.noteValue}
        onBlur={onChange}
      />
    </div>
  );
}

export default noteContent;
