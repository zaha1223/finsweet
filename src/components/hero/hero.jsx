import React from 'react';
import styles from './hero.module.css';
import designimg from '../../assets/ourdesign.png'

export const Hero = () => {
	return (
		<hero className={styles.hero}>
			<div>
				<p>About us</p>
				<h1 className={styles.heroHead}>Our designs solve problems</h1>
				<p className={styles.heroText}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam.
				</p>
			</div>
			<img className={styles.heroImg} src={designimg} />
		</hero>
	);
};
