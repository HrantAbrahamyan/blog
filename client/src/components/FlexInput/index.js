import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RichTextEditor from 'react-rte';
import { TextField } from '@material-ui/core';

const FlexInput = ({
  type,
  input,
  label,
  className,
  multiline,
  meta,
  errorClassName,
  ...restProps
}) => {
  const error = meta.touched && !!meta.error;

  if (type === 'wysiwyg') {
    const wysiwygValue = input.value || RichTextEditor.createEmptyValue();

    return (
      <RichTextEditor
        {...input}
        value={wysiwygValue}
        className={classNames({
          [className]: className,
          [errorClassName]:
            meta.touched &&
            !wysiwygValue.toString('html').replace(/<[^>]*>?/gm, ''),
        })}
      />
    );
  }

  return (
    <TextField
      {...restProps}
      fullWidth
      type={type}
      label={label}
      error={error}
      variant="outlined"
      multiline={multiline}
      className={className}
      {...input}
    />
  );
};

FlexInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  className: PropTypes.string,
  errorClassName: PropTypes.string,
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
};

FlexInput.defaultProps = {
  label: '',
  type: 'text',
  multiline: false,
  errorClassName: '',
  className: 'material_input',
};

export default FlexInput;
