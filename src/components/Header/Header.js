import React from 'react';

import styles from '../../assests/Header.module.scss';


import NavBar from './NavBar';

function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles.headerTitle}>
        <h1>
          <i className="fab fa-github" /> Github Users
        </h1>
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
}

export default Header;