import React, { Component } from 'react'

import styles from '../../assests/About.module.scss';
export default class About extends Component {
  render() {
    return (
      <div className={styles.about}>
        <p>My name is Mohamed Gamal. I am a full stack Javascript developer and I am interested in open source technologies.</p>
        <p><i className="fas fa-at" /> mohamedgr91@gmail.com</p>
        <p><i className="fas fa-phone" /> +201091492532</p>
      </div>
    )
  }
}
