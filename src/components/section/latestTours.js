import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

import Spinner from '../spinner/Spinner';
import { getAllTours } from '../../redux/actions';

import './index.css';

export const LatestTours = () => {
	const [loading, setLoading] = useState(true);

	const data = useSelector(state => state.toursReducer.tours);
	const theLoading = useSelector(state => state.toursReducer.loading);
	const error = useSelector(state => state.toursReducer.error);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllTours());
		setTimeout(function () {
			setLoading(!theLoading);
		}, 500);
	}, [dispatch, theLoading]);

	if (error) {
		console.log(error);
		console.clear();
	}

	return (
		<section className='st-news'>
			<Container>
				<Row>
					<Col sm={12}>
						<h4 className='col-sm-12'>Related Blogs</h4>
						<Row>
							{data && !loading ? (
								<>
									{data &&
										data
											.filter(singleTours => singleTours.isPublished === true)
											.slice(2, 5)
											.map((singleTours, i) => (
												<Col lg={4} md={4} sm={12} xs={12} key={i}>
													<Link to={`/blog/${singleTours.slug}`}>
														<div className='events-box background-white-light'>
															<img
																src={singleTours.image}
																className='img-fluid tours-img-fit'
																title={singleTours.title}
																alt={singleTours.title}
															/>
															<div className='content mt-3'>
																<span
																	className='text-bold text-small color-yellow'
																>
																	{moment(singleTours.createdAt).format(
																		'MMMM d, y'
																	)}
																</span>

																<h5>{singleTours.title}</h5>

																<p>
																	{ReactHtmlParser(
																		singleTours.toursBody.substr(0, 130)
																	)}
																	...
																	<br />
																	<span className='news-body-shadow'></span>
																</p>
															</div>
														</div>
													</Link>
												</Col>
											))}
								</>
							) : (
								<Spinner />
							)}
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
