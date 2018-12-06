import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../assests/UserItem.module.scss';

function UserItem(props) {
  return (
    <div className={styles.item}>
      <div>
        <img src={props.user['avatar_url']} alt={props.user.login} />
      </div>
      <div style={{ flexGrow: 1 }}>
        <h1>
          <Link title="login" to={`/users/${props.user.id}`} >{props.user.login}</Link>
          <br />
          <Link title="id" to={`/users/${props.user.id}`}>{props.user.id}</Link>
        </h1>
      </div>
    </div>
  );
}

export default UserItem;