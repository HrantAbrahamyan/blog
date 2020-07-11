import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';

import { FlexButton } from '../../components';
import { HelmetWrapper } from '../../layouts';
import { useRootStyles } from '../../styles';

const NotFoundPage = () => {
  const classes = useRootStyles();

  return (
    <HelmetWrapper
      title="Page not found"
      metaDescription="Page with that url not found in HrantBlog app."
    >
      <Grid container className={classes.main}>
        <Typography
          variant="h1"
          color="error"
          gutterBottom
          className={classes.title}
        >
          Page Not Found
        </Typography>
        <FlexButton component={Link} to="/">
          Lets moved to app and enjoy!
        </FlexButton>
      </Grid>
    </HelmetWrapper>
  );
};

export default NotFoundPage;
