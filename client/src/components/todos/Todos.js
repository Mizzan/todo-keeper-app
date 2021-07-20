import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TodoContext from '../../context/todo/todoContext';
import TodoItem from './TodoItem';
import Spinner from '../layout/Spinner';

const Todos = () => {
  const todoContext = useContext(TodoContext);

  const { todos, filtered, getTodo, loading } = todoContext;

  useEffect(() => {
    getTodo();
    // eslint-disable-next-line
  }, []);

  if (todos !== null && todos.length === 0 && !loading) {
    return <h3>Please add todos first.</h3>;
  }

  return (
    <>
      {todos !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((todo) => (
                <CSSTransition key={todo._id} timeout={500} classNames="item">
                  <TodoItem todo={todo} />
                </CSSTransition>
              ))
            : todos.map((todo) => (
                <CSSTransition key={todo._id} timeout={500} classNames="item">
                  <TodoItem todo={todo} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Todos;
