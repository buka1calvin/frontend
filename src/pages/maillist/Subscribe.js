import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { userSubscribe } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../utils/LoadingSmall';

export const Subscribe = () => {
	const [email, setEmail] = useState('');
	const [validated, setValidated] = useState(false);
	const loading = useSelector(state => state.maillistReducer.subscribeData);
	const subscribeFailure = useSelector(
		state => state.maillistReducer.subscribeFailure
	);
	// const subscribeSuccess = useSelector(
	// 	state => state.maillistReducer.subscribeSuccess
	// );
	const dispatch = useDispatch();

	const handleChange = e => {
		const { value } = e.target;
		setEmail(value);
	};

	const handleSubmit = e => {
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.stopPropagation();
		}
		setValidated(true);
		e.preventDefault();
		if (email) {
			dispatch(userSubscribe({ email }));
		}
		// setEmail('');
	};
	return (
		<>
			<Form
				noValidate
				validated={validated}
				onSubmit={handleSubmit}
				className='justify-content-center text-center mail-form'
			>
				<Form.Group className='form-group'>
					<Form.Label className='text-title'>
						<b>Email address</b>
					</Form.Label>
					<Form.Control
						required
						type='email'
						name='email'
						value={email}
						placeholder='Eg: email@example.com'
						className='form-control-md form-control-xs'
						onChange={handleChange}
					/>
					<br />
				</Form.Group>
				<Button
					type='submit'
					variant='default'
					className='btn btn-custom-primary'
				>
					<i className='fa fa-paper-plane'></i> Subscribe
				</Button>
				<Form.Control.Feedback type='invalid'>
					Email is required
				</Form.Control.Feedback>
				{subscribeFailure && (
					<Alert className='alert-warning text-small'>
						{'Server Error, Please try again later'}
					</Alert>
				)}
				{loading && <Loading />}
				{/* {subscribeSuccess && (
					<Alert className='alert-success text-small'>
						{'Successful subscribed, stay in touch.'}{' '}
					</Alert>
				)} */}
			</Form>
		</>
	);
};
