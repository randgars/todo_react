import React, {
  Component
} from 'react';
import '../../styles/lists/lists.scss';

import List from './list/List';
import { Paper, Button } from 'react-md';

class ListsComponent extends Component {
  constructor(props) {
    super(props);
    this.addList = this.addList.bind(this);
    this.state = {
      listArray: []
    }
  }
  addList() {
    const randKey = Math.random().toString(36);
    this.setState({
      listArray: [...this.state.listArray, <List key={randKey} uniqueKey={randKey}/>]
    });
  }
  render() {
    return (
      <div className="lists-component">
        <Paper
          zDepth={0}
          raiseOnHover
          component={Button}
          className="add-button"
          onClick={this.addList}
        >
          <div className="test">
            <div className="cross"></div>
          </div>
        </Paper>
        {
          this.state.listArray
        }
      </div>
    );
  }
}

ListsComponent.displayName = 'ListsComponent';
ListsComponent.propTypes = {};
ListsComponent.defaultProps = {};

export default ListsComponent;
