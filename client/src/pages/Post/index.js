import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { PostContainer } from '../../containers';
import { selectPosts } from '../../ducks/author';
import { HelmetWrapper, MainLayout } from '../../layouts';

const PostPage = ({ match }) => {
  const posts = useSelector(selectPosts);
  const post = posts.find((postItem) => postItem._id === match.params.id);

  return (
    <HelmetWrapper
      title={post.title}
      metaDescription={post.description.replace(/<[^>]*>?/gm, '')}
    >
      <MainLayout title="Post">
        <PostContainer post={post} />
      </MainLayout>
    </HelmetWrapper>
  );
};

PostPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default PostPage;
