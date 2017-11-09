import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { getEvents, deleteEvent, getEditableEvent } from '../actions/';
import Main from '../components/events/Events';

class Events extends Component {
  constructor(props) {
    super(props);
    this.selectEvent = this.selectEvent.bind(this);
    this.editEvent = this.editEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.state = {
      isEventSelected: false
    }
  }
  componentWillMount() {
    this.props.actions.getEvents();
  }

  selectEvent(event) {
    this.setState({
      event: event,
      isEventSelected: true
    })
  }

  editEvent() {
    this.props.actions.getEditableEvent(this.state.event.id)
    this.setState({
      isEventSelected: false
    })
  }

  deleteEvent() {
    this.props.actions.deleteEvent(this.state.event.id)
    this.setState({
      isEventSelected: false
    })
  }

  eventStyleGetter(event, start, end, isSelected) {
    const style = {
      backgroundColor: '#EF6C00',
      borderRadius: '3px',
      color: '#FFFFFF',
      border: '0px solid #C45800',
      display: 'block',
      zIndex: 0,
      fontSize: '1.2em',
      boxShadow: '-1px 1px 3px 0px rgba(0,0,0,0.75)'
    };
    if (isSelected) {
      style.backgroundColor = '#CA5B00'
    }
    return {
      style: style
    }
  }

  render() {
    const { events } = this.props;
    return (
      <div className="event-container">
        <Main
          eventStyleGetter={this.eventStyleGetter}
          events={events}
          selectEvent={this.selectEvent}
          editEvent={this.editEvent}
          deleteEvent={this.deleteEvent}
          isSelected={this.state.isEventSelected}
        />
      </div>
    )
  }
}

Events.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) {
  const props = {
    events: state.event.eventsArray
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    getEvents,
    deleteEvent,
    getEditableEvent
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Events));
