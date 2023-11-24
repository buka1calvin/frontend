import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import Axios from 'axios';
import { AdminLayout } from '../../../layouts';

import {
	getPublication,
	deletePublication,
	updateAPublication,
} from '../../../redux/actions';
import DocumentUpload from '../../../components/section/documentUpload';

export const PublicationsView = props => {
	const token = localStorage.IdToken;
	const decodedToken = jwtDecode(token);
	const { id: paramsId } = props.match.params;
	const [modal, setModal] = useState(false);

	const { history } = props;
	const [uploadedDocumentUrl, setUploadedDocumentUrl] = useState('');
	const [uploadDocumentPercent, SetUploadDocumentPercent] = useState(0);
	const [isDocumentChoosed, setIsDocumentChoosed] = useState(false);
	const [isUploadingDocumentStarted, setIsUploadingDocumentStarted] = useState(
		false
	);
	const [errors, setErrors] = useState(null);
	const [files, setFiles] = useState([]);
	const [edit, setEdit] = useState(false);
	const [loading, setLoading] = useState(false);

	const [variables, setVariables] = useState({
		title: '',
		category: '',
		pubDocument: '',
	});

	const toggle = () => {
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
	};

	const onChange = e =>
		setVariables({
			...variables,
			[e.target.name]: e.target.value,
		});

	const publication = useSelector(
		state => state.publicationReducer.publication
	);
	// const message = useSelector(state => state.publicationReducer.message);
	const error = useSelector(state => state.publicationReducer.error);

	const dispatch = useDispatch();

	const deleteAPublication = id => {
		dispatch(deletePublication(id, history));
		setModal(false);
	};

	const handleOnUploadDocument = async e => {
		e.preventDefault();
		setIsUploadingDocumentStarted(true);
		try {
			const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/upload`;
			const formData = new FormData();
			formData.append('file', files[0]);
			formData.append(
				'upload_preset',
				process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
			);
			formData.append(
				'folder',
				`${process.env.REACT_APP_CLOUDINARY_PUBLICATIONS_FOLDER}`
			);
			const response = await Axios.post(
				url,
				formData,
				{
					headers: { 'X-Requested-With': 'XMLHttpRequest' },
				},
				{
					onUploadProgress: progressEvent =>
						SetUploadDocumentPercent(
							Math.round((progressEvent.loaded * 100) / progressEvent.total)
						),
				}
			);

			if (response.status === 200) {
				SetUploadDocumentPercent(100);
				setUploadedDocumentUrl(response.data.secure_url);
			}
		} catch (error) {
			setErrors([
				'Whoops! Unable to upload blog cover. Please Try again Later',
			]);
			setIsUploadingDocumentStarted(false);
		}
	};

	useEffect(() => {
		setVariables({
			title: publication.title,
			category: publication.category,
			pubDocument: publication.pubDocument,
		});
		if (paramsId) {
			setEdit(true);
			setLoading(true);
		}
		if (files && files[0]) {
			setIsDocumentChoosed(true);
		}
		dispatch(getPublication(paramsId));
	}, [
		dispatch,
		publication.title,
		publication.pubDocument,
		files,
		paramsId,
		publication.category,
	]);

	const data = {
		publication: {
			...variables,
			pubDocument:
				uploadedDocumentUrl !== ''
					? uploadedDocumentUrl
					: variables.pubDocument,
		},
	};

	const updatePublication = () => {
		dispatch(updateAPublication(paramsId, data, history));
	};

	return (
		<AdminLayout>
			<Container fluid className='dashboard-content'>
				<Row>
					<Col sm={10}>
						<div className='page-header'>
							<h2 className='pageheader-title'>
								GO DISCOVER  Document | {publication.title}
							</h2>
							<div className='page-breadcrumb'>
								<nav aria-label='breadcrumb'>
									<ol className='breadcrumb'>
										<li className='breadcrumb-item'>
											<Link to='/account' className='breadcrumb-link'>
												Dashboard
											</Link>
										</li>
										<li className='breadcrumb-item'>
											<Link
												to='/account/publications'
												className='breadcrumb-link'
											>
												GO DISCOVER  Documents
											</Link>
										</li>
										<li className='breadcrumb-item'>View</li>
										<li className='breadcrumb-item active' aria-current='page'>
											{publication.title}
										</li>
									</ol>
								</nav>
							</div>
						</div>
					</Col>
					<Col sm={2}>
						<Link
							to='/account/publications'
							className='btn btn-block btn-light'
						>
							<i className='fa fa-arrow-left mr-1'></i> Go Back
						</Link>
					</Col>
				</Row>

				<div className='ecommerce-widget'>
					<Row>
						<Col xs={8} lg={8} md={12} sm={12}>
							<div className='card'>
								<div className='card-body'>
									<Form>
										<Form.Group>
											<Form.Label>Title</Form.Label>
											<Form.Control
												type='text'
												name='title'
												value={variables.title}
												onChange={onChange}
											/>
										</Form.Group>

										<Form.Group>
											<Form.Label>Document Type</Form.Label>

											<Form.Control
												as='select'
												className='mr-sm-2'
												required
												custom
												value={variables.category}
												name='category'
												onChange={onChange}
											>
												<option value='' disabled={true}>
													select...
												</option>
												<option value='publication'>Publication</option>
												<option value='Press Release'>Press Release</option>
												<option value='Covid-19'>Covid-19</option>
											</Form.Control>
										</Form.Group>
										<Form.Group>
											<Form.Label>Document</Form.Label>
											<DocumentUpload
												documentURL={
													variables.pubDocument !== ''
														? 'https://res.cloudinary.com/rcot/image/upload/v1610094246/COT-WEBSITE/DEFAULT-IMAGES/document_j4pw8l.png'
														: 'https://res.cloudinary.com/rcot/image/upload/v1610094246/COT-WEBSITE/DEFAULT-IMAGES/document_j4pw8l.png'
												}
												edit={edit}
												files={files}
												setFiles={setFiles}
												text='Document'
												useDropzone={useDropzone}
												handleOnUploadDocument={handleOnUploadDocument}
												uploadDocumentPercent={uploadDocumentPercent}
												isDocumentChoosed={isDocumentChoosed}
												isUploadingDocumentStarted={isUploadingDocumentStarted}
											/>
										</Form.Group>
									</Form>
								</div>
								<div className='card-footer'>
									<div className='float-right'>
										<div>
											{errors &&
												errors.map((value, indx) => (
													<Alert key={indx} variant='danger'>
														{value}
													</Alert>
												))}
											{/* {message && <Alert variant='success'>{message}</Alert>} */}
											{error && <Alert variant='danger'>{error}</Alert>}
										</div>

										{decodedToken && decodedToken.role === 'admin' && (
											<>
												<Button
													variant='danger'
													className='mr-2'
													onClick={() => toggle()}
												>
													<i className='fa fa-trash'></i> Delete
												</Button>

												<Button
													className='btn btn-lg'
													variant='primary'
													onClick={() => updatePublication()}
												>
													<i className='fa fa-save'></i>{' '}
													{loading ? 'Update' : 'Updating...'}
												</Button>
											</>
										)}
										{modal && (
											<Modal show={modal} onHide={() => closeModal()}>
												<Modal.Header closeButton key={publication.id}>
													<Modal.Title id='contained-modal-title-vcenter'>
														Are you sure you want to detete this publication? "
														<b style={{ color: 'brown' }}>
															{publication.title}
														</b>
														"
													</Modal.Title>
												</Modal.Header>
												<Modal.Footer>
													<Button
														className='btn btn-sm'
														style={{ backgroundColor: '#c3c3c3' }}
														onClick={() => closeModal()}
													>
														No
													</Button>{' '}
													<Button
														className='btn btn-primary btn-sm'
														onClick={() => deleteAPublication(publication.id)}
													>
														Yes
													</Button>{' '}
												</Modal.Footer>
											</Modal>
										)}
									</div>
								</div>
							</div>
						</Col>

						<Col sm={4}>
							<object
								data={publication.pubDocument}
								type='application/pdf'
								style={{
									width: '100%',
									height: 'auto',
									backgroundColor: '#cacaca',
								}}
							>
								<Link to={publication.pubDocument} className='btn btn-primary'>
									<i className='fa fa-download'></i> Download Document
								</Link>
							</object>
						</Col>
					</Row>
				</div>
			</Container>
		</AdminLayout>
	);
};
