import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { addNote, deleteNote, setNoteValue, setNoteColor, setNoteTitle } from '../actions/';
import Main from '../components/notes/Notes';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
  }

  addNote() {
    const randKey = Math.random().toString(36);
    this.props.actions.addNote(randKey);
  }

  render() {
    const { notesArray } = this.props;
    return (
      <Main
        notesArray={notesArray}
        addNote={this.addNote}
        actions={this.props.actions}
      />
    );
  }
}

Notes.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) {
  const props = {
    notesArray: state.note.notesArray
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    addNote,
    deleteNote,
    setNoteValue,
    setNoteColor,
    setNoteTitle
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Notes));
