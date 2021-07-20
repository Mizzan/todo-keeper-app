import React, { useReducer } from 'react';
import axios from 'axios';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TODO,
  FILTER_TODO,
  CLEAR_TODOS,
  CLEAR_FILTER,
  TODO_ERROR,
} from '../types';

const TodoState = (props) => {
  const initialState = {
    todos: null,
    current: null,
    filtered: null,
    error: null,
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // GET TODO
  const getTodo = async () => {
    try {
      const res = await axios.get('/api/todos');
      dispatch({ type: GET_TODOS, payload: res.data });
    } catch (err) {
      dispatch({
        type: TODO_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Add TODO
  const addTodo = async (todo) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/todos', todo, config);
      dispatch({ type: ADD_TODO, payload: res.data });
    } catch (err) {
      dispatch({
        type: TODO_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Delete TODO
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      dispatch({ type: DELETE_TODO, payload: id });
    } catch (err) {
      dispatch({
        type: TODO_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Update Todo
  const updateTodo = async (todo) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.put(`/api/todos/${todo._id}`, todo, config);
      dispatch({ type: UPDATE_TODO, payload: res.data });
    } catch (err) {
      dispatch({
        type: TODO_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Clear todos

  const clearTodos = () => {
    dispatch({ type: CLEAR_TODOS });
  };

  // Set Current TODO
  const setCurrent = (todo) => {
    dispatch({ type: SET_CURRENT, payload: todo });
  };

  // Clear Current Todo
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Todo
  const filterTodos = (text) => {
    dispatch({ type: FILTER_TODO, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        getTodo,
        addTodo,
        deleteTodo,
        setCurrent,
        clearCurrent,
        updateTodo,
        filterTodos,
        clearFilter,
        clearTodos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
