import React from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({ title, description, children }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
