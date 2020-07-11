import { email, length, required } from 'redux-form-validators';

export const emailValidator = [
  required({
    message: 'Email is required',
  }),
  email({
    message: 'Please enter a valid email address.',
  }),
];

export const passwordValidator = [
  required({
    message: 'Password is required',
  }),
  length({
    min: 8,
    message: 'Your password must be at least 8 characters.',
  }),
];

export const usernameValidator = [
  required({
    message: 'Username is required',
  }),
];

export const textValidator = [
  required({
    message: 'Message is required',
  }),
];

export const titleValidator = [
  required({
    message: 'Title is required',
  }),
];
