import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { addEvent } from '../actions/';
import Main from '../components/events/Events';

class Events extends Component {
  constructor(props) {
    super(props);
    this.addEvent = this.addEvent.bind(this)
    this.setEventValue = this.setEventValue.bind(this)
    this.setEventDate = this.setEventDate.bind(this)
    this.setEventTime = this.setEventTime.bind(this)
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

  setEventTime(value) {
    this.setState({
      time: value
    })
  }

  setEventDate(value) {
    this.setState({
      date: value
    })
  }

  addEvent() {
    const event = {
      event: this.state.event,
      time: this.state.time,
      date: this.state.date
    }
    this.props.actions.addEvent(event);
  }

  render() {
    const { actions } = this.props;

    return (
      <div className="event-container">
        <Main
          actions={actions}
          eventStyleGetter={this.eventStyleGetter}
          addEvent={this.addEvent}
          setEventValue={this.setEventValue}
          setEventDate={this.setEventDate}
          setEventTime={this.setEventTime}
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
  const actions = {
    addEvent
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Events));
