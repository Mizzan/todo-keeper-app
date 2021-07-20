import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import TodoContext from '../../context/todo/todoContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const todoContext = useContext(TodoContext);

  // const { isAuthenticated, logout, user } = authContext;
  const { isAuthenticated, logout, user } = authContext;
  const { clearTodos } = todoContext;

  const onLogout = () => {
    logout();
    clearTodos();
  };

  const authLinks = (
    <>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>

      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Todo Keeper',
  icon: 'fas fa-clipboard-check',
};

export default Navbar;
