import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { editEvent } from '../actions/';
import Main from '../components/editEvent/editEvent';

import history from '../sources/history';
import moment from 'moment';

class EditEvent extends Component {
  constructor(props) {
    super(props);
    this.setEvent = this.setEvent.bind(this)
    this.setEventValue = this.setEventValue.bind(this)
    this.setStartEventDate = this.setStartEventDate.bind(this)
    this.setEndEventDate = this.setEndEventDate.bind(this)
    this.setStartEventTime = this.setStartEventTime.bind(this)
    this.setEndEventTime = this.setEndEventTime.bind(this)
    this.setAllDay = this.setAllDay.bind(this)
    this.state = {
      editableEvent: this.props.editableEvent,
      event: this.props.editableEvent ? this.props.editableEvent.title : null,
      startDate: this.props.editableEvent ? this.props.editableEvent.startDate : null,
      endDate: this.props.editableEvent ? this.props.editableEvent.endDate : null,
      allDay: this.props.editableEvent ? this.props.seditableEvent.allDay : null,
      errorEvent: false,
      errorDate: false,
      errorStartTime: false,
      errorEndTime: false
    }
  }

  componentDidMount() {
    if (!this.props.editableEvent) {
      history.push('/events');
    }
  }

  setEventValue(value) {
    this.setState({
      event: value,
      errorEvent: false
    })
  }

  setStartEventDate(value) {
    this.setState({
      startDate: value,
      errorDate: false
    })
  }

  setEndEventDate(value) {
    this.setState({
      endDate: value
    })
  }

  setStartEventTime(value) {
    this.setState({
      startTime: value,
      errorStartTime: false
    })
  }

  setEndEventTime(value) {
    this.setState({
      endTime: value,
      errorEndTime: false
    })
  }

  setAllDay(value) {
    this.setState({
      allDay: value
    })
  }

  setEvent() {
    let startDate;
    let endDate;
    if (!this.state.event) {
      this.setState({
        errorEvent: true
      })
      return;
    }
    if (!this.state.startDate) {
      this.setState({
        errorDate: true
      })
      return;
    }
    if (this.state.allDay) {
      startDate = moment(`${this.state.startDate}`, 'MM/DD/YYYY').format();
      if (!this.state.endDate) {
        endDate = startDate
      } else {
        endDate = moment(`${this.state.endDate}`, 'MM/DD/YYYY').format();
      }
    } else {
      if (!this.state.startTime) {
        this.setState({
          errorStartTime: true
        })
        return;
      }
      if (!this.state.endTime) {
        this.setState({
          errorEndTime: true
        })
        return;
      }
      startDate = moment(`${this.state.startDate}, ${this.state.startTime}`, 'MM/DD/YYYY, h:mm a').format();
      if (!this.state.endDate) {
        endDate = moment(`${this.state.startDate}, ${this.state.endTime}`, 'MM/DD/YYYY, h:mm a').format();
      } else {
        endDate = moment(`${this.state.endDate}, ${this.state.endTime}`, 'MM/DD/YYYY, h:mm a').format();
      }
    }
    const event = {
      id: this.props.editableEvent.id,
      title: this.state.event,
      start: startDate,
      end: endDate,
      allDay: this.state.allDay
    }
    this.props.actions.editEvent(event);
  }

  render() {
    if (this.state.editableEvent) {
      const {
        editableEvent,
        allDay,
        errorEvent,
        errorDate,
        errorStartTime,
        errorEndTime
      } = this.state
      return (
        <div className="event-container">
          <Main
            editableEvent={editableEvent}
            allDay={allDay}
            errorEvent={errorEvent}
            errorDate={errorDate}
            errorStartTime={errorStartTime}
            errorEndTime={errorEndTime}
            setEventValue={this.setEventValue}
            setStartEventDate={this.setStartEventDate}
            setEndEventDate={this.setEndEventDate}
            setStartEventTime={this.setStartEventTime}
            setEndEventTime={this.setEndEventTime}
            setAllDay={this.setAllDay}
            setEvent={this.setEvent}
          />
        </div>
      )
    } else {
      return null;
    }
  }
}

EditEvent.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) {
  const props = {
    editableEvent: state.event.editableEvent
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    editEvent
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditEvent));
