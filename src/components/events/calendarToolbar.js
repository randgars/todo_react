import React from 'react';
import '../../styles/home/calendar-toolbar.scss';

import { Button } from 'react-md';

const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.onNavigate('PREV');
  };

  const goToNext = () => {
    toolbar.onNavigate('NEXT');
  };

  const goToCurrent = () => {
    toolbar.onNavigate('TODAY');
  };

  const goToMonthView = () => {
    toolbar.onViewChange('month');
  }

  const goToWeekView = () => {
    toolbar.onViewChange('week');
  }

  const goToWorkWeekView = () => {
    toolbar.onViewChange('work_week');
  }

  const goToDayView = () => {
    toolbar.onViewChange('day');
  }

  const viewButtons = [
    {
      title: 'month',
      onClick: goToMonthView
    },
    {
      title: 'week',
      onClick: goToWeekView
    },
    {
      title: 'work week',
      onClick: goToWorkWeekView
    },
    {
      title: 'day',
      onClick: goToDayView
    }
  ];

  const actionButtons = [
    {
      title: 'chevron_left',
      onClick: goToBack,
      icon: true
    },
    {
      title: 'Today',
      onClick: goToCurrent,
      flat: true,
      primary: true
    },
    {
      title: 'chevron_right',
      onClick: goToNext,
      icon: true
    }
  ];

  return (
    <div className="calendar-toolbar">
      <div>
        {
          actionButtons.map((item, index) => (
            <Button
              flat={item.flat}
              primary={item.primary}
              key={index}
              onClick={item.onClick}
              icon={item.icon}
            >
              {item.title}
            </Button>
          ))
        }
      </div>
      <div className="calendar-toolbar__date-label">{toolbar.label}</div>
      <div>
        {
          viewButtons.map((item, index) => (
            <Button
              flat
              primary
              key={index}
              onClick={item.onClick}
            >
              {item.title}
            </Button>
          ))
        }
      </div>
    </div>
  );
};

export default CustomToolbar;
