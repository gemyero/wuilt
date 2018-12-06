import React, { Component } from 'react'

import Home from '../components/Home/Home';
import Header from '../components/Header/Header';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />        
      </div>
    )
  }
}
