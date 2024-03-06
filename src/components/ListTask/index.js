import PropTypes from 'prop-types';
import Task from './Task';

export default function List({ task = [''] }) {
  return (
    <aside>
      <ul>
        {task.map(({ title, time, id }) => (
          <Task
            key={id}
            title={title}
            time={time}
          />
        ))}
      </ul>
    </aside>
  );
}

List.propTypes = {
  task: PropTypes.string.isRequired,
};
