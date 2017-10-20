import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import {} from '../actions/';
import Main from '../components/events/Events';

class Events extends Component {
  constructor(props) {
    super(props);
    this.addEvent = this.addEvent.bind(this)
    this.setEventValue = this.setEventValue.bind(this)
    this.setTimeValue = this.setTimeValue.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    this.state = {
      timePickerVisible: false
    }
  }

  addEvent() {
    
  }

  eventStyleGetter(event, start, end, isSelected) {
    const style = {
      backgroundColor: '#00BCD4',
      borderRadius: '0px',
      opacity: 0.8,
      color: '#FFFFFF',
      border: '0px',
      display: 'block'
    };
    return {
      style: style
    }
  }

  setEventValue(value) {
    this.setState({
      event: value
    })
  }

  setTimeValue(value) {
    this.setState({
      time: value
    })
  }

  handleVisibilityChange(timePickerVisible) {
    this.setState({ timePickerVisible });
  }

  render() {
    const { actions } = this.props;
    const { timePickerVisible } = this.state;

    return (
      <div className="event-container">
        <Main
          actions={actions}
          eventStyleGetter={this.eventStyleGetter}
          addEvent={this.addEvent}
          setEventValue={this.setEventValue}
        />
      </div>
    )
  }
}

Events.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Events));
