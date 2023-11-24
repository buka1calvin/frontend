import React from 'react';
import 'dotenv/config';
import { Helmet } from 'react-helmet';
import { AppLayout } from '../../layouts';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { GalaDinner } from '../../components/section';

import './index.css';
// const { REACT_APP_ABOUT_VIDEO } = process.env;
export const About = () => {
	const boards = [
		{
			names: 'Mr. JOHN DOE',
			bio:
				'Lorem Ipsum is simply dummy text of the printing and typesetting ',
			role: 'Chairperson',
			image:
				'https://picsum.photos/seed/picsum/200/300',
		},
		{
			names: 'Mr. JOHN DOE',
			bio:
				'Lorem Ipsum is simply dummy text of the printing and typesetting ',
			role: 'Chairperson',
			image:
				'https://picsum.photos/seed/picsum/200/300',
		},
		{
			names: 'Mr. JOHN DOE',
			bio:
				'Lorem Ipsum is simply dummy text of the printing and typesetting ',
			role: 'Chairperson',
			image:
				'https://picsum.photos/seed/picsum/200/300',
		},
		{
			names: 'Mr. JOHN DOE',
			bio:
				'Lorem Ipsum is simply dummy text of the printing and typesetting ',
			role: 'Chairperson',
			image:
				'https://picsum.photos/seed/picsum/200/300',
		},
	
	
	];
	return (
		<AppLayout>
			<Helmet>
				<meta charSet='utf-8' />
				<title>About | Go Discover Africa</title>
				<link rel='canonical' href='https://godiscoverafrica.rw//about' />
				<meta
					name='description'
					content='Go Discover Africa is one of the 10 professional chambers that currently exist under the umbrella of the Private Sector Federation (PSF)'
				/>
			</Helmet>
			<section className='st-about-head' id={'who-we-are'}>
				<br />
				<br />
				<Container>
					<Row>
						<Col lg={12}>
							<p className='text-center head-title'>Our Organization</p>
						</Col>
					</Row>
					<Row className='mt-3'>
						<Col lg={4}>
							<p className='sub-head-title'>who we are</p>
						</Col>
						<Col lg={8}>
							<p className='about-description text-justify'>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</p>
						</Col>
					</Row>
					<Row className='mt-3'>
						<Col lg={4}>
							<p className='sub-head-title'>Mission</p>
						</Col>
						<Col lg={8}>
							<p className='about-description text-justify'>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
							</p>
						</Col>
					</Row>
					<Row className='mt-3'>
						<Col lg={4}>
							<p className='sub-head-title'>Vision</p>
						</Col>
						<Col lg={8}>
							<p className='about-description text-justify'>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
							</p>
						</Col>
					</Row>
					{/* <Row className='mt-3'>
						<Col lg={4}>
							<p className='sub-head-title'>corporate values</p>
						</Col>
						<Col lg={8}>
							<p className='about-description'>
								<ul>
									<li className='about-description'>
										Accountability and transparency
									</li>
									<li className='about-description'>Member orientation</li>
								</ul>
							</p>
						</Col>
					</Row> */}
					{/* <Row className='mt-5'>
						<video controls={true} width='100%' height='auto'>
							<source
								src={REACT_APP_ABOUT_VIDEO}
								playsInline={true}
								type='video/mp4'
							/>
							Your browser does not support the video tag.
						</video>
					</Row> */}
				</Container>
			</section>
			<section
				className='st-about-body pt-2 background-white'
				id={'board-of-directors'}
			>
				<Container className=''>
					<Row className='st-about-team pt-3'>
						<Container>
							<Row>
								<Col sm={12}>
									<p className='title text-center'>Board of Directors</p>
								</Col>
							</Row>
							<Row className='mt-0 pt-1'>
								{boards &&
									boards.map(index => (
										<Col sm={3} className='mt-3 py-4'>
											<Image
												alt={index.names}
												title={index.names}
												src={index.image}
												className='img-fluid'
											/>
											<p className='name mt-4 text-center mb-0'>
												{index.names}
											</p>
											<p className='text-center'>
												<span className='pos'>{index.role}</span>
											</p>
										</Col>
									))}
							</Row>
						</Container>
					</Row>
				</Container>
			</section>
			<GalaDinner />
		</AppLayout>
	);
};
