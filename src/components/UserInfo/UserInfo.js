import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import moment from 'moment';

import styles from '../../assests/UserInfo.module.scss';
import placeHolderImage from '../../assests/images/user-placeholder.jpg';

import { fetchOneUser } from '../../utils/api/users-api';
import Loading from '../Loading/Loading';

class UserInfo extends React.Component {
  state = {
    user: { login: null },
    isLoading: true,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.login !== prevState.user.login) {
      return {
        ...prevState,
        isLoading: true
      };
    }
    return prevState;
  }

  componentDidMount = () => {
    fetchOneUser(this.props.match.params.login)
      .then(user => this.setState({
        user,
        isLoading: false
      }));
  }

  componentDidUpdate = () => {
    if (this.props.match.params.login !== this.state.user.login) {
      fetchOneUser(this.props.match.params.login)
        .then(user => this.setState({
          user,
          isLoading: false
        }));
    }
  }

  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        {
          this.state.isLoading
            ? <Loading />
            : (
              <>
                <h1 className={styles.title}>User Info</h1>
                <div className={styles['user-info-container']}>
                  <div className={styles['user-info']}>
                    <p><i className="fas fa-id-card" /> {this.state.user.id || 'N/A'}</p>
                    <p><i className="fas fa-user" /> {this.state.user.name || 'N/A'}</p>
                    <p><i className="fas fa-at" /> {this.state.user.email || 'N/A'}</p>
                    <p><i className="far fa-calendar-alt" /> {moment(this.state.user['created_at']).format('LLL') || 'N/A'}</p>
                  </div>
                  <div className={styles['user-image']}>
                    <ProgressiveImage
                      src={this.state.user['avatar_url']}
                      placeholder={placeHolderImage}
                    >
                      {(src, loading) => <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt={this.state.user.login} />}
                    </ProgressiveImage>
                  </div>
                </div>
              </>
            )
        }
      </div>
    );
  }
}

export default UserInfo;