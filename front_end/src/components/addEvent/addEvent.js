import React from 'react';
import '../../styles/addEvent/add-event.scss';

import { TextField, TimePicker, DatePicker, Switch, Button } from 'react-md';

const addEvent = (props) => {
  const {
    setEvent,
    setEventValue,
    setStartEventDate,
    setEndEventDate,
    setStartEventTime,
    setEndEventTime,
    setAllDay,
    allDay,
    errorEvent,
    errorDate,
    errorStartTime,
    errorEndTime
  } = props;
  return (
    <div className="add-event-component">
      <div className="add-event-component__block">
        <TextField
          id="event-value"
          label="Event"
          lineDirection="center"
          onChange={setEventValue}
          required
          error={errorEvent}
        />
      </div>
      <Switch
        id="all-day-switch"
        type="switch"
        label="All day"
        name="allDay"
        onChange={setAllDay}
        className="add-event-component__toggle"
      />
      <div className="add-event-component__block">
        <DatePicker
          id="event-start-date"
          label="Select start date"
          onChange={setStartEventDate}
          required
          error={errorDate}
        />
        <DatePicker
          id="event-end-date"
          label="Select end date"
          onChange={setEndEventDate}
        />
      </div>
      <div className="add-event-component__block">
        <TimePicker
          id="event-start-time"
          label="Select start time"
          onChange={setStartEventTime}
          disabled={allDay}
          required
          error={errorStartTime}
        />
        <TimePicker
          id="event-end-time"
          label="Select end time"
          onChange={setEndEventTime}
          disabled={allDay}
          required
          error={errorEndTime}
        />
      </div>
      <div className="add-event-component__block add-event-component__button">
        <Button
          flat
          secondary
          swapTheming
          onClick={setEvent}
        >
          Save event
        </Button>
      </div>
    </div>
  );
};

export default addEvent;
