import React from 'react';
import '../../styles/addEvent/add-event.scss';

import { TextField, TimePicker, DatePicker, Switch, Button } from 'react-md';

const editEvent = (props) => {
  const {
    editableEvent,
    allDay,
    setEventValue,
    setStartEventDate,
    setEndEventDate,
    setStartEventTime,
    setEndEventTime,
    setAllDay,
    errorEvent,
    errorDate,
    errorStartTime,
    errorEndTime,
    setEvent
  } = props;
  return (
    <div className="add-event-component">
      <div className="add-event-component__block">
        <TextField
          id="event-value"
          label="Event"
          lineDirection="center"
          required
          error={errorEvent}
          defaultValue={editableEvent.title}
          onChange={setEventValue}
        />
      </div>
      <Switch
        id="all-day-switch"
        type="switch"
        label="All day"
        name="allDay"
        className="add-event-component__toggle"
        defaultChecked={editableEvent.allDay}
        onChange={setAllDay}
      />
      <div className="add-event-component__block">
        <DatePicker
          id="event-start-date"
          label="Select start date"
          required
          error={errorDate}
          defaultValue={editableEvent.startDate}
          onChange={setStartEventDate}
        />
        <DatePicker
          id="event-end-date"
          label="Select end date"
          defaultValue={editableEvent.endDate}
          onChange={setEndEventDate}
        />
      </div>
      <div className="add-event-component__block">
        <TimePicker
          id="event-start-time"
          label="Select start time"
          disabled={allDay}
          required
          error={errorStartTime}
          onChange={setStartEventTime}
        />
        <TimePicker
          id="event-end-time"
          label="Select end time"
          disabled={allDay}
          required
          error={errorEndTime}
          onChange={setEndEventTime}
        />
      </div>
      <div className="add-event-component__block add-event-component__button">
        <Button
          flat
          secondary
          swapTheming
          onClick={setEvent}
        >
          Save changes
        </Button>
      </div>
    </div>
  );
};

export default editEvent;
