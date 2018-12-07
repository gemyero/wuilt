import React from 'react';
import axios from 'axios';

import styles from '../../assests/Home.module.scss';

import Loading from '../Loading/Loading';

class Home extends React.Component {
  state = {
    isLoading: true,
    zen: ''
  }

  componentDidMount = () => {
    axios.get('https://api.github.com/zen').then(result => this.setState({
      isLoading: false,
      zen: result.data
    }));
  }

  render() {
    return (
      <div className={styles.home}>
        {
          this.state.isLoading
            ? <Loading />
            : <h1>{this.state.zen}</h1>
        }
      </div>
    );
  }
}

export default Home;