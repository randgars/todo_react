import React, {
  Component
} from 'react';

import { Toolbar, MenuButton, ListItem, TextField, Button } from 'react-md';

class ToolbarComponent extends Component {
  constructor(props) {
    super(props);
    this.changeNoteTitle = this.changeNoteTitle.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.onChange = this.onChange.bind(this);
    this.rollUpNote = this.rollUpNote.bind(this);
    this.state = {
      noteTitle: `Note ${this.props.noteIndex + 1}`,
      changeNoteTitle: false,
      isRollUp: false
    };
  }

  componentDidMount() {
    this.noteToolbar.addEventListener('mousedown', this.props.mouseDown)
  }

  onChange() {
    this.setState({
      changeNoteTitle: false
    });
  }

  changeNoteTitle() {
    const _this = this;
    this.setState({
      changeNoteTitle: true
    });
    setTimeout(() => { _this.titleFiled.focus(); }, 200);
  }

  rollUpNote() {
    this.setState({
      isRollUp: !this.state.isRollUp
    });
    this.props.noteResize();
  }

  deleteNote() {
    const {deleteNote, uniqueKey} = this.props;
    return (deleteNote(uniqueKey));
  }

  render() {
    const {bgColor, openColorPanel, setNoteTitle, uniqueKey} = this.props;
    return (
      <div
        ref={(ref) => (this.noteToolbar = ref)}
      >
        <Toolbar
          title={this.state.changeNoteTitle ?
            <TextField
              id="floating-center-title"
              block
              lineDirection="center"
              placeholder="enter a new title"
              onChange={(value) => (setNoteTitle(uniqueKey, value))}
              ref={(ref) => (this.titleFiled = ref)}
              onBlur={this.onChange}
            /> : this.props.noteTitle
          }
          actions={!this.state.changeNoteTitle ? [
            <Button
              id="menu-button"
              icon
              onClick={this.rollUpNote}
            >
              {this.state.isRollUp ? 'expand_more' : 'expand_less'}
            </Button>,
            <MenuButton
              id="menu-button"
              icon
              menuItems={[
                <ListItem key={1} onClick={this.changeNoteTitle} primaryText="Change title" />,
                <ListItem key={2} onClick={openColorPanel} primaryText="Cnange color" />,
                <ListItem key={3} onClick={this.deleteNote} primaryText="Delete" />,
              ]}
            >
              more_vert
            </MenuButton>
          ] : null}
          className="note-component__toolbar"
          style={bgColor && {backgroundColor: `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a}`}}
        />
      </div>
    );
  }
}

ToolbarComponent.displayName = 'ToolbarComponent';
ToolbarComponent.propTypes = {};
ToolbarComponent.defaultProps = {};

export default ToolbarComponent;
