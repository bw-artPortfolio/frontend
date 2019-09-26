import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';

const LoginForm = ({ values, status, touched, errors }) => {
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

        <button type='submit'>Log In</button>
        <p>or</p>
        <Link to='/signup'>
          <button>Sign Up</button>
        </Link>
      </Form>
    </div>
  ); //close return
}; //close form

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password, email }) {
    return {
      username: username || '',
      password: password || ''
    };
  }, //close mapprops

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/(?=.*[0-9])/, 'Password must contain a number.')
  }), //close validation

  handleSubmit(values, { setStatus }) {
    console.log('Values', values);
    const testValue = { username: values.username, password: values.password };
    axios
      .get(
        'https://art-portfolio-backend.herokuapp.com/api/entries/',
        testValue
      )
      .then(res => {
        setStatus(res);
        console.log(res);
      })
      .catch(err => {
        console.log('error :', err);
      });
  } //close handlesubmit
})(LoginForm);

export default FormikLoginForm;
