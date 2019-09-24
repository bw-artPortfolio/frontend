import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';

const SigninForm = ({ values, status, touched, errors }) => {
  const [info, setinfo] = useState([]);

  useEffect(() => {
    if (status) {
      setinfo([...info, status]);
    }
  }, [status]);

  return (
    <div className='sign-form'>
      <Form>
        <label>
          Username:
          <Field type='text' name='username'></Field>
          <span>
            {touched.username && errors.username && (
              <span className='error-text'>{errors.username}</span>
            )}
          </span>
        </label>

        <label>
          Password:
          <Field type='text' name='password'></Field>
          <span>
            {touched.password && errors.password && (
              <span className='error-text'>{errors.password}</span>
            )}
          </span>
        </label>

        <label>
          Email:
          <Field type='text' name='email'></Field>
          <span>
            {touched.email && errors.email && (
              <span className='error-text'>{errors.email}</span>
            )}
          </span>
        </label>

        <button type='submit'>Submit</button>
      </Form>
    </div>
  ); //close return
}; //close form

const FormikSigninForm = withFormik({
  mapPropsToValues({ username, password, email }) {
    return {
      username: username || '',
      password: password || '',
      email: email || ''
    };
  }, //close mapprops

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    email: Yup.string().required('Required')
  }), //close validation

  handleSubmit(values, { setStatus }) {
    axios
      .post('https://art-portfolio-backend.herokuapp.com/api/register', values)
      .then(res => {
        setStatus(res);
        console.log(res);
      })
      .catch(err => {
        console.log('error :', err);
      });
  } //close handlesubmit
})(SigninForm);

export default FormikSigninForm;
