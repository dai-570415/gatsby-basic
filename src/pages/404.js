import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = ({location}) => {
  return (
    <>
      <Layout>
        <SEO
          pagetitle="Not Found"
          pagepath={ location.pathname }
        />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    </>
  );
}

export default NotFoundPage;
