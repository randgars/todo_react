import React from 'react';
import '../styles/app.scss';
import { Route } from 'react-router-dom';

import AppRoutes from '../routes/appRoutes';
import NavLink from './navLink';

import NavigationDrawer from 'react-md/lib/NavigationDrawers';

const navItems = [{
  label: 'Home',
  to: '/',
  exact: true,
  icon: 'inbox',
}, {
  label: 'Tasks',
  to: '/tasks',
  icon: 'star',
}];

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.getCurrentTitle = this.getCurrentTitle.bind(this);
    this.state = {
      toolbarTitle: this.getCurrentTitle()
    };
  }

  componentWillReceiveProps() {
    this.setState({
      toolbarTitle: this.getCurrentTitle()
    });
  }

  getCurrentTitle() {
    let lastSection = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    if (lastSection === '') {
      lastSection = 'Home';
    } else {
      lastSection = lastSection[0].toUpperCase() + lastSection.substring(1);
    }
    return lastSection;
  }

  render() {
    return (
      <Route render={({ location }) => (
        <NavigationDrawer
          drawerTitle="ToDo"
          toolbarTitle={this.state.toolbarTitle}
          navItems={navItems.map((props, index) => {
            return (
              <NavLink {...props} key={index} />
            );
          })}
          mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
          tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
          desktopDrawerType={NavigationDrawer.DrawerTypes.FULL_HEIGHT}
        >
          <AppRoutes location={location} />
        </NavigationDrawer>
      )}
    />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;