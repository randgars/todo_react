import React, {
  Component
} from 'react';
import '../../../styles/lists/list/list.scss';

import { Paper } from 'react-md';

class ListComponent extends Component {

  render() {
    return (
      <Paper
        zDepth={2}
        raiseOnHover
        className="list-component"
      >
        Lol
      </Paper>
    );
  }
}

ListComponent.displayName = 'ListComponent';
ListComponent.propTypes = {};
ListComponent.defaultProps = {};

export default ListComponent;
