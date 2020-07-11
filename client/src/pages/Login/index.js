import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { HelmetWrapper } from '../../layouts';
import { LoginContainer } from '../../containers';
import { useRootStyles } from '../../styles';

const LoginPage = () => {
  const classes = useRootStyles();

  return (
    <HelmetWrapper
      title="Login"
      metaDescription="Login will give user opportunity to authenticate via email and password."
    >
      <Grid container className={classes.main}>
        <Typography className={classes.title} variant="h1" gutterBottom>
          Login
        </Typography>
        <LoginContainer />
      </Grid>
    </HelmetWrapper>
  );
};

export default LoginPage;
