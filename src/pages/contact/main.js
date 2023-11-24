import React, { useState } from 'react';
import { AppLayout } from '../../layouts';
import {
	Container,
	Row,
	Col,
	ResponsiveEmbed,
	Form,
	Alert,
	Button,
} from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { sendContactEmail } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../utils/Loading';

import './index.css';

export const Contact = () => {
	const [validated, setValidated] = useState(false);
	const [user, setUser] = useState({
		names: '',
		email: '',
		subject: '',
		message: '',
	});
	const loading = useSelector(state => state.contact.contactData);
	const contactFailed = useSelector(state => state.contact.contactFailure);

	const dispatch = useDispatch();

	const handleChange = e => {
		const { name, value } = e.target;
		setUser(user => ({ ...user, [name]: value }));
	};

	const handleSubmit = e => {
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.stopPropagation();
		}
		e.preventDefault();
		setValidated(true);
		if (user.email && user.message) {
			dispatch(sendContactEmail(user));
		}
		if (!loading && contactFailed === null) {
			setTimeout(function () {
				setUser({
					names: '',
					email: '',
					subject: '',
					message: '',
				});
				setValidated(false);
			}, 1500);
		}
	};

	return (
		<AppLayout>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Contact | Go Discover Africa</title>
				<link rel='canonical' href='https://godiscoverafrica.rw//contact' />
				<meta
					name='description'
					content='Contact Go Discover Africa on the following address: email: ‎+250 791 349 744, email: info@godiscoverafrica.rw '
				/>
			</Helmet>
			<section className='mt-5 mb-5 contact'>
				<Container>
					<Row>
						<Col sm={5}>
							<h1 className='text-title text-bold mt-3 py-4'>Contact us</h1>
							<p className='mt-4'>
								Kigali, Rwanda <br />
								Gishushu, KG 8 Avenue N.6 <br />
								M&M Plaza 5th Floor
							</p>
							<p className='mt-4'>
								<i className='fa fa-phone mr-2'></i> ‎+250 791 349 744 <br />
								<i className='fa fa-inbox mr-2'></i> info@godiscoverafrica.rw <br />
								{/* <i className='fab fa-google-plus mr-2'></i>{' '}
								rchamberoftourism@gmail.com */}
							</p>

							<p className='mt-5'>GODISCOVER AFRICAHOTLINE</p>

							<p className='mt-3 contact-covid-large'>
								{' '}
								<i className='fa fa-phone mr-2'></i>8181
							</p>
						</Col>
						<Col sm={7}>
							<Form noValidate validated={validated} onSubmit={handleSubmit}>
								<Form.Group>
									<Form.Label>Full Name</Form.Label>
									<Form.Control
										required
										type='text'
										placeholder='Eg: John Peter'
										value={user.names}
										name='names'
										className='form-control-lg'
										onChange={handleChange}
									/>
									<Form.Control.Feedback type='invalid'>
										Full name is required
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group>
									<Form.Label>Email Address</Form.Label>
									<Form.Control
										type='email'
										placeholder='Eg: email@example.com'
										required
										name='email'
										value={user.email}
										className='form-control-lg'
										onChange={handleChange}
									/>
									<Form.Control.Feedback type='invalid'>
										Email is required
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group>
									<Form.Label>Subject</Form.Label>
									<Form.Control
										type='text'
										placeholder='Eg: REQUESTING INFORMATION ABOUT ......'
										required
										name='subject'
										value={user.subject}
										className='form-control-lg'
										onChange={handleChange}
									/>
									<Form.Control.Feedback type='invalid'>
										Subject is required
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group>
									<Form.Label>Message</Form.Label>
									<Form.Control
										as='textarea'
										rows='3'
										placeholder='Message here...'
										type='text'
										name='message'
										value={user.message}
										onChange={handleChange}
									/>
									<Form.Control.Feedback type='invalid'>
										message is required
									</Form.Control.Feedback>
								</Form.Group>

								{loading ? (
									<Loading />
								) : (
									<>
										<Button
											type='submit'
											variant='outline-primary'
											className='mt-3 col-sm-6'
										>
											<i className='fa fa-save'></i> Send message
										</Button>
									</>
								)}
								{contactFailed && (
									<Alert className='alert-warning'>{contactFailed}</Alert>
								)}
							</Form>
						</Col>
					</Row>

					<Row className='mt-5'>
						<Col sm={12}>
							<ResponsiveEmbed aspectRatio='16by9'>
								<embed src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63799.99735817496!2d30.103524999999998!3d-1.9533690000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc76b5e00aaa31b51!2sM%26M%20Plaza!5e0!3m2!1sen!2srw!4v1605274623851!5m2!1sen!2srw' />
							</ResponsiveEmbed>
						</Col>
					</Row>
				</Container>
			</section>
		</AppLayout>
	);
};
