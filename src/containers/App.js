import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {} from '../actions/';
import Main from '../components/App';

class App extends Component {
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
    const { actions } = this.props;
    return <Main actions={actions} toolbarTitle={this.state.toolbarTitle}/>;
  }
}

App.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));