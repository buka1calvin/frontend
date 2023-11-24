import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { AppLayout } from '../../layouts';
import { LatestTours } from '../../components/section';
import { ToursBox } from '../../components/section';

import './index.css';

export const Tours = () => {
	return (
		<AppLayout>
			<section className='py-5'>
				<Container>
					<Row>
						<ToursBox />
					</Row>

					<Row className='mt-5'>
						<LatestTours />
					</Row>
				</Container>
			</section>
		</AppLayout>
	);
};
