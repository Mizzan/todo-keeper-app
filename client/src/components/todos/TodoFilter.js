import React, { useContext, useRef, useEffect } from 'react';
import TodoContext from '../../context/todo/todoContext';

const TodoFilter = () => {
  const todoContext = useContext(TodoContext);
  const text = useRef('');

  const { filterTodos, clearFilter, filtered } = todoContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterTodos(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        type="text"
        ref={text}
        placeholder="Filter Todos..."
        onChange={onChange}
      />
    </form>
  );
};

export default TodoFilter;
