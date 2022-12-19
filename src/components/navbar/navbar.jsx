import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'
import styles from './navbar.module.css'

export const Navbar = () => {
	return <nav className={styles.navbar}>
        <img src={Logo} />
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/'>About Us</Link>
            <Link to='/features'>Features</Link>
            <Link to='/pricing'>Pricing</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/blog'>Blog</Link>
            <button>Contact us</button>
        </div>
    </nav>;
};
