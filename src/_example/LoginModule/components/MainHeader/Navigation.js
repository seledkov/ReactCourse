import React, { useContext } from 'react';
import AuthContext from '../store/auth-context';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  const ctdata = useContext(AuthContext);
  return (
    // <AuthContext.Consumer>
    //   {(ctdata) => {
    // return (
    <nav className={classes.nav}>
      <ul>
        {ctdata.isLoggedIn && (
          <li>
            <a href='/'>Users</a>
          </li>
        )}
        {ctdata.isLoggedIn && (
          <li>
            <a href='/'>Admin</a>
          </li>
        )}
        {ctdata.isLoggedIn && (
          <li>
            <button onClick={ctdata.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    // );
    //   }}
    // </AuthContext.Consumer>
  );
};

export default Navigation;
