import React from 'react';
import { Helmet } from 'react-helmet';

import Home from '../components/Home/Home';
import Header from '../components/Header/Header';

function HomePage() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Header />
        <Home />
      </div>
    )
};

export default HomePage;
