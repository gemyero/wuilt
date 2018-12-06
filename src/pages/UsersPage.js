import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { fetchUsers, fetchMoreUsers } from '../utils/api/users-api';

import UsersList from '../components/UsersList/UsersList';
import UserInfo from '../components/UserInfo/UserInfo';
import Header from '../components/Header/Header';
import Loading from '../components/Loading/Loading';

class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  componentDidMount = () => {
    fetchUsers().then(users => {
      this.setState(state => ({
        ...state,
        users: [
          ...state.users,
          ...users
        ],
        isLoading: false
      }), () => {
        this.props.history.push(`/users/${this.state.users[0].id}`);
      });
    });
  }

  handleLoadMore() {
    this.setState({
      isLoading: true,
    })
    fetchMoreUsers(5, this.state.users[this.state.users.length - 1].id)
      .then(users => {
        this.setState(state => ({
          ...state,
          users: [
            ...state.users,
            ...users
          ],
          isLoading: false,
        }));
      });
  }

  render() {
    return (
      <div>
        <Header />
        {
          this.state.isLoading
            ? <Loading />
            : (
              <div style={{ display: 'flex', marginTop: '1rem' }}>
                <UsersList users={this.state.users} handleLoadMore={this.handleLoadMore} />
                <Route path={`${this.props.match.path}/:userId`} component={UserInfo} exact={true} />
              </div>
            )
        }
      </div>
    );
  }
}

export default UsersPage;