import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const HelmetWrapper = (props) => {
  const { children, title, metaDescription } = props;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      {children}
    </>
  );
};

HelmetWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  metaDescription: PropTypes.string.isRequired,
};

export default HelmetWrapper;
