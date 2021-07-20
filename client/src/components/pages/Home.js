import React, { useContext, useEffect } from 'react';
import Todos from '../todos/Todos';
import TodoForm from '../todos/TodoForm';
import TodoFilter from '../todos/TodoFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
      <div>
        <TodoForm />
      </div>
      <div>
        <TodoFilter />
        <Todos />
      </div>
    </div>
  );
};

export default Home;
