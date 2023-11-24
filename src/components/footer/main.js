import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';
export class Footer extends Component {
	render() {
		return (
			<footer>
				<div className='ft-top py-2'>
					<Container fluid className='pl-5 pr-5'>
						<Row className='py-3 justify-content-center text-center'>
							<h2 className='mb-4 mt-3'>Useful Links</h2>
							<Col lg={12}>
								<a
									href='https://gov.rw/'
									className='ft-link'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Republic of Rwanda'
								>
									Republic of Rwanda
								</a>
								&nbsp; | &nbsp;{' '}
								<a
									href='https://www.visitrwanda.com/'
									className='ft-link'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Visit Rwanda'
								>
									Visit Rwanda
								</a>
								&nbsp; | &nbsp;{' '}
								<a
									href='https://www.rbc.gov.rw/index.php?id=188'
									className='ft-link'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Rwanda Biomedical Centre'
								>
									Rwanda Biomedical Centre
								</a>
								&nbsp; | &nbsp;{' '}
								<a
									href='https://rdb.rw/'
									className='ft-link'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Rwanda Development Board'
								>
									Rwanda Development Board
								</a>
								&nbsp; | &nbsp;{' '}
								<a
									href='https://www.caa.gov.rw/index.php?id=2'
									className='ft-link'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Rwanda Civil Aviation Authority'
								>
									Rwanda Civil Aviation Authority
								</a>
								&nbsp; | &nbsp;{' '}
								<a
									href='https://www.rwandair.com/'
									className='ft-link'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Rwandair'
								>
									Rwandair
								</a>
							</Col>
						</Row>
					</Container>
				</div>
				<div className='ft-bottom'>
					<Container fluid className='pl-5 pr-5'>
						<div className='py-4 border-top'>
							<Row>
								<Col lg={10}>
									Copyright- Go Discover Africa &copy;{' '}
									{new Date().getFullYear()}
									&nbsp; | &nbsp;{' '}
									<Link to='/' className='ft-link'>
										Home
									</Link>{' '}
									&nbsp; | &nbsp;{' '}
									<Link to='/about' className='ft-link'>
										About Us
									</Link>{' '}
									&nbsp; | &nbsp;{' '}
									<Link to='/contact' className='ft-link'>
										Contact Us
									</Link>{' '}
									&nbsp; | &nbsp;{' '}
									<Link to='/faq' className='ft-link'>
										FAQs
									</Link>
									&nbsp; | &nbsp;{' '}
									<Link to='/terms' className='ft-link'>
										Terms & Conditions
									</Link>{' '}
									&nbsp; | &nbsp;{' '}
									<Link to='/policy' className='ft-link'>
										Privacy Policy
									</Link>
								</Col>

						
							</Row>
						</div>
					</Container>
				</div>
			</footer>
		);
	}
}
