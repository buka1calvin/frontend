import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Image, NavDropdown } from 'react-bootstrap';
import jwtDecode from 'jwt-decode';
import Logout from '../../pages/users/auth/Logout';

const NavBar = () => {
	const [isHovered, setHovered] = useState(false);
	const token = localStorage.IdToken;
	const decodedToken = jwtDecode(token);

	const handleNavMenuOpen = () => {
		setHovered(true);
	};
	const handleNavMenuClose = () => {
		setHovered(false);
	};
	return (
		<div className='dashboard-header'>
			<Navbar className='navbar navbar-expand-lg bg-white fixed-top'>
				<Navbar.Brand>
					<Link to='/'>
						<Image
							alt='Go Discover Africa Logo'
							title='Go Discover Africa Logo'
							src='https://res.cloudinary.com/dfsai53mw/image/upload/v1700398863/WEBS/godiscover/Godiscover_ystvkb.png'
							width='30%'
							className='img-fluid d-inline-block align-top ml-2 logo'
						/>
					</Link>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls='navBarMenu' />

				<Navbar.Collapse id='navBarMenu'>
					<Nav className='mr-auto'></Nav>
					<Nav className='ml-auto mr-4'>
						<NavDropdown
							title='My account'
							alignLeft
							className='dropdown fade-up'
							onMouseOver={handleNavMenuOpen}
							onMouseLeave={handleNavMenuClose}
							show={isHovered}
						>
							<NavDropdown.Item>
								<Link to='#'>
									{decodedToken && decodedToken.lastName}
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Logout />
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};
export default NavBar;
