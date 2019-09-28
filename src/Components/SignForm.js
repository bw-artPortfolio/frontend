import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import { Modal, Button } from "react-bootstrap";

const SigninForm = ({ values, status, touched, errors }) => {
	const [info, setinfo] = useState([]);

	useEffect(() => {
		if (status) {
			setinfo([...info, status]);
		}
	}, [status]);

	return (
		<Modal.Dialog>
			<Modal.Header>
				<Modal.Title>Log In</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="sign-form">
					<Form>
						<label>
							Username:
							<Field type="text" name="username"></Field>
							<span>
								{touched.username && errors.username && (
									<span className="error-text">{errors.username}</span>
								)}
							</span>
						</label>

						<label>
							Password:
							<Field type="password" name="password"></Field>
							<span>
								{touched.password && errors.password && (
									<span className="error-text">{errors.password}</span>
								)}
							</span>
						</label>

						{/* <label>
          Email:
          <Field type='text' name='email'></Field>
          <span>
            {touched.email && errors.email && (
              <span className='error-text'>{errors.email}</span>
            )}
          </span>
        </label> */}

						<Modal.Footer>
							<Button variant="secondary">Close</Button>
							<Button type="submit" variant="primary">
								Submit
							</Button>
						</Modal.Footer>
					</Form>
				</div>
			</Modal.Body>
			{/* <Modal.Footer>
    <Button  variant="secondary">Close</Button>
    <Button type = 'submit' variant="primary">Submit</Button>
  </Modal.Footer> */}
		</Modal.Dialog>
	); //close return
}; //close form

const FormikSigninForm = withFormik({
	mapPropsToValues({ username, password, email }) {
		return {
			username: username || "",
			password: password || ""
			// email: email || ''
		};
	}, //close mapprops

	validationSchema: Yup.object().shape({
		username: Yup.string().required("Required"),
		password: Yup.string()
			.required("No password provided.")
			.min(8, "Password is too short - should be 8 chars minimum.")
			.matches(/(?=.*[0-9])/, "Password must contain a number.")
		// email: Yup.string().required('Required')
	}), //close validation

	handleSubmit(values, { setStatus, resetForm }) {
		console.log("Values", values);
		const testValue = { username: values.username, password: values.password };
		axios
			.post(
				"https://art-portfolio-backend.herokuapp.com/api/account/register",
				testValue
			)
			.then(res => {
				setStatus(res);
				console.log(res);
				resetForm();
			})
			.catch(err => {
				console.log("error :", err);
			});
	} //close handlesubmit
})(SigninForm);

export default FormikSigninForm;
