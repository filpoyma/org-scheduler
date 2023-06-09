import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from './elb-logo.svg';
import './Header.css';
import {logout} from "../../store/auth/actions"
import {useDispatch} from "react-redux"

function Header({ isAuth}) {
  const dispatch = useDispatch();
  const logOutHandler = (e) => dispatch(logout(e));
  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          <Link to="/">
            <img className="logo" src={logo} alt="" />
            <div className="brand-logo">
              Groups Scheduler
            </div>
          </Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <div id="nav-mobile" className="right hide-on-med-and-down">
            <Link to="/">Groups(Home)</Link>
            {
              isAuth ? (
                <>
                  <Link to="/groups/new">New Group</Link>
                  <Link to="/groups/schema">Schema</Link>
                  <Link to="/students">Students</Link>
                  <Link to="/students/new">New Students</Link>
                  <Link to="/" onClick={logOutHandler}>Logout</Link>
                </>
              ) : <Link to="/login">Login</Link>
            }
          </div>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

export default Header;
