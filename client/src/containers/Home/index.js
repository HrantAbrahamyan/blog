import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { GridList } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { FlexCard } from '../../components';
import { useRootStyles } from '../../styles';
import { getPosts, selectPosts } from '../../ducks/author';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const classes = useRootStyles();
  const history = useHistory();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const redirectPostHandler = (post) => {
    history.push(`/post/${post._id}`);
  };

  const rendPosts = () => {
    return posts.map((post) => {
      const { _id, ...rest } = post;

      return (
        <FlexCard
          {...rest}
          key={_id}
          onClick={() => redirectPostHandler(post)}
        />
      );
    });
  };

  return (
    <GridList className={classes.fullWidth} cellHeight={280}>
      {rendPosts()}
    </GridList>
  );
};

export default HomeContainer;
