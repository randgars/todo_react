import React, {
  Component
} from 'react';
import '../../styles/home/home.scss';

class HomeComponent extends Component {

  render() {
    return (
      <div className="home-component">
        home
      </div>
    );
  }
}

HomeComponent.displayName = 'HomeComponent';
HomeComponent.propTypes = {};
HomeComponent.defaultProps = {};

export default HomeComponent;