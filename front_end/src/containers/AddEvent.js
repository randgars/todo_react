import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { setEvent } from '../actions/';
import Main from '../components/addEvent/addEvent';

import moment from 'moment';

class AddEvent extends Component {
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
      allDay: false,
      errorEvent: false,
      errorDate: false,
      errorStartTime: false,
      errorEndTime: false
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
    if (value) {
      this.setState({
        errorStartTime: false,
        errorEndTime: false
      })
    }
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
      title: this.state.event,
      start: startDate,
      end: endDate,
      allDay: this.state.allDay
    }
    this.props.actions.setEvent(event);
  }

  render() {
    const {
      allDay,
      errorEvent,
      errorDate,
      errorStartTime,
      errorEndTime
    } = this.state
    return (
      <div className="event-container">
        <Main
          setEvent={this.setEvent}
          setEventValue={this.setEventValue}
          setStartEventDate={this.setStartEventDate}
          setEndEventDate={this.setEndEventDate}
          setStartEventTime={this.setStartEventTime}
          setEndEventTime={this.setEndEventTime}
          setAllDay={this.setAllDay}
          allDay={allDay}
          errorEvent={errorEvent}
          errorDate={errorDate}
          errorStartTime={errorStartTime}
          errorEndTime={errorEndTime}
        />
      </div>
    )
  }
}

AddEvent.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    setEvent
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddEvent));
