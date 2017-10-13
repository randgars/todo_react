import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Tasks from '../containers/Tasks';
import Lists from '../containers/Lists';

const AppRoutes = (props) => {
  return (
    <Switch key={props.location.key}>
      <Route exact path="/" location={props.location} component={Home} />
      <Route exact path="/tasks" location={props.location} component={Tasks} />
      <Route exact path="/lists" location={props.location} component={Lists} />
    </Switch>
  );
};

export default AppRoutes;
