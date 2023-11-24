import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBarPage from '../pagess/NavBarPage';
import { Partner } from '../components/partner';
import FouterPage from "../components/footerr/FouterBar"
import './index.css';
import FouterBar from '../components/footerr/FouterBar';

export const AppLayout = props => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className='main'>
			<div
				className='top-bar-navbar'
				style={{ backgroundColor: 'red', color: '#fff' }}
			>
				<Container className='py-2'>
					<Row>
						<Col lg={8} xs={7} sm={7}>
							<div className='contact-top'>
								<a
									href='mailto:info@godiscoverafrica.rw'
									className='p-2 email-info'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='info@godiscoverafrica.rw'
								>
									<i className='fa fa-envelope mr-1'></i> info@godiscoverafrica.rw
								</a>
								<a
									href='tel:+250788332220'
									className='p-2 tel'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='‎+250 791 349 744'
								>
									<i className='fa fa-phone mr-1'></i> ‎+250 791 349 744
								</a>
							</div>
						</Col>

						<Col lg={4} xs={5} sm={5}>
							<div className='social-top float-right'>
								<a
									href='https://web.facebook.com/TourismChamberRW/?_rdc=1&_rdr'
									className='p-2'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Facebook'
								>
									<i className='fab fa-facebook'></i>
								</a>
								<a
									href='https://twitter.com/tourismchamber?lang=en'
									className='p-2'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Twitter'
								>
									<i className='fab fa-twitter'></i>
								</a>
								<a
									href='https://www.instagram.com/tourismchamber_rw/?hl=en'
									className='p-2'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Instagram'
								>
									<i className='fab fa-instagram'></i>
								</a>
								<a
									href='https://www.linkedin.com/company/rwanda-chamber-of-tourism'
									className='p-2'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Linkedin'
								>
									<i className='fab fa-linkedin'></i>
								</a>
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			<NavBarPage />

			<main>{props.children}</main>

			<Partner />
			<FouterBar />
		</div>
	);
};
