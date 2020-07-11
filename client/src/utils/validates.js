import { validateForm } from 'redux-form-validators';
import {
  textValidator,
  emailValidator,
  titleValidator,
  passwordValidator,
  usernameValidator,
} from './validate';

export const validateLoginForm = validateForm({
  email: emailValidator,
  password: passwordValidator,
});

export const validateRegisterForm = validateForm({
  email: emailValidator,
  password: passwordValidator,
  username: usernameValidator,
});

export const validatePostForm = validateForm({
  title: titleValidator,
  description: textValidator,
});
