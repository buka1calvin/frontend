import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import jwtDecode from 'jwt-decode';
import { AdminLayout } from '../../../layouts';
import {
	Container,
	Row,
	Col,
	Button,
	Form,
	Image,
	Alert,
} from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import Axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';
import {
	getSingleTours,
	deleteTours,
	updateOneTours,
} from '../../../redux/actions';
import ImageUpload from '../../../components/section/imageUpload';

export const ToursAdminView = props => {
	const token = localStorage.IdToken;
	const decodedToken = jwtDecode(token);
	const { slug } = props.match.params;
	const { history } = props;
	const [modal, setModal] = useState(false);
	const [body, setBody] = useState('');
	const [uploadedImageUrl, setUploadedImageUrl] = useState('');
	const [uploadImagePercent, SetUploadImagePercent] = useState(0);
	const [isImageChoosed, setIsImageChoosed] = useState(false);
	const [isUploadingImageStarted, setIsUploadingImageStarted] = useState(false);
	const [errors, setErrors] = useState(null);
	const [files, setFiles] = useState([]);
	const [edit, setEdit] = useState(false);
	const [loading, setLoading] = useState(false);

	const [variables, setVariables] = useState({
		title: '',
		toursBody: '',
		authorId: '',
		image: '',
	});

	const toggle = () => {
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
	};

	const setText = (e, editor) => {
		const textData = editor.getContent();
		setBody(textData);
	};

	const onChange = e =>
		setVariables({
			...variables,
			[e.target.name]: e.target.value,
		});

	const oneTours = useSelector(state => state.toursReducer.oneTours);
	const error = useSelector(state => state.toursReducer.error);
	// const message = useSelector(state => state.toursReducer.message);

	const dispatch = useDispatch();

	const deleteATours = slug => {
		dispatch(deleteTours(slug, history));
		setModal(false);
	};

	const handleOnUploadImage = async e => {
		e.preventDefault();
		setIsUploadingImageStarted(true);
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
				`${process.env.REACT_APP_CLOUDINARY_BLOGCOVER_FOLDER}`
			);
			const response = await Axios.post(
				url,
				formData,
				{
					headers: { 'X-Requested-With': 'XMLHttpRequest' },
				},
				{
					onUploadProgress: progressEvent =>
						SetUploadImagePercent(
							Math.round((progressEvent.loaded * 100) / progressEvent.total)
						),
				}
			);

			if (response.status === 200) {
				SetUploadImagePercent(100);
				setUploadedImageUrl(response.data.secure_url);
			}
		} catch (error) {
			setErrors([
				'Whoops! Unable to upload blog cover. Please Try again Later',
			]);
			setIsUploadingImageStarted(false);
		}
	};

	useEffect(() => {
		setVariables({
			title: oneTours.title,
			toursBody: oneTours.toursBody,
			authorId: oneTours.authorId,
			image: oneTours.image,
		});
		if (slug) {
			setEdit(true);
			setLoading(true);
		}
		if (files && files[0]) {
			setIsImageChoosed(true);
		}
		dispatch(getSingleTours(slug));
	}, [
		dispatch,
		files,
		oneTours.authorId,
		oneTours.image,
		oneTours.toursBody,
		oneTours.title,
		slug,
	]);

	const data = {
		tours: {
			...variables,
			toursBody: body !== '' ? body : variables.toursBody,
			image: uploadedImageUrl !== '' ? uploadedImageUrl : variables.image,
		},
	};

	const updateTours = () => {
		dispatch(updateOneTours(slug, data, history));
	};

	return (
		<AdminLayout>
			<Container fluid className='dashboard-content'>
				<Row>
					<Col sm={8}>
						<div className='page-header'>
							<h2 className='pageheader-title'>Blogs | {oneTours.title}</h2>
							<div className='page-breadcrumb'>
								<nav aria-label='breadcrumb'>
									<ol className='breadcrumb'>
										<li className='breadcrumb-item'>
											<Link to='/account' className='breadcrumb-link'>
												Dashboard
											</Link>
										</li>
										<li className='breadcrumb-item'>
											<Link to='/account/tours' className='breadcrumb-link'>
												Blogs
											</Link>
										</li>
										<li className='breadcrumb-item'>View</li>
										<li className='breadcrumb-item active' aria-current='page'>
											{oneTours.title}
										</li>
									</ol>
								</nav>
							</div>
						</div>
					</Col>
					<Col sm={2}>
						<Link
							to={`/account/tours/comment/${slug}`}
							className='btn btn-block btn-light'
						>
							<i className='fa fa-comment mr-1'></i>Comments
						</Link>
					</Col>
					<Col sm={2}>
						<Link to='/account/tours' className='btn btn-block btn-light'>
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
											<Form.Label>Image Cover</Form.Label>
											<ImageUpload
												coverURL={
													variables.image !== ''
														? variables.image
														: 'https://res.cloudinary.com/rcot/image/upload/v1610094246/COT-WEBSITE/DEFAULT-IMAGES/default_Image_rgcqj7.jpg'
												}
												edit={edit}
												files={files}
												setFiles={setFiles}
												text='Blog Cover '
												useDropzone={useDropzone}
												handleOnUploadImage={handleOnUploadImage}
												uploadImagePercent={uploadImagePercent}
												isImageChoosed={isImageChoosed}
												isUploadingImageStarted={isUploadingImageStarted}
											/>
										</Form.Group>
										<Form.Group>
											<Form.Label>Body</Form.Label>
											<Editor
												apiKey='vocxqksl1lger7ttak7q87j3trvipgvjttvpp4fl4dfs4ddb'
												init={{
													height: 300,
													menubar: false,
												}}
												name='toursBody'
												value={variables.toursBody}
												onChange={setText}
											/>
										</Form.Group>
									</Form>
								</div>
								<div className='card-footer'>
									<div>{error && <Alert variant='danger'>{error}</Alert>}</div>

									<div className='float-right'>
										<div>
											{errors &&
												errors.map((value, indx) => (
													<Alert key={indx} variant='danger'>
														{value}
													</Alert>
												))}
											{/* {message && <Alert variant='success'>{message}</Alert>} */}
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
													onClick={() => updateTours()}
												>
													<i className='fa fa-save'></i>{' '}
													{loading ? 'Update' : 'Updating...'}
												</Button>
											</>
										)}
										{modal && (
											<Modal show={modal} onHide={() => closeModal()}>
												<Modal.Header closeButton key={oneTours.id}>
													<Modal.Title id='contained-modal-title-vcenter'>
														Are you sure you want to detete this tours? "
														<b style={{ color: 'brown' }}>{oneTours.title}</b>"
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
														onClick={() => deleteATours(oneTours.slug)}
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
							<Image
								alt='Travel Banner'
								title='Travel Banner'
								src={oneTours.image}
								className='img-fluid'
							/>
						</Col>
					</Row>
				</div>
			</Container>
		</AdminLayout>
	);
};
