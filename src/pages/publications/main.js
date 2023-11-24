import React from 'react';
import { Helmet } from 'react-helmet';
import { AppLayout } from '../../layouts';
import { Container, Row, Col } from 'react-bootstrap';
import { RightBar } from '../../components/section';
import { Publication as PublicationBox } from '../../components/publication/main';
import './index.css';

export const Publication = () => {
	return (
		<AppLayout>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Publications | Go Discover Africa</title>
				<link rel='canonical' href='https://godiscoverafrica.rw/list' />
				<meta
					name='description'
					content='Publications of Go Discover Africa'
				/>
			</Helmet>
			<section>
				<Container className='py-4'>
					<Row>
						<Col sm={12}>
							<h1 className='text-title text-bold py-1'>Publications</h1>
						</Col>
					</Row>

					<Row className='mt-4'>
						<Col sm={8}>
							<PublicationBox />
						</Col>

						<Col sm={4}>
							<RightBar tweet={true} news={false} />
						</Col>
					</Row>
				</Container>
			</section>
		</AppLayout>
	);
};
