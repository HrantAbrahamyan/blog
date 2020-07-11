import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';
import { NotFoundPage } from '../../pages';
import { paths, config } from '../../routes';

const Routes = () => {
  const renderRoutes = () => {
    return config.map((route) => {
      const { id, isPrivate, ...routeProps } = route;

      return isPrivate ? (
        <PrivateRoute key={id} {...routeProps} />
      ) : (
        <AuthRoute key={id} {...routeProps} />
      );
    });
  };

  return (
    <Switch>
      {renderRoutes()}
      <Route path={paths.notFound} component={NotFoundPage} />
      <Redirect to={paths.notFound} />
    </Switch>
  );
};

export default Routes;
