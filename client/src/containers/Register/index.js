import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { paths } from '../../routes';
import { AuthLayout } from '../../layouts';
import { register } from '../../ducks/author';
import { registerFields, validateRegisterForm } from '../../utils';

const RegisterContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const registerActions = {
    primary: {
      title: 'Register',
    },
    secondary: {
      title: 'Log In',
      component: Link,
      to: paths.login,
    },
  };

  const registerHandler = async ({ username, password, email }) => {
    await dispatch(register(username, password, email));
    history.push(paths.login);
  };

  return (
    <AuthLayout
      formName="register"
      fields={registerFields}
      actions={registerActions}
      onFormSubmit={registerHandler}
      validateFunc={validateRegisterForm}
    />
  );
};

export default RegisterContainer;
