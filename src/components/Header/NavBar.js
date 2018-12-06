import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../../assests/NavBar.module.scss';

function NavBar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li><NavLink activeClassName={styles.selected} to="/" exact={true}>Home</NavLink></li>
          <li><NavLink activeClassName={styles.selected} to="/users">Users</NavLink></li>
          <li><NavLink activeClassName={styles.selected} to="/about" exact={true}>About</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;