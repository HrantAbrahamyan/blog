import shortid from 'shortid';
import { createSelector } from 'reselect';

import { axios, storage } from '../utils';
import { addNotification } from './notifier';

const GET_TOKEN = '@HRANTBLOG/auth/token/GET';
const GET_POSTS = '@HRANTBLOG/auth/posts/GET';

const initialState = {
  posts: [],
  user: {},
  token: storage.load('token'),
};

export default (state = initialState, action = {}) => {
  const { token, user, posts } = action;

  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        token,
        user,
      };
    case GET_POSTS:
      return {
        ...state,
        posts,
      };
    default:
      return state;
  }
};

export const loadToken = (token, user) => {
  return { type: GET_TOKEN, token, user };
};

export const loadPosts = (posts) => {
  return { type: GET_POSTS, posts };
};

export const getPosts = () => (dispatch) =>
  new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get('/api/posts');

      dispatch(loadPosts(data.posts));
      resolve(data.posts);
    } catch (error) {
      dispatch(
        addNotification({
          type: 'error',
          key: shortid.generate(),
          message: error.response.data.message,
        }),
      );
      reject(error);
    }
  });

export const addPost = (title, description) => (dispatch, getState) =>
  new Promise(async (resolve, reject) => {
    const { username } = getState().author.user;
    try {
      await axios.post('/api/posts/new', {
        title,
        description,
        username,
      });
      await dispatch(getPosts());
      resolve();
    } catch (error) {
      dispatch(
        addNotification({
          type: 'error',
          key: shortid.generate(),
          message: error.response.data.message,
        }),
      );
      reject(error);
    }
  });

export const login = (email, password) => (dispatch) =>
  new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post('/api/users/login', {
        email,
        password,
      });
      const token = shortid.generate();
      dispatch(loadToken(token, data.user));
      storage.save('token', token);
      resolve(data);
    } catch (error) {
      dispatch(
        addNotification({
          type: 'error',
          key: shortid.generate(),
          message: error.response.data.message,
        }),
      );
      reject(error);
    }
  });

export const register = (username, password, email) => (dispatch) =>
  new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post('/api/users/register', {
        username,
        password,
        email,
      });
      resolve(data);
    } catch (error) {
      reject(error);
      dispatch(
        addNotification({
          type: 'error',
          key: shortid.generate(),
          message: error.response.data.message,
        }),
      );
    }
  });

export const logout = () => async (dispatch) =>
  new Promise(async (resolve, reject) => {
    try {
      await axios.get('/api/users/logout');
      dispatch(loadToken(null, {}));
      storage.save('token', '');
      resolve();
    } catch (error) {
      reject(error);
      dispatch(
        addNotification({
          type: 'error',
          key: shortid.generate(),
          message: error.response.data.message,
        }),
      );
    }
  });

export const selectState = (state) => state.author;

export const selectToken = createSelector(
  selectState,
  (authState) => authState.token,
);

export const selectPosts = createSelector(
  selectState,
  (authState) => authState.posts,
);

export const selectUser = createSelector(
  selectState,
  (authState) => authState.user,
);
