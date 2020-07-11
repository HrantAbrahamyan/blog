import shortid from 'shortid';
import paths from './paths';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  AddPostPage,
  PostPage,
} from '../pages';

const config = [
  {
    id: shortid.generate(),
    path: paths.home,
    exact: true,
    isPrivate: true,
    component: HomePage,
  },
  {
    id: shortid.generate(),
    path: paths.login,
    exact: true,
    component: LoginPage,
  },
  {
    id: shortid.generate(),
    path: paths.register,
    exact: true,
    component: RegisterPage,
  },
  {
    id: shortid.generate(),
    path: paths.addPost,
    exact: true,
    isPrivate: true,
    component: AddPostPage,
  },
  {
    id: shortid.generate(),
    path: paths.post,
    exact: true,
    isPrivate: true,
    component: PostPage,
  },
];

export default config;
