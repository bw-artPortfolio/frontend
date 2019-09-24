import React, { useState, useEffect } from 'react';

import * as Yup from 'yup';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';

const SigninForm = ({ values, status, touched, errors }) => {
  const [info, setinfo] = useState([]);

  useEffect(() => {
    if (status) {
      setinfo([...info, status]);
    } //close if
  }, [status]);

  return (
    <div className='user-form'>
      <Form>
        {/* username */}
        <label>
          Username:
          <Field
            type='text'
            name='username'
            placeholder='Enter name...'></Field>
          <span>
            {touched.username && errors.username && (
              <p className='error'>{errors.username}</p>
            )}
          </span>
        </label>

        {/* password */}
        <label>
          Password:
          <Field
            type='text'
            name='password'
            placeholder='Enter valid password...'></Field>
          <span>
            {touched.password && errors.password && (
              <p className='error'>{errors.password}</p>
            )}
          </span>
        </label>

        {/* email */}
        <label>
          Email:
          <Field type='text' name='email' placeholder='Enter email...'></Field>
          <span>
            {touched.email && errors.email && (
              <p className='error'>{errors.email}</p>
            )}
          </span>
        </label>

        <button type='submit'>Submit</button>
      </Form>

      {/* <div className='display-info'>
        {info.map(ele => (
          <ul key={ele.id}>
            <li id='lists'>Username: {ele.username}</li>
            <li id='lists'>Email: {ele.email}</li>
            <li id='lists'> Term of Services: </li>
          </ul>
        ))}
      </div> */}
    </div>
  ); //close return
}; //close form

const FormikSigninForm = withFormik({
  mapPropsToValues({ username, password, email, tos }) {
    return {
      username: username || '',
      passwordA: password || '',
      email: email || '',
      tos: tos || ''
    }; //close return
  }, //close propstovalue
  validationSchema: Yup.object().shape({
    username: Yup.string().required('Enter a name.'),
    password: Yup.string().required('Enter valid passwod'),
    email: Yup.string().required('Enter eamil')
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post('https://art-portfolio-backend.herokuapp.com/api/register', values)
      .then(res => {
        setStatus(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.log('error', error);
      });
  }
})(SigninForm); //close formik form

export default FormikSigninForm;
