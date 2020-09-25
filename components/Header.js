import { useState, useEffect } from 'react';
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
import SettingsIcon from '@material-ui/icons/Settings';
import { IconButton, ThemeProvider } from '@material-ui/core';
import { getSettings, updateSettings } from '../actions/user';
import { getCookie } from '../actions/auth';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [theme, setTheme] = useState('');
	const [token, setToken] = useState('');

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		if (isAuth()) {
			const tempToken = getCookie('token');
			getSettings(tempToken).then(data => {
				if (data.error) {
					console.log(data.error);
				}
				setTheme(data.theme);
				document.documentElement.setAttribute('data-theme', data.theme);
			});
			setToken(tempToken);
		} else {
			document.documentElement.setAttribute('data-theme', 'dark');
			setTheme('dark');
		}
	};

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const toggleTheme = () => {
		const currentTheme = document.documentElement.getAttribute('data-theme');
		if (currentTheme === 'dark' || !currentTheme) {
			document.documentElement.setAttribute('data-theme', 'light');
			updateSettings(token, {
				theme: 'light',
			});
			setTheme('light');
		} else {
			document.documentElement.setAttribute('data-theme', 'dark');
			updateSettings(token, {
				theme: 'dark',
			});
			setTheme('dark');
		}
	};

	const textColor = theme === 'dark' ? 'white' : 'black';
	const togglerThemeDark = theme === 'dark' ? true : false;
	const togglerThemeLight = theme === 'light' ? true : false;

	return (
		<React.Fragment>
			<Head>
				<link rel='icon' href={`${DOMAIN}/static/images/shopping-cart.png`} />
			</Head>
			<Navbar color={theme} dark={togglerThemeDark} light={togglerThemeLight} expand='md'>
				<Link href='/'>
					<NavLink className='font-weight-bold navbarLink' style={{ color: textColor }}>
						<div>
							<img
								src={`${DOMAIN}/static/images/shopping-cart.png`}
								alt='shopping cart'
								style={{ width: '30px', height: 'auto' }}
							/>
							<span>SHOPPING LIST</span>
						</div>
					</NavLink>
				</Link>

				<NavbarToggler onClick={toggle} />

				<Collapse isOpen={isOpen} navbar>
					<Nav className='ml-auto' navbar>
						{!isAuth() && (
							<React.Fragment>
								<NavItem
									style={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
									}}
								>
									<Link href='/signin'>
										<NavLink
											className='navbarLink pb-1 pt-1'
											style={{ color: textColor }}
										>
											Signin
										</NavLink>
									</Link>
								</NavItem>
								<NavItem
									style={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
									}}
								>
									<Link href='/signup'>
										<NavLink
											className='navbarLink pb-1 pt-1'
											style={{ color: textColor }}
										>
											Signup
										</NavLink>
									</Link>
								</NavItem>
							</React.Fragment>
						)}

						{isAuth() && (
							<div className='dropdown'>
								<div className='dropbtn'>
									<IconButton>
										<SettingsIcon />
									</IconButton>
								</div>
								<div className='dropdown-content'>
									<a onClick={toggleTheme}>Theme: {theme}</a>
								</div>
							</div>
						)}

						{isAuth() && (
							<NavItem
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
								}}
							>
								<Link href='/user/update'>
									<NavLink
										className='navbarLink pb-1 pt-1'
										style={{ color: textColor }}
									>
										Update Profile
									</NavLink>
								</Link>
							</NavItem>
						)}

						{isAuth() && (
							<NavItem
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
								}}
							>
								<Link href='/contact'>
									<NavLink
										className='navbarLink pb-1 pt-1'
										style={{ color: textColor }}
									>
										Contact
									</NavLink>
								</Link>
							</NavItem>
						)}

						{isAuth() && (
							<NavItem
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
								}}
							>
								<NavLink
									className='navbarLink pb-1 pt-1'
									style={{ color: textColor }}
									onClick={() => signout(() => Router.replace(`/signin`))}
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
