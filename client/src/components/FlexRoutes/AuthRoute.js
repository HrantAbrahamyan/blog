import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { paths } from '../../routes';
import { selectToken } from '../../ducks/author';

const AuthRoute = ({ component: Component, ...rest }) => {
  const token = useSelector(selectToken);

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Redirect to={paths.home} /> : <Component {...props} />
      }
    />
  );
};

AuthRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default AuthRoute;
