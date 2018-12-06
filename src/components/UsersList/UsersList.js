import React from 'react';

import UserItem from './UserItem';

import styles from '../../assests/UserList.module.scss';


function UserList(props) {
  return (
    <div className={styles.container}>
      <h1>Users List</h1>
      {props.users.map(user => <UserItem key={user.id} user={user} />)}
      <div style={{textAlign: 'center'}}>
        <button className={styles['loadmore-button']} onClick={props.handleLoadMore}>
          {props.buttonLoading ? 'Loading...' : 'Load more'}
        </button>
      </div>
    </div>
  );
}

export default UserList;
