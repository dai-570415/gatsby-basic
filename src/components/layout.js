import React from 'react';
import PropTypes from 'prop-types';

import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <header>header</header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
