import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'
import styles from './navbar.module.css'

export const Navbar = () => {
	return <nav className={styles.navbar}>
        <img src={Logo} />
        <div className={styles.navLinks}>
            <Link className={styles.navLink} to='/home'>Home</Link>
            <Link className={styles.navLink} to='/about'>About Us</Link>
            <Link className={styles.navLink} to='/features'>Features</Link>
            <Link className={styles.navLink} to='/pricing'>Pricing</Link>
            <Link className={styles.navLink} to='/faq'>FAQ</Link>
            <Link className={styles.navLink} to='/blog'>Blog</Link>
            <button className={styles.navBtn}>Contact us</button>
        </div>
    </nav>;
};
