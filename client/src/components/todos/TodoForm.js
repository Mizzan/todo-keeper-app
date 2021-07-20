import React, { useContext, useEffect, useState } from 'react';
import TodoContext from '../../context/todo/todoContext';

const TodoForm = () => {
  const todoContext = useContext(TodoContext);
  const { addTodo, updateTodo, clearCurrent, current } = todoContext;

  useEffect(() => {
    if (current !== null) {
      setTodo(current);
    } else {
      setTodo({
        title: '',
        description: '',
        type: 'personal',
      });
    }
  }, [todoContext, current]);

  const [todo, setTodo] = useState({
    title: '',
    description: '',
    type: 'personal',
  });

  const { title, description, type } = todo;

  const onChange = (e) => {
    return setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addTodo(todo);
    } else {
      updateTodo(todo);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? 'Edit Todo List' : 'Add Your Todo List'}
      </h2>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={description}
        onChange={onChange}
      />
      <h5>Todo Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === 'personal'}
        onChange={onChange}
      />
      Personal{' '}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === 'professional'}
        onChange={onChange}
      />
      Professional
      <div>
        <input
          type="submit"
          value={current ? 'Update Contact' : 'Add Todo'}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default TodoForm;
