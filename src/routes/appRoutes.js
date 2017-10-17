import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Tasks from '../containers/Tasks';
import Notes from '../containers/Notes';

const AppRoutes = (props) => {
  return (
    <Switch key={props.location.key}>
      <Route exact path="/" location={props.location} component={Home} />
      <Route exact path="/tasks" location={props.location} component={Tasks} />
      <Route exact path="/notes" location={props.location} component={Notes} />
    </Switch>
  );
};

export default AppRoutes;
