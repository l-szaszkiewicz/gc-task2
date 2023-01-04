import React, { useState, useRef } from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from "react-google-recaptcha";

import s from '../styles/components/FormWrapper.module.scss';
import Label from './FormWrapper/Label';
import fields from './FormWrapper/Fields';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Wartość jest za krótka')
    .max(50, 'Wartość jest za długa')
    .required('To pole jest wymagane'),
  company: Yup.string()
    .min(2, 'Wartość jest za krótka')
    .max(50, 'Wartość jest za długa')
    .required('To pole jest wymagane'),
  phone: Yup.string()
    .matches(`^[0-9\-\+]{9,15}$`, `Numer telefonu jest niepoprawny`)
    .required('To pole jest wymagane'),
  email: Yup.string()
    .email('Niepoprawny format adresu email')
    .required('To pole jest wymagane'),
  message: Yup.string()
    .min(5, 'Wartość jest za krótka')
    .max(500, 'Wartość jest za długa')
    .required('To pole jest wymagane'),
  consent: Yup.boolean()
    .oneOf([true], 'To pole jest wymagane'),
});

const FormWrapper = () => {
  const [data, setData] = useState(null);
  const recaptchaRef = useRef();

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          company: '',
          phone: '',
          email: '',
          systems: [],
          integrations: [],
          erp: [],
          other: [],
          message: '',
          captcha: '',
          consent: false
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          values.captcha = recaptchaRef.current.getValue();
          setData(values);
        }}
      >
        {({ errors, touched }) => (
          <>
            <Form className={s.project_evaluate}>
              {fields.text.map((el) =>
                <Label
                  key={el.name}
                  type={el.type ? el.type : 'text'}
                  name={el.name}
                  placeholder={el.placeholder}
                  fieldError={errors[el.name]}
                  fieldTouched={touched[el.name]}
                />
              )}

              <div className={s.check_wrapper}>
                <p className={s.check_header}>Systemy</p>
                {fields.systems.map((el) =>
                  <Label
                    key={el.value}
                    type='checkbox'
                    name='systems'
                    value={el.value}
                    labelTxt={el.labelTxt}
                  />
                )}
              </div>

              <div className={s.check_wrapper}>
                <p className={s.check_header}>Integracje</p>
                {fields.integrations.map((el) =>
                  <Label
                    key={el.value}
                    type='checkbox'
                    name='integrations'
                    value={el.value}
                    labelTxt={el.labelTxt}
                  />
                )}
              </div>

              <div className={s.check_wrapper}>
                <p className={s.check_header}>Integracja z ERP</p>
                {fields.erp.map((el) =>
                  <Label
                    key={el.value}
                    type='checkbox'
                    name='erp'
                    value={el.value}
                    labelTxt={el.labelTxt}
                  />
                )}
              </div>

              <div className={s.check_wrapper}>
                <p className={s.check_header}>Inne rozwiązania</p>
                {fields.other.map((el) =>
                  <Label
                    key={el.value}
                    type='checkbox'
                    name='erp'
                    value={el.value}
                    labelTxt={el.labelTxt}
                  />
                )}
              </div>

              <Label
                name='message'
                className={s.message}
                labelTxt='Treść:'
                placeholder='Wpisz tekst'
                type={''}
                fieldError={errors.message}
                fieldTouched={touched.message}
                element='textarea'
              />

              <div id='rc'>
                <ReCAPTCHA
                  sitekey="6Ld9k50jAAAAAOlxswKn4E6YhhrtsjdXXwKOlnPJ"
                  ref={recaptchaRef}
                />
              </div>

              <Label
                className={s.consent}
                name='consent'
                labelTxt={fields.consent}
                fieldError={errors.consent}
                fieldTouched={touched.consent}
                type={'checkbox'}
              />
              <button type="submit">Wyślij</button>
            </Form>
            {data &&
              <dialog open>
                <p>Twoje dane:</p>
                {Object.keys(data).map((key) => {
                  if (key && key !== 'captcha') return <p key={key}>{key}: {data[key]} </p>
                })}

                <form method="dialog">
                  <button>OK</button>
                </form>
              </dialog>
            }
          </>
        )}
      </Formik>
    </>
  )
}

export default FormWrapper
