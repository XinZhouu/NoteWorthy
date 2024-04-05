import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
	return (
		<nav className="navbar">
			<img src="/public/logo.png" alt="logo" className="navbar-logo"/>
			<div className="nav-links">
				<NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>HOME</NavLink>
				<NavLink to="/about-us" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>ABOUT</NavLink>
				<NavLink to="/videos" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>VIDEOS</NavLink>
				<NavLink to="/members" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>MEMBERS</NavLink>
			</div>
		</nav>
	);
}

export default NavBar;