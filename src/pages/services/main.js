import React from 'react';
import { Helmet } from 'react-helmet';
import { AppLayout } from '../../layouts';

import './index.css';
import OurServices from '../../components/section/OurServices';
// import WhyChooseUs from '../../components/section/WhyChooseUs';

export const Services = () => {
	return (
		<AppLayout>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Services | Go Discover Africa</title>
				<link rel='canonical' href='https://godiscoverafrica.rw/list' />
				<meta
					name='description'
					content='Services of Go Discover Africa'
				/>
			</Helmet>
			<OurServices />
		</AppLayout>
	);
};
