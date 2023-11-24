import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export const OurAssociations = () => {
	const associations = [
		{
			title: 'Rwanda Hospitaliy Association',
			image:
				'https://res.cloudinary.com/rcot/image/upload/v1610092686/COT-WEBSITE/ASSOCIATIONS/RHAlogo_vspkcp.png',
			link: 'https://rha.rw',
		},
		{
			title: 'Rwanda Tours and Travel Association',
			image:
				'https://res.cloudinary.com/rcot/image/upload/v1610092688/COT-WEBSITE/ASSOCIATIONS/RTTA_irfof0.png',
			link: 'https://rtta.rw',
		},
		{
			title: 'Rwanda Safari Guides Association',
			image:
				'https://res.cloudinary.com/rcot/image/upload/v1610092688/COT-WEBSITE/ASSOCIATIONS/RSGAlogo_udmmrj.png',
			link: 'https://rsga.rw',
		},
		{
			title: 'Rwanda Hospitality & Tourism Educators Association',
			image:
				'https://res.cloudinary.com/rcot/image/upload/v1610092686/COT-WEBSITE/ASSOCIATIONS/RHTEALOGO_lwsqgb.png',
			link: 'https://rhtea.rw',
		},
		{
			title: 'Rwanda Association of Travel Agencies',
			image:
				'https://res.cloudinary.com/rcot/image/upload/v1610546900/COT-WEBSITE/ASSOCIATIONS/rata-min_cqpumk.png',
			link: 'https://rata.org.rw',
		},
		{
			title: 'Rwanda Community Tourism Association',
			image:
				'https://res.cloudinary.com/rcot/image/upload/v1613204284/COT-WEBSITE/ASSOCIATIONS/rita2-min_ltrtd1.png',
			link: 'https://rata.org.rw',
		},
	];
	return (
		<section
			className='pt-block-association members-section section association-bg mt-0'
			style={{
				paddingTop: 0,
				paddingBottom: 0,
				marginTop: '-40px !important',
			}}
		>
			<Container
				fluid
				className=''
				style={{
					paddingTop: 0,
					paddingBottom: 0,
					marginTop: '-40px !important',
				}}
			>
				<Row className=''>
					<Col lg={12}>
						<div className='content text-center py-1'>
							<p className='content-bottom'>Our Members Associations</p>
						</div>
					</Col>
				</Row>
				<Row className='justify-content-center py-5'>
					{associations &&
						associations.map(i => (
							<Col>
								<a
									href={i.link}
									target='_blank'
									rel='noopener noreferrer'
									aria-label={i.title}
								>
									<div className='content text-center our-members'>
										<Image src={i.image} alt={i.title} className='img-fluid' />
									</div>
								</a>
							</Col>
						))}
				</Row>
			</Container>
		</section>
	);
};
