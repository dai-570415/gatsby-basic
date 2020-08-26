import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const Index = () => {
  return (
    <>
      <Layout>
        <SEO pagetitle="Top" />
        <div>Hello world!</div>
        <Link to="/about">About</Link>
      </Layout>
    </>
  );
}

export default Index;