import React from 'react';
import { AddPostContainer } from '../../containers';
import { HelmetWrapper, MainLayout } from '../../layouts';

const AddPostPage = () => (
  <HelmetWrapper title="Add Post" metaDescription="Add your post!">
    <MainLayout title="Add Post">
      <AddPostContainer />
    </MainLayout>
  </HelmetWrapper>
);

export default AddPostPage;
