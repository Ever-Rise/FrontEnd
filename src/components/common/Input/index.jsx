import React from 'react';
import { Field, InputLabel, StyledInput, ErrorText } from './styles';

const Input = ({ label, error, id, ...props }) => {
  return (
    <Field>
      {label ? <InputLabel htmlFor={id}>{label}</InputLabel> : null}
      <StyledInput id={id} ={Boolean(error)} {...props} />
      {error ? <ErrorText role='alert'>{error}</ErrorText> : null}
    </Field>
  );
};

export default Input;
