import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { AppLayout } from '../../layouts';
import { Container, Row, Col } from 'react-bootstrap';
// import { Header } from '../../components/section';
import './index.css';

export class MemberBenefits extends Component {
	render() {
		return (
			<AppLayout>
				<Helmet>
					<meta charSet='utf-8' />
					<title>Benefits of being a member | Go Discover Africa</title>
					<link rel='canonical' href='https://godiscoverafrica.rw/list' />
					<meta
						name='description'
						content='Benefits of being a member of Go Discover Africa'
					/>
				</Helmet>
			
			</AppLayout>
		);
	}
}
