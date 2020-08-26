import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

export const query = graphql`
  query {
    about: file(relativePath: {eq: "hero.jpg"}) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
        original {
          height
          src
          width
        }
      }
    }
  }
`;

const About = ({location, data}) => {
  return (
    <>
      <Layout>
        <SEO
            pagetitle="About"
            pagedesc="This is About Page."
            pagepath={ location.pathname }
            pageimg={ data.about.childImageSharp.original.src }
            pageimgw={ data.about.childImageSharp.original.width }
            pageimgh={ data.about.childImageSharp.original.height }
        />
        <div>About</div>
        <figure>
          <Image fluid={ data.about.childImageSharp.fluid } alt="" />
        </figure>
        <Link to="/">Top</Link>
      </Layout>
    </>
  );
}

export default About;