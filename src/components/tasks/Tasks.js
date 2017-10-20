import React, {
  Component
} from 'react';
import '../../styles/tasks/tasks.scss';

class TasksComponent extends Component {
  render() {
    return (
      <div className="tasks-component">
        tasks
      </div>
    );
  }
}

TasksComponent.displayName = 'TasksComponent';
TasksComponent.propTypes = {};
TasksComponent.defaultProps = {};

export default TasksComponent;