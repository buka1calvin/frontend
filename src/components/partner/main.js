import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './index.css';
export class Partner extends Component {
	render() {
		return (
			<section className='pt-block pt-3 pb-3'>
				<h3 className='pb-4 text-center'>Partners</h3>
				<Container fluid className='p-3'>
					<Row>
						<Col>
							<Image
								src='https://res.cloudinary.com/rcot/image/upload/v1610090242/COT-WEBSITE/PARTNERS/rdb_ejfo4m.jpg'
								title='Logo'
								alt='Image'
								className='img-fluid'
							/>
						</Col>
						<Col>
							<Image
								src='https://res.cloudinary.com/rcot/image/upload/v1613209017/COT-WEBSITE/ASSOCIATIONS/psf4_odqk0s.png'
								title='Logo'
								alt='Image'
								className='img-fluid'
							/>
						</Col>
						<Col>
							<Image
								src='https://res.cloudinary.com/rcot/image/upload/v1610090242/COT-WEBSITE/PARTNERS/mastercard_pmzwpa.png'
								title='Logo'
								alt='Image'
								className='img-fluid'
							/>
						</Col>
						<Col>
							<Image
								src='https://res.cloudinary.com/rcot/image/upload/v1610090242/COT-WEBSITE/PARTNERS/giz_xwqgve.jpg'
								title='Logo'
								alt='Image'
								className='img-fluid'
							/>
						</Col>

				
					</Row>
				</Container>
			</section>
		);
	}
}
