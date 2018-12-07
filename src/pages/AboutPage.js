import React from 'react'
import { Helmet } from 'react-helmet';

import About from '../components/About/About';
import Header from '../components/Header/Header';

function AboutPage() {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Header />
      <About />
    </div>
  );
}

export default AboutPage;