import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { paths } from '../../routes';
import { addPost } from '../../ducks/author';
import { AuthLayout } from '../../layouts';
import { postFields, validatePostForm } from '../../utils';

const AddPostContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const postActions = {
    primary: {
      title: 'Add',
    },
  };

  const addPostHandler = async ({ title, description }) => {
    const descriptionHtml = description.toString('html');
    await dispatch(addPost(title, descriptionHtml));
    history.push(paths.home);
  };

  return (
    <AuthLayout
      formName="addPost"
      fields={postFields}
      actions={postActions}
      validateFunc={validatePostForm}
      onFormSubmit={addPostHandler}
    />
  );
};

export default AddPostContainer;
