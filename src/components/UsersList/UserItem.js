import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../assests/UserItem.module.scss';

import ProgressiveImage from 'react-progressive-image';

import placeHolderImage from '../../assests/images/user-placeholder.jpg';

function UserItem(props) {
  return (
    <div className={styles.item}>
      <div>
        <ProgressiveImage
          src={props.user['avatar_url']}
          placeholder={placeHolderImage}
        >
          {(src, loading) => <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt={props.user.login} />}
        </ProgressiveImage>
      </div>
      <div style={{ flexGrow: 1 }}>
        <h1>
          <Link title="login" to={`/users/${props.user.login}`} >{props.user.login}</Link>
          <br />
          <Link title="id" to={`/users/${props.user.login}`}>{props.user.id}</Link>
        </h1>
      </div>
    </div>
  );
}

export default UserItem;