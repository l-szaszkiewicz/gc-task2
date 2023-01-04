import React from 'react'

import { Field } from 'formik';

import s from '../../styles/components/FormWrapper.module.scss'

const Label = ({
  name,
  value,
  labelTxt = '',
  placeholder = '',
  type,
  fieldError,
  fieldTouched,
  className,
  element = 'input'
}) => {
  return (
    <label htmlFor={type !== `checkbox` ? name : undefined} className={className}>
      {labelTxt}
      <Field as={element} name={name} placeholder={placeholder} type={type} value={value} />

      {fieldError && fieldTouched ? (
        <p className={s.error_message}>{fieldError}</p>
      ) : null}
    </label>
  )
}

export default Label