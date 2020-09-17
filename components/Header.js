import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { APP_NAME, DOMAIN } from '../config';
import { signout, isAuth } from '../actions/auth';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
} from 'reactstrap';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<React.Fragment>
			<Head>
				<link
					rel='icon'
					href={`${DOMAIN}/static/images/shopping-cart.png`}
				/>
			</Head>
			<Navbar color='dark' light expand='md'>
				<Link href='/'>
					<NavLink
						style={{ cursor: 'pointer', color: 'white' }}
						className='font-weight-bold'
					>
						<div>
							<img
								src={`${DOMAIN}/static/images/shopping-cart.png`}
								alt='shopping cart'
								style={{ width: '30px', height: 'auto' }}
							/>
							<span>{APP_NAME}</span>
						</div>
					</NavLink>
				</Link>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='ml-auto' navbar>
						{!isAuth() && (
							<React.Fragment>
								<NavItem>
									<Link href='/signin'>
										<NavLink
											className='ml-1 mr-1'
											style={{ cursor: 'pointer', color: 'white' }}
										>
											Signin
										</NavLink>
									</Link>
								</NavItem>
								<NavItem>
									<Link href='/signup'>
										<NavLink
											className='ml-1 mr-1'
											style={{ cursor: 'pointer', color: 'white' }}
										>
											Signup
										</NavLink>
									</Link>
								</NavItem>
							</React.Fragment>
						)}

						{isAuth() && (
							<NavItem>
								<Link href='/user/update'>
									<NavLink
										className='ml-1 mr-1'
										style={{ cursor: 'pointer', color: 'white' }}
									>
										Update Profile
									</NavLink>
								</Link>
							</NavItem>
						)}

						{isAuth() && (
							<NavItem>
								<Link href='/contact'>
									<NavLink
										className='ml-1 mr-1'
										style={{ cursor: 'pointer', color: 'white' }}
									>
										Contact
									</NavLink>
								</Link>
							</NavItem>
						)}

						{isAuth() && (
							<NavItem>
								<NavLink
									className='ml-1 mr-1'
									style={{ cursor: 'pointer', color: 'white' }}
									onClick={() =>
										signout(() => Router.replace(`/signin`))
									}
								>
									Signout
								</NavLink>
							</NavItem>
						)}
					</Nav>
				</Collapse>
			</Navbar>
		</React.Fragment>
	);
};

export default Header;
