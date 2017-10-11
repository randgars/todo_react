import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import {} from '../actions/';
import Main from '../components/home/Home';

class Home extends Component {
  render() {
    const { actions } = this.props;
    return <Main actions={actions} />;
  }
}

Home.propTypes = {
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
