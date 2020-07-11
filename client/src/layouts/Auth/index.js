import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Grid } from '@material-ui/core';

import { useRootStyles } from '../../styles';
import { FlexButton, FlexInput } from '../../components';

const AuthLayout = ({ actions, fields, onFormSubmit, handleSubmit }) => {
  const classes = useRootStyles();
  const { primary, secondary } = actions;

  const rendFields = () =>
    fields.map((field) => (
      <Field
        key={field.id}
        type={field.type}
        name={field.name}
        label={field.label}
        component={FlexInput}
        className={classes.input}
        placeholder={field.placeholder}
        errorClassName={classes.fieldError}
      />
    ));

  return (
    <Grid className={classes.listContainer}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        {rendFields()}
        <FlexButton type="submit" fullWidth {...primary}>
          {primary.title}
        </FlexButton>
        {secondary && (
          <FlexButton
            className={classes.marginTop}
            color="secondary"
            fullWidth
            {...secondary}
          >
            {secondary.title}
          </FlexButton>
        )}
      </form>
    </Grid>
  );
};

AuthLayout.propTypes = {
  fields: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  formName: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  validateFunc: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default compose(
  connect((state, props) => ({
    form: props.formName,
    validate: props.validateFunc,
  })),
  reduxForm({}),
)(AuthLayout);
