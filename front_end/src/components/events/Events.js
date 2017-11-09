import React, {
  Component
} from 'react';
import '../../styles/events/events.scss';
import { Link } from 'react-router-dom'
import moment from 'moment';
import { Button } from 'react-md';

import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import Toolbar from './calendarToolbar';

const views = ['month', 'week', 'work_week', 'day'];

BigCalendar.momentLocalizer(moment);

class EventsComponent extends Component {
  render() {
    const {
      eventStyleGetter,
      events,
      selectEvent,
      editEvent,
      deleteEvent,
      isSelected
    } = this.props;
    return (
      <div className="events-component">
        <div className="events-component__cpanel">
          <Button
            to={'/add_event'}
            flat
            secondary
            swapTheming
            component={Link}
            iconChildren="add"
          >
            Add event
          </Button>
          {
            isSelected &&
            <div>
              <Button
                flat
                secondary
                iconChildren="edit"
                onClick={editEvent}
                to={'/edit_event'}
                component={Link}
              >
                edit
              </Button>
              <Button
                flat
                secondary
                iconChildren="delete"
                onClick={deleteEvent}
              >
                delete
              </Button>
            </div>
          }
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
            onSelectEvent={selectEvent}
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
