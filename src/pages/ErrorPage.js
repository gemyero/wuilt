import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Header from '../components/Header/Header';

function ErrorPage() {
  return (
    <div>
      <Helmet>
        <title>Error Page</title>
      </Helmet>
      <Header />
      <div>
        <h1>The page not found or may be moved elsewhere!</h1>
        <h1>
          <Link to="/">Go Home</Link>
        </h1>
      </div>
    </div>
  );
}

export default ErrorPage;