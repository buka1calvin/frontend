import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

import Spinner from '../spinner/Spinner';
import { getAllNews } from '../../redux/actions';

import './index.css';

export const LatestNews = () => {
	const [loading, setLoading] = useState(true);

	const data = useSelector(state => state.newsReducer.news);
	const theLoading = useSelector(state => state.newsReducer.loading);
	const error = useSelector(state => state.newsReducer.error);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllNews());
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
											.filter(singleNews => singleNews.isPublished === true)
											.slice(2, 5)
											.map((singleNews, i) => (
												<Col lg={4} md={4} sm={12} xs={12} key={i}>
													<Link to={`/blog/${singleNews.slug}`}>
														<div className='events-box background-white-light'>
															<img
																src={singleNews.image}
																className='img-fluid news-img-fit'
																title={singleNews.title}
																alt={singleNews.title}
															/>
															<div className='content mt-3'>
																<span
																	className='text-bold text-small color-yellow'
																>
																	{moment(singleNews.createdAt).format(
																		'MMMM d, y'
																	)}
																</span>

																<h5>{singleNews.title}</h5>

																<p>
																	{ReactHtmlParser(
																		singleNews.newsBody.substr(0, 130)
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
