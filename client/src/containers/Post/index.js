import React from 'react';
import PropTypes from 'prop-types';
import { date } from 'redux-form-validators';
import { Grid, Typography } from '@material-ui/core';

const PostContainer = ({ post }) => {
  const { title, username } = post;
  const formattedDate = date.formatDate(new Date(post.createdAt), 'dd/mm/yyyy');

  return (
    <Grid container direction="column">
      <Typography variant="h1" color="secondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Author: {username}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Date: {formattedDate}
      </Typography>
      <div dangerouslySetInnerHTML={{ __html: post.description }} />
    </Grid>
  );
};

PostContainer.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostContainer;
