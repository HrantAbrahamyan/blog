import React from 'react';
import PropTypes from 'prop-types';
import { date } from 'redux-form-validators';
import { Card, CardHeader, Typography, CardContent } from '@material-ui/core';
import { useRootStyles } from '../../styles';

const FlexCard = ({ createdAt, username, title, description, onClick }) => {
  const classes = useRootStyles();
  const formattedDate = date.formatDate(new Date(createdAt), 'dd/mm/yyyy');

  return (
    <Card onClick={onClick} className={classes.card}>
      <CardHeader
        title={title}
        subheader={`Author: ${username} - Date: ${formattedDate}`}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </CardContent>
    </Card>
  );
};

FlexCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FlexCard;
