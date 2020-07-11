import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import { paths } from '../../routes';
import { login } from '../../ducks/author';
import { AuthLayout } from '../../layouts';
import { loginFields, validateLoginForm } from '../../utils';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loginActions = {
    primary: {
      title: 'Log In',
    },
    secondary: {
      title: 'Register',
      component: Link,
      to: paths.register,
    },
  };

  const loginHandler = async ({ email, password }) => {
    await dispatch(login(email, password));
    history.push(paths.home);
  };

  return (
    <AuthLayout
      formName="login"
      fields={loginFields}
      actions={loginActions}
      onFormSubmit={loginHandler}
      validateFunc={validateLoginForm}
    />
  );
};

export default LoginContainer;
