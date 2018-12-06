import React from 'react'

function UserInfo(props) {
  return (
    <div>
      <h1>User Info + {props.match.params.userId}</h1>
    </div>
  );
}

export default UserInfo;