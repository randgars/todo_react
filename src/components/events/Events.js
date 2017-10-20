import React, {
  Component
} from 'react';
import '../../styles/events/events.scss';

import moment from 'moment';
import { Button, TextField, TimePicker, DatePicker } from 'react-md';

import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import events from '../../sources/events';
import Toolbar from './calendarToolbar';

const views = ['month', 'week', 'work_week', 'day'];

BigCalendar.momentLocalizer(moment);

class EventsComponent extends Component {
  render() {
    const { addEvent, eventStyleGetter, setEventValue } = this.props;
    return (
      <div className="events-component">
        <div className="events-component__cpanel">
          <TextField
            id="event-input"
            label="Event"
            lineDirection="center"
            onChange={setEventValue}
            className="md-cell"
          />
          <DatePicker
            id="appointment-date-auto"
            label="Select an appointment date"
            className="md-cell"
          />
          <TimePicker
            id="time-picker-controlled"
            label="Select time"
            className="md-cell"
          />
          <Button
            primary
            swapTheming
            icon
            onClick={addEvent}
          >
            add
          </Button>
        </div>
        <div className="events-component__container">
          <BigCalendar
            {...this.props}
            views={views}
            defaultView="day"
            step={60}
            events={events}
            defaultDate={new Date()}
            eventPropGetter={eventStyleGetter}
            titleAccessor="title"
            components={{
              toolbar: Toolbar
            }}
          />
        </div>
      </div>
    );
  }
}

EventsComponent.displayName = 'EventsComponent';
EventsComponent.propTypes = {};
EventsComponent.defaultProps = {};

export default EventsComponent;
