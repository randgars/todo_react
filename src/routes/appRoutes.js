import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Tasks from '../containers/Tasks';
import Events from '../containers/Events';
import Notes from '../containers/Notes';

const AppRoutes = (props) => {
  return (
    <Switch key={props.location.key}>
      <Route exact path="/" location={props.location} component={Tasks} />
      <Route exact path="/events" location={props.location} component={Events} />
      <Route exact path="/notes" location={props.location} component={Notes} />
    </Switch>
  );
};

export default AppRoutes;
