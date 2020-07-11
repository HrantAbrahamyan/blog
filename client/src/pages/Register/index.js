import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { HelmetWrapper } from '../../layouts';
import { useRootStyles } from '../../styles';
import { RegisterContainer } from '../../containers';

const RegisterPage = () => {
  const classes = useRootStyles();

  return (
    <HelmetWrapper
      title="Register"
      metaDescription="Register will give user opportunity to get new account!"
    >
      <Grid container className={classes.main}>
        <Typography className={classes.title} variant="h1" gutterBottom>
          Registration
        </Typography>
        <RegisterContainer />
      </Grid>
    </HelmetWrapper>
  );
};

export default RegisterPage;
