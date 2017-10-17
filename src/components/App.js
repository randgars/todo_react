import React, {
  Component
} from 'react';
import '../styles/app.scss';
import { Route } from 'react-router-dom';

import AppRoutes from '../routes/appRoutes';
import NavLink from './navLink';

import NavigationDrawer from 'react-md/lib/NavigationDrawers';

const navItems = [{
  label: 'Home',
  to: '/',
  exact: true,
  icon: 'home',
}, {
  label: 'Tasks',
  to: '/tasks',
  icon: 'playlist_add_check',
}, {
  label: 'Notes',
  to: '/notes',
  icon: 'format_list_numbered',
}];

class AppComponent extends Component {
  render() {
    return (
      <Route render={({ location }) => (
        <NavigationDrawer
          drawerTitle="ToDo"
          toolbarTitle={this.props.toolbarTitle}
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
      )}/>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;