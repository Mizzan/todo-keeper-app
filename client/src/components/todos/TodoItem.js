import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TodoContext from '../../context/todo/todoContext';

const TodoItem = ({ todo }) => {
  const todoContext = useContext(TodoContext);
  const { deleteTodo, setCurrent, clearCurrent } = todoContext;

  const { _id, title, description, type } = todo;

  const onDelete = () => {
    deleteTodo(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-secondary text-left">
        {title}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {description && (
          <li>
            <i className="far fa-check-circle"></i> {description}
          </li>
        )}
      </ul>
      <p className="">
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(todo)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
